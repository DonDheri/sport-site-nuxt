<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    
    const {id} = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/leagues`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            type: "league",

        },
    }))
    
    function whichSport() {
        for (let sport of sports) {
            if (useRoute().path) {
                return sport;
            }
        }
    }

    const currentSport = whichSport();

    const leagues = data.value?.response;
    

    
</script>

<template>

    <div class="border-2 mx-48 grid grid-cols-5 gap-5 px-10 pb-5 rounded-xl my-6">
        <p class="justify-self-center col-span-5 text-2xl font-medium border-b-2 w-full p-5 mb-5 text-center">Leagues</p>
        <LeagueBtn 
        v-for="league in leagues"
        :sport-url="currentSport?.url"
        :league-id="league.id"
        :league-name="league.name"
        :league-logo="league.logo"
        :league-country="league.country.name"
        />
    </div>
        
</template>