<script setup lang="ts">


    const {id} = useRoute().params;
    const requestId = id as String || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/statistics`, {
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
    <div class="border-2 rounded-xl mx-48 my-10">

    </div>
</template>