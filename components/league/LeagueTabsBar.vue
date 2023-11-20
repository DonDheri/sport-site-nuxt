<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import popLeagues from "~/data/popularLeaguesFootball.json";
    const popularLeagues = ref(popLeagues);
    const sports = ref(sportsData);
    const params = useRoute().params;
    const path = useRoute().path;
    
    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    const whichLeague = () => {
        for (let league of popularLeagues.value) {
            if (league.id.toString() === params.league) {
                return league;
            }
        }
    }
    const currentLeague = whichLeague();
</script>

<template>
    <div class="flex place-content-center">
        <div class="tabs overflow-y-hidden flex-nowrap fit-content py-3">
            <NuxtLink :to="`/${currentSport?.slug}/league/${params.league}/${params.season}/standings`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: path.includes('standings') === true}]">Standings</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/league/${params.league}/${params.season}/fixtures`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: path.includes('fixtures') === true}]">Fixtures</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/league/${params.league}/${params.season}/results`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: path.includes('results') === true}]">Results</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/league/${params.league}/${params.season}/stats`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: path.includes('stats') === true}]">Stats</NuxtLink>
        </div>
    </div>
</template>