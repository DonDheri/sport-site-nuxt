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
        return event.value.data;
    });
    const homeTeam = game.value.home_team;
    const awayTeam = game.value.away_team;
    

    
</script>

<template>
    <div class="flex place-content-center">
        <div class="grid grid-cols-3 grid-rows-2 gap-x-4 place-items-center text-center mt-4 lg:gap-x-16">
            <p class="col-span-3 row-span-1 text-xs">{{ game.start_at.slice(0, 10).replaceAll('-', '/') }}</p>
            <p class="col-span-3 row-span-1 text-xs">{{ game.start_at.slice(11, 16) }}</p>

            <NuxtLink :to="`/${currentSport?.slug}/team/${homeTeam.id}/statistics`" class="flex flex-col col-start-1 col-span-1 row-span-1">
                <img :src="homeTeam.logo" alt="no logo" class="h-[50px] w-[50px] place-self-center lg:h-[100px] lg:w-[100px]">
                <p class="text-md">{{ homeTeam.name }}</p>
            </NuxtLink>

            <div class="flex flex-col col-span-1 row-span-1 space-y-2">
            <p class="text-lg">{{ game.home_score?.display || 0 }} - {{ game.away_score?.display || 0 }}</p>
            <p class="text-xs">{{  }}</p>
            </div>

            <NuxtLink :to="`/${currentSport?.slug}/team/${game.away_team_id}/statisics`" class="flex flex-col col-span-1 row-span-1">
                <img :src="awayTeam.logo" alt="no logo" class="h-[50px] w-[50px] place-self-center lg:h-[100px] lg:w-[100px]">
                <p class="text-md">{{ awayTeam.name }}</p>
            </NuxtLink>
        </div>
    </div>
</template>