<script setup lang="ts">    
    import {sports} from "@/components/content/Sports.mjs"
    function dateFormatter(date: string) {
        return date.slice(0,10)
    }
    const date = dateFormatter(new Date().toISOString());
    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/games`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            date: date
        },
    }))

    const matches = data.value?.response;
    
    function whichMatch() {
        for (let match of matches) {
            if (match.id.toString() === requestId) {
                return match
            }
        }
    }
    
    const currentMatch = whichMatch();
    
</script>

<template>
    <div class="mt-5 grid grid-cols-2 gap-7 text-center mx-16">
        <div class="col-span-2 border-2 rounded-xl mb-5 grid grid-cols-5 border-b-2 text-2xl">
            <div class="grid grid-cols-5 col-span-5 border-b-2 py-1">
                <p>Date</p>
                <p>Time</p>
                <p>Status</p>
                <p>League</p>
                <p>Country</p>
            </div>
            <div class="grid grid-cols-5 col-span-5 py-1">
                <p>{{ dateFormatter(currentMatch.date) }}</p>
                <p>{{ currentMatch.time }}</p>
                <p>{{ currentMatch.status.long }}</p>
                <p>{{ currentMatch.league.name }}</p>
                <p>{{ currentMatch.country.name }}</p>
            </div>
        </div>
        <div
        v-for="team in currentMatch.teams"
        class="border-2 p-2 rounded-xl justify-center flex flex-col col-span-1">
            <p class="text-3xl mb-5 underline">{{ team.name }}</p>
            <div class="pb-3 place-self-center object-center">
                <img class="object-fill h-[200px]" :src="team.logo" alt="away-team logo">
            </div>
            <ul class="text-2xl grid grid-cols-2 grid-rows-5">
                <li>Quarter</li>
                <li>Points</li>
                
            </ul>
        </div>
    </div>
</template>