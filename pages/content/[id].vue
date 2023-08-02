<script setup lang="ts">

    import sports from "../../components/content/sports.js"
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data } = await useAsyncData(() => $fetch(`https://api-basketball.p.rapidapi.com/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            name: sports[0].leagues?[],
            id: sports[0].l
        }
    }))
    const leagues = computed(() => {
        return data.value;
    })
</script>

<template>
    <div class="flex text-center w-full justify-center my-10">

        <div class="grid grid-cols-12 gap-5 border-2 p-5 rounded-xl">
            
        </div>
    </div>
    </template>