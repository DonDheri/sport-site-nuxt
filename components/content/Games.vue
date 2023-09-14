<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    function whichSport() {
        for (let sport of sports) {
            if (sport.active === true) {
                return sport;
            }
        }
    }
    const currentDate = new Date();
    function d(date: string | any) {
        return date.slice(0,10).toString().replaceAll("-", "");
    }
    function tz(tZone: string | any) {
        return tZone.toString().slice(14, 15);
    }
    const timeZone = tz(currentDate.toTimeString())
    const date = d(currentDate.toISOString());
    const currentSport = whichSport();
    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://livescore6.p.rapidapi.com/matches/v2/list-by-date`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        },
        params: {
            Category: currentSport?.category,
            Date: date,
            Timezone: timeZone
        },
    }))
    
    const games = data.value;
    
</script>

<template>
    <div class="text-lime-500">
    <p class="text-lg py-1">Today's Games</p>
        <div class="carousel space-x-4 w-screen my-4">
            <div v-for="(game, index) in games" :class="['carousel-item', 'flex-col', 'w-[200px]', 'p-3', { 'border-r': index < games.length - 1 }]">
                <p class="mb-3 underline">League name</p>
                <div class="grid grid-cols-7 items-center">
                    <!-- <img class="w-[50px] h-[50px] col-span-1 place-self-center" :src="game.T1[0].Img" alt="team logo"> --> <p class="w-[50px] h-[50px] bg-black"></p>
                    <p class="col-span-5 row-span-1 self-center">Name:</p>
                    <p class="col-span-1 row-span-1 justify-self-end">Score</p>
                </div>
                <div class="grid grid-cols-6 items-center">
                    <!-- <img class="w-[50px] h-[50px] col-span-1 place-self-center" :src="game.teams.away.logo" alt="team logo"> --> <p class="w-[50px] h-[50px] bg-black"></p>
                    <p class="col-span-4 row-span-1">Name:</p>
                    <p class="col-span-1 row-span-1 justify-self-end">Score</p>
                </div>
                <p>game start time - game status</p>
            </div>
        </div>
        <div class="divider divider-horisontal"></div>
    </div>
</template>