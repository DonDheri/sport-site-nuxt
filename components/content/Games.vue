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
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            date: date
        },
    }))

    const games = data.value?.response;
    
</script>

<template>
    <div class="text-lime-500 bg-gray-950">
    <p class="text-lg py-1">Today's Games</p>
        <div class="carousel space-x-4 w-screen my-4">
            <div v-for="game in games" class="carousel-item flex-col bg-black rounded-2xl w-[150px] p-3">
                <div class="flex flex-row">
                    <p class="justify-self-start">{{ game.teams.home.name }}:</p>
                    <p class="justify-self-end">{{ game.scores.home.total }}</p>
                </div>
                <div class="flex flex-row">
                    <p class="justify-self-start">{{ game.teams.away.name }}:</p>
                    <p class="justify-self-end">{{ game.scores.away.total }}</p>
                </div>
            </div>
        </div>
    </div>
</template>