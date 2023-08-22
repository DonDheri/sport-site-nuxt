<script setup lang="ts">
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
    console.log(useRoute().params);
    
</script>

<template>

</template>