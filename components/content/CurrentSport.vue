<script setup lang="ts">
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data } = await useAsyncData(() => $fetch(`https://api-basketball.p.rapidapi.com/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || ''
        }
    }))
    const leagues = computed(() => {
        return data.value;
    })
</script>

<template>

    <div class="grid grid-cols-6 grid-gap-4">
        
    </div>

</template>