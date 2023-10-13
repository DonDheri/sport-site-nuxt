<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    const sports = ref(sportsData)

    const params = useRoute().params;
    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();
    
    const config = useRuntimeConfig();
    const {data: event} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/events/${params.match.toString()}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }));
    const game = computed(() => {
        return event.value;
    });
    console.log(currentSport);
    
    
</script>
<template>
    <CurrentMatch
        :sport-slug="'football'"
        
        :match-id="'id'"
        :match-date="'Date'"
        :match-time="'Time'"
        :time-left="'Time Left'"

        :home-team-name="'Home Team'"
        :home-team-slug="'home-team'"
        :home-team-score="'Score'"

        :away-team-name="'Away Name'"
        :away-team-slug="'away-team'"
        :away-team-score="'Score'"
    />
    
</template>