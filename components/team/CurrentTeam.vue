<script setup lang="ts">
    const params = useRoute().params;
    const props = defineProps({
        sportSlug: String,
        teamSlug: String,

        teamLogo: String,
        teamName: String,
        
        season1: String,
        season2: String,
        season3: String,
    })
</script>

<template>
    <div class="flex flex-col">
        <div class="p-2 grid grid-cols-12 grid-rows-5 place-items-center">
            <div class="bg-red-900 h-[100px] w-[100px] row-span-3 col-span-12">{{ teamLogo }}</div>
            <p class="text-lg col-span-7 row-span-2 ">{{ teamName }}</p>
            <p class="col-span-1 row-span-2">-</p>
            
            <select class="select select-bordered select-sm col-span-4 row-span-2">
                <option class="selected">{{ season1 }}</option>
                <option>{{ season2 }}</option>
                <option>{{ season3 }}</option>
            </select>
        </div>

        <div class="tabs place-self-center">
            <NuxtLink :to="`/${sportSlug}/team/${teamSlug}/stats`" :class="['tab', 'tab-bordered', {tabActive: params.tab === 'stats'}]">Stats</NuxtLink>
            <NuxtLink :to="`/${sportSlug}/team/${teamSlug}/results`" :class="['tab', 'tab-bordered', {tabActive: params.tab === 'results'}]">Results</NuxtLink>
            <NuxtLink :to="`/${sportSlug}/team/${teamSlug}/fixtures`" :class="['tab', 'tab-bordered', {tabActive: params.tab === 'fixtures'}]">Fixtures</NuxtLink>
            <NuxtLink :to="`/${sportSlug}/team/${teamSlug}/players`" :class="['tab', 'tab-bordered', {tabActive: params.tab === 'players'}]">Players</NuxtLink>

        </div>
    </div>
    <slot></slot>
</template>