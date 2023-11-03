<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    const sports = ref(sportsData);
    const config = useRuntimeConfig();
    const params = useRoute().params;

    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();
    const {data: currentLeague} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/leagues/${params.league}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            page: 1,
        },
    }));
    const league = computed(() => {
        return currentLeague.value;
    })

    console.log(league.value);
    
</script>
<template>
    <div class="p-2 grid grid-cols-12 grid-rows-5 place-items-center">
        <img  alt="logo" class="h-[100px] w-[100px] row-span-3 col-span-12">
        <p class="text-lg col-span-7 row-span-2 ">{{ leagueName }}</p>
        <p class="col-span-1 row-span-2">-</p>
        
        <select class="select select-bordered select-sm col-span-4 row-span-2">
            <option selected>{{ season1 }}</option>
            <option>{{ season2 }}</option>
            <option>{{ season3 }}</option>
        </select>
    </div>
    <div class="flex place-content-center">
        <div class="tabs overflow-x-scroll overflow-y-hidden flex-nowrap fit-content py-3">
            <NuxtLink :to="`/${currentSport?.slug}/league/${leagueSlug}/standings`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'standings'}]">Standings</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/league/${leagueSlug}/fixtures`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'fixtures'}]">Fixtures</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/league/${leagueSlug}/results`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'results'}]">Results</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/league/${leagueSlug}/stats`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'stats'}]">Stats</NuxtLink>
        </div>
    </div>            

</template>