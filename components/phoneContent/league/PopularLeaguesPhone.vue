<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import popLeagues from "~/data/popularLeaguesFootball.json";
    const popularLeagues = ref(popLeagues);
    const params = useRoute().params;
    const sports = ref(sportsData)
    const config = useRuntimeConfig();

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
    <div class="carousel uppercase flex flex-row mx-2">
        <NuxtLink v-for="league in popularLeagues" :to="`/${currentSport?.slug}/league/${league.id}/standings`" class="carousel-item space- place-items-center text-center border border-neutral rounded-full px-3 py-2 mx-[2px] w-auto shadow">
            <img :src="league.logo" alt="logo" class="h-[22px] w-[22px]">
            <p class="text-xs">{{ league.name_translations.en }}</p>
        </NuxtLink>
    </div>
</template>