<script setup lang="ts">
    const props = defineProps({
        sportSlug: String,

        matchId: String || Array,
        matchDate: String,
        matchTime: String,
        timeLeft: String,

        homeTeamLogo: String,
        homeTeamName: String,
        homeTeamSlug: String,
        homeTeamScore: Number,

        awayTeamLogo: String,
        awayTeamName: String,
        awayTeamSlug: String,
        awayTeamScore: Number,
    })
    const paramTab = useRoute().params.tab;
</script>

<template>
    <div class="flex place-content-center">
        <div class="grid grid-cols-3 grid-rows-2 gap-x-4 place-items-center text-center mt-4 lg:gap-x-16">
            <p class="col-span-3 row-span-1 text-xs">{{ props.matchDate }}</p>
            <p class="col-span-3 row-span-1 text-xs">{{ props.matchTime }}</p>

            <NuxtLink :to="`/${props.sportSlug}/team/${props.homeTeamSlug}/statisics`" class="flex flex-col col-start-1 col-span-1 row-span-1">
                <img :src="homeTeamLogo" alt="no logo" class="h-[50px] w-[50px] place-self-center lg:h-[100px] lg:w-[100px]">
                <p class="text-md">{{ props.homeTeamName }}</p>
            </NuxtLink>

            <div class="flex flex-col col-span-1 row-span-1 space-y-2">
            <p class="text-lg">{{ props.homeTeamScore }} - {{ props.awayTeamScore }}</p>
            <p class="text-xs">{{ props.timeLeft }}</p>
            </div>

            <NuxtLink :to="`/${props.sportSlug}/team/${props.awayTeamSlug}/stats`" class="flex flex-col col-span-1 row-span-1">
                <img :src="awayTeamLogo" alt="no logo" class="h-[50px] w-[50px] place-self-center lg:h-[100px] lg:w-[100px]">
                <p class="text-md">{{ props.awayTeamName }}</p>
            </NuxtLink>
        </div>
    </div>
    <div class="divider my-0 mx-2"></div>
        
    <div class="w-full flex justify-center mb-3">
        <div class="tabs">
            <NuxtLink :to="`/${props.sportSlug}/match/${props.matchId}/statistics`" :class="['tab', 'tab-bordered', { tabActive: paramTab === 'statistics' }]">Stats</NuxtLink>
            <NuxtLink :to="`/${props.sportSlug}/match/${props.matchId}/lineups`" :class="['tab', 'tab-bordered', { tabActive: paramTab === 'lineups' }]">Line-ups</NuxtLink>
            <NuxtLink :to="`/${props.sportSlug}/match/${props.matchId}/h2h`" :class="['tab', 'tab-bordered', { tabActive: paramTab === 'h2h' }]">H2H</NuxtLink>
        </div>
    </div>
</template>