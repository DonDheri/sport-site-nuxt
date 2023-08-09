<script setup lang="ts">
    import { sports } from "./Sports.js"
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];

    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>("requestId", () => $fetch(`https://api-basketball.p.rapidapi.com/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            id: requestId
        }
    }))

    const leagues = computed(() => {
        return data?.value;
    })
    
    
</script>

<template>

    <div class="border-2 mx-48 grid grid-rows-2 overflow-x-scroll px-10 rounded-xl my-6">
        <p class="justify-self-center text-2xl font-medium border-b-2 w-full mb-5 p-5 text-center">{{ sports[Number(requestId)].title }} Leagues</p>
        <div>
            <button v-for="league in currentSport.leagues" :id="currentSport.id.toString()" @click="requestId = league.id.toString()" class="bg-gradient-to-r from-blue-500 to-blue-600 rounded px-5 py-2 bg-zinc-600 mx-6 text-white">
                <NuxtLink :to="`/content/${currentSport.url}/leagues/${league.id.toString()}`">{{ league.title }}</NuxtLink>
            </button>
        </div>
    </div>
        
</template>