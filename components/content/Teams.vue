<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    function d(date: string | any[]) {
        return date.slice(0,10);
    }
    const date = d(new Date().toISOString());
    const config = useRuntimeConfig();
    const { data: Teams } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/games`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            date: date
        },
    }))
    const teams = Teams.value?.response;
</script>

<template>
    <div class="text-lime-500 text-center bg-gray-950">
    <p class="text-lg py-1">Teams</p>
        <div class="carousel space-x-4 w-screen my-4">
            <div v-for="team in teams" class="carousel-item flex-col bg-black place-items-center rounded-2xl w-[150px]">
                <p>{{ team.name }}</p>
                <img :src="team.logo" alt="team logo" class="w-[50px] h-[50px]">
            </div>
        </div>
    </div>
</template>