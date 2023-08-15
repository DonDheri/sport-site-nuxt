<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    function whichSport() {
        for (let sport of sports) {
            if (useRoute().path) {
                return sport;
            }
        }
    }


const currentSport = whichSport();

    
    
    
</script>

<template>

    <div class="border-2 mx-48 grid grid-cols-12 grid-rows-2 gap-5 overflow-x-scroll px-10 pb-5 rounded-xl my-6">
        <p class="justify-self-center col-span-12 ro text-2xl font-medium border-b-2 w-full p-5 mb-5 text-center">Leagues</p>
        <NuxtLink
            v-for="league of currentSport?.leagues"
            class="flex items-center justify-center col-span-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-l font-medium text-white my-5"
            :key="league.id"
            :to="`/content/${currentSport?.url}/matches/${league.id}`"
            >{{ league.title }}
        </NuxtLink>
    </div>
        
</template>