<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    const sports = ref(sportsData)

    const params = useRoute().params;
    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug.toString() === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();
    
    const config = useRuntimeConfig();
    const {data: event} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }));
    const game = computed(() => {
        return event.value;
    });
    
    
</script>
<template>
    <CurrentMatch/>
    
    
</template>