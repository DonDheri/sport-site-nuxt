<script setup lang="ts">
    const props = defineProps({
        leagueLogo: String,
        leagueName: String,
    })
</script>

<template>
    <div>
        <ul class="flex flex-col w-full mr-4">
            <h1 class="text-lg border-b border-neutral mb-1 pb-1" >Popular Leagues</h1>
            <li>
                <NuxtLink :to="`/football/league/some-league/standings`" class="uppercase text-sm flex space-x-3">
                    <img :src="props.leagueLogo" class="w-[50px] h-[50px]" alt="logo">
                    <p>{{ props.leagueName }}</p>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>