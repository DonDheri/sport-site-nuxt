<script setup lang="ts">

    const { id } = useRoute().params;
    const requestId = id as string || "";

    const config = useRuntimeConfig();
    const { data } = await useAsyncData("requestId", () => $fetch(`https://api-basketball.p.rapidapi.com/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
    }))
    // const leagues = computed(() => {
    //     return data?.value.leagues;
    // })
        

</script>

<template>
    
    <DifferentSports/>

    <DifferentLeagues/>

    <ShowData/>

</template>