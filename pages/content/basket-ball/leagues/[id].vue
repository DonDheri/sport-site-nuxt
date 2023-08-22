<script setup lang="ts">
    import {sports} from "@/components/content/Sports.mjs"
    function whichSport() {
        for (let sport of sports) {
            if (useRoute().path) {
                return sport;
            }
        }
    }

    const currentSport = whichSport();

    const {id} = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/teams`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            season: "2022-2023",
            league: Number(requestId)

        },
    }))
    const teams = data.value?.response;

    
    
</script>

<template>
    
    <div class="border-2 mx-48 grid grid-cols-5 gap-5 px-10 pb-5 rounded-xl my-6 p-5">
        <p class="col-span-5 text-center text-3xl border-b-2">Teams</p>
        <NuxtLink :to="`/content/${currentSport?.url}/teams/${requestId}-${team.id}`" v-for="team in teams" class="text-2xl flex flex-col border-2 rounded-xl place-items-center"><img class="w-[150px]" :src="team.logo" alt="team logo"> {{ team.name }}</NuxtLink>
    </div>
    
</template>