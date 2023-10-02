<script setup lang="ts">
    import sportsData from "~/data/sportsData.json"
    let sports = ref(sportsData);

    let routePath = useRoute().params.sport;
        
    function whichSport() {
        for (let sport of sports.value) {
            if (sport.slug === routePath) {
                return sport;                
            } 
        }
    }
    const currentSport = whichSport(); 

    const tabs = ref([sports]);

</script>

<template>
    <div class="carousel tabs flex-nowrap py-2 bg-info-content" aria-label="tabs">
        <NuxtLink
            v-for="(sport, index) in sports"
            ref="tabs"
            :to="`/${sport.slug}`"
            :id="sport.id"
            :key="index"
            :class="['carousel-item', 'h-fit', 'tab', 'tab-bordered', 'font-semibold', 'uppercase', {tabActive: useRoute().params.sport === sport.slug}]"
        >{{ sport.name }}</NuxtLink>
    </div>
</template>