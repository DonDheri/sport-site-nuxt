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
    <div>
        <ul class="flex flex-col mr-4">
            <h1 class="text-lg border-b border-neutral mb-1 pb-1" >Popular Leagues</h1>
            <li>
                <NuxtLink v-for="league in popularLeagues" :to="`/${currentSport?.slug}/league/${league.id}`" class="uppercase text-sm flex space-x-3 place-items-center">
                    <img :src="league.logo" class="w-[50px] h-[50px]" alt="logo">
                    <p>{{ league.name_translations.en }}</p>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>