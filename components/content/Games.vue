<script setup lang="ts">
    import { sports } from "./Sports.js"
    function whichSport() {
        for (let sport of sports) {
            if (useRoute().path.includes(sport.url)) {
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

    const games = computed(() => {
        return data.value?.response;
    })
    
    
</script>

<template>


    <div class="border-2 mx-48 grid grid-cols-4 gap-5 grid-rows-auto p-5 rounded-xl my-6">
        <p class="col-span-4 text-2xl font-medium border-b-2 w-full p-5 mb-5 text-center">Games</p>

            <div v-for="game in games" class="rounded-xl border-2 p-5 flex flex-col justify-center items-center">
                <div class="text-center">
                    <p class="text-center text-xl mb-4">
                        {{ game.teams.home.name }}
                    </p>
                    <img :src="game.teams.home.logo" alt="home team logo">
                </div>
                <p class="text-4xl font-medium my-3 border-y-2 text-center w-full pb-2">vs</p>
                <div >
                    <p class="text-center text-xl mb-4">
                        {{ game.teams.away.name }}
                    </p>
                    <img :src="game.teams.away.logo" alt="away team logo">
                </div>
            </div>
        </div>
            


</template>