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
    console.log(currentMatch);
    
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
        <div class="border-2 p-2 rounded-xl justify-center flex flex-col place-items-center col-span-1">
            <p class="text-3xl mb-5 underline">{{ currentMatch.teams.home.name }}</p>
            <div class="pb-3 place-self-center object-center">
                <img class="object-fill h-[200px]" :src="currentMatch.teams.home.logo" alt="away-team logo">
            </div>
            <div class="flex flex-row border-2 rounded-xl">
                <ul class="text-2xl flex flex-col mx-10">
                    <p class="border-b-2">Quarter</p>
                    <li v-for="score, index in currentMatch.scores.home">{{ index.toString()[0].toUpperCase() + index.toString().slice(1).replace("_", " ") }}</li>
                </ul>
                
                <ul class="text-2xl flex flex-col mx-10">
                    <p class="border-b-2">Points</p>
                    <li v-for="score in currentMatch.scores.home"><v-if v-if="score === null">0</v-if>{{ score }}</li>
                    
                </ul>
            </div>
        </div>

        <div class="border-2 p-2 rounded-xl justify-center flex flex-col place-items-center col-span-1">
            <p class="text-3xl mb-5 underline">{{ currentMatch.teams.away.name }}</p>
            <div class="pb-3 place-self-center object-center">
                <img class="object-fill h-[200px]" :src="currentMatch.teams.away.logo" alt="away-team logo">
            </div>
            <div class="flex flex-row border-2 rounded-xl">
                <ul class="text-2xl flex flex-col mx-10">
                    <p class="border-b-2 w-full">Quarter</p>
                    <li v-for="score, index in currentMatch.scores.away">{{ index.toString()[0].toUpperCase() + index.toString().slice(1).replace("_", " ") }}</li>
                    
                </ul>
                
                <ul class="text-2xl flex flex-col mx-10">
                    <p class="border-b-2 w-full">Points</p>
                    <li v-for="score in currentMatch.scores.away"><v-if v-if="score === null">0</v-if>{{ score }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>