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

    
</script>

<template>
    

    <Stats"
    :home-ball-poss="46"
    :home-total-shots="14"

    :away-ball-poss="54"
    :away-total-shots="10"
    />
</template>