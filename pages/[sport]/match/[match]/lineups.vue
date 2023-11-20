<script setup lang="ts">
    const params = useRoute().params;
    const config = useRuntimeConfig();

    const {data: getLineups, error: errorLineups} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}/lineups`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        
    }));
    const lineups = computed(() => {
        return getLineups.value.data;
    });
    const homeLineup = lineups.value[0];
    const awayLineup = lineups.value[0];
    
    
</script>

<template>
    <CurrentMatch/>

    <MatchTabsBar/>

    <LineUps/>
</template>