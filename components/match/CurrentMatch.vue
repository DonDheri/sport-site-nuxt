<script setup lang="ts">
    const props = defineProps({
        sportSlug: String,

        matchSlug: String,
        matchDate: String,
        matchTime: String,
        timeLeft: String,

        homeTeamName: String,
        homeTeamSlug: String,
        homeTeamScore: String || Number,

        awayTeamName: String,
        awayTeamSlug: String,
        awayTeamScore: String || Number,
    })
    const paramTab = useRoute().params.tab;
</script>

<template>
    <div class="flex place-content-center">
        <div class="grid grid-cols-3 grid-rows-12 gap-x-4 place-items-center text-center mt-4 lg:gap-x-16">
            <p class="col-span-3 row-span-1 text-xs">{{ props.matchDate }}</p>
            <p class="col-span-3 row-span-1 text-xs">{{ props.matchTime }}</p>

            <NuxtLink :to="`/${props.sportSlug}/team/${props.homeTeamSlug}/stats`" class="flex flex-col col-start-1 col-span-1 row-span-12">
                <div class="bg-black h-[50px] w-[50px] text-white place-self-center lg:h-[100px] lg:w-[100px]"></div>
                <p class="text-md">{{ props.homeTeamName }}</p>
            </NuxtLink>

            <div class="flex flex-col col-span-1 row-span-10 space-y-2">
            <p class="text-lg">{{ props.homeTeamScore }} - {{ props.awayTeamScore }}</p>
            <p class="text-xs">{{ props.timeLeft }}</p>
            </div>

            <NuxtLink :to="`/${props.sportSlug}/team/${props.awayTeamSlug}/stats`" class="flex flex-col col-span-1 row-span-12">
                <div class="bg-black h-[50px] w-[50px] text-white place-self-center lg:h-[100px] lg:w-[100px]"></div>
                <p class="text-md">{{ props.awayTeamName }}</p>
            </NuxtLink>
        </div>
    </div>
    <div class="divider my-0 mx-2"></div>
        
    <div class="w-full flex justify-center mb-3">
        <div class="tabs">
            <NuxtLink :to="`/${props.sportSlug}/match/${props.matchSlug}/stats`" :class="['tab', 'tab-bordered', { tabActive: paramTab === 'stats' }]">Stats</NuxtLink>
            <NuxtLink :to="`/${props.sportSlug}/match/${props.matchSlug}/line-ups`" :class="['tab', 'tab-bordered', { tabActive: paramTab === 'line-ups' }]">Line-ups</NuxtLink>
            <NuxtLink :to="`/${props.sportSlug}/match/${props.matchSlug}/h2h`" :class="['tab', 'tab-bordered', { tabActive: paramTab === 'h2h' }]">H2H</NuxtLink>
        </div>
    </div>
</template>