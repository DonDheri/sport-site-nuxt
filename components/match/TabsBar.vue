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
</script>

<template>
    <div class="w-full flex justify-center mb-3">
        <div class="tabs">
            <NuxtLink :to="`/${currentSport?.slug}/match/${params.match}/lineups`" :class="['tab', 'tab-bordered', {tabActive: useRoute().fullPath.includes('lineups') === true}]">Line-ups</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/match/${params.match}/statistics`" :class="['tab', 'tab-bordered', {tabActive: useRoute().fullPath.includes('statistics') === true}]">Stats</NuxtLink>
            <NuxtLink :to="`/${currentSport?.slug}/match/${params.match}/h2h`" :class="['tab', 'tab-bordered', {tabActive: useRoute().fullPath.includes('h2h') === true}]">H2H</NuxtLink>
        </div>
    </div>
</template>