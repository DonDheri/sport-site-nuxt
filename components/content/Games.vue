<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    function whichSport() {
        for (let sport of sports) {
            if (useRoute().path.includes(sport.url)) {
                return sport;
            }
        }
    }
    function d(date: string | any[]) {
        return date.slice(0,10);
    }
    const date = d(new Date().toISOString());
    const currentSport = whichSport();
    
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
    
</script>

<template>


    <div class="text-center border-2 mx-48 grid grid-cols-4 gap-3 px-3 rounded-xl my-6">
        
        <p class="col-span-4 text-2xl font-medium border-b-4 p-5 mb-5 text-center">Matches</p>
        
        <NuxtLink
            v-for="match in matches"
            :to="`/content/${currentSport?.url}/matches/${match.id}`"
            class="rounded-xl border-2 p-5 grid grid-cols-6 grid-rows-2 justify-center items-center"
        >
            <p class="text-2xl text-center col-span-6 row-span-2">{{ match.time }}</p>
            <div class="col-span-6 flex flex-row">
                <div class="flex flex-col">
                    <p class="text-center text-xl mb-4">
                        {{ match.teams.home.name }}
                    </p>
                    <img class="h-[100px] w-[100px]" :src="match.teams.home.logo" alt="home-team logo">
                </div>
                
                <p class="text-4xl font-medium my-10 border-x-2 text-center px-1 mx-5 pb-2">vs</p>
                
                <div class="flex flex-col justify-center">
                    <p class="text-center text-xl mb-4">
                        {{ match.teams.away.name }}
                    </p>
                    <img class="h-[100px] w-[100px]" :src="match.teams.away.logo" alt="away-team logo">
                </div>
            </div>
        </NuxtLink>
    </div>
            


</template>