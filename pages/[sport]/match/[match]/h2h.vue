<script setup lang="ts">
    const params = useRoute().params;
    const config = useRuntimeConfig();

    const {data: event} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }));
    const game = computed(() => {
        return event.value.data;
    });
    
</script>

<template>
    <H2H
    :game-date="'10/09-2023'"
    :game-time="'00:00'"

    :home-name="'Home Team'"
    :home-score="2"
    
    :away-name="'Away Team'"
    :away-score="1"
    />
</template>