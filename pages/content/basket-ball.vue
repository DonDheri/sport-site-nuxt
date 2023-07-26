<script setup lang="ts">
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data } = await useAsyncData(() => $fetch(`https://api-basketball.p.rapidapi.com/teams?league=12&season=2019-2020`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || ''
        }
    }))

</script>

<template>

    <DifferentSports/>

    <div class="grid grid-cols-4 gap-5">
        <div v-for="d in data">
            <p>{{ d }}</p>
        </div>
    </div>

</template>