<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    function whichSport() {
        for (let sport of sports) {
            if (useRoute()) {
                return sport;
            }
        }
    }

    const currentSport = whichSport();
    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/games/`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            season: "2019-2020",
            league: requestId,
            
        },
    }))

    const matches = computed(() => {
        return data.value?.response;
    })
    
    
</script>

<template>


    <div class="text-center border-2 mx-48 grid grid-cols-6 gap-3 px-3 rounded-xl my-6">
        
        <p class="col-span-6 text-2xl font-medium border-b-4 w-full p-5 mb-5 text-center">Matches</p>
        
        <NuxtLink
            v-for="match in matches"
            :to="`/content/${currentSport?.url}/matches/match/${match.id}`"
            class="rounded-xl border-2 p-5 flex flex-col justify-center items-center"
        >
            <div class="flex flex-col">
                <p class="text-center text-xl mb-4">
                    {{ match.teams.home.name }}
                </p>
                <img class="h-[100px] w-[100px]" :src="match.teams.home.logo" alt="home team logo">
            </div>

            <p class="text-4xl font-medium my-10 border-y-2 text-center w-full pb-2">vs</p>
            
            <div class="flex flex-col justify-center">
                <img class="mb-3 h-[150px] w-[150px]" :src="match.teams.away.logo" alt="away team logo">
                <p class="text-center text-xl">
                    {{ match.teams.away.name }}
                </p>
            </div>
        </NuxtLink>
    </div>
            


</template>