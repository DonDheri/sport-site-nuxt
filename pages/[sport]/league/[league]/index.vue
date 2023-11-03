<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";

    let sports = ref(sportsData);
    const sportSlug = useRoute().params.sport;

    function whichSport() {
        for (let sport of sports.value) {
            if (sport.slug === sportSlug) {
                return sport;                
            }
        }
    }
    const sportId = whichSport()?.id.toString() || "";
    
    const nextGames = ref([]);
    const game = ref();
    
    
    
    
</script>
<template>
    
    <CurrentLeague/>

    <TabsBar/>
</template>