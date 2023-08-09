<script setup lang="ts">
    import { sports } from './sports';

    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    
    
</script>
<template>
    <div v-if="useRoute().path=='/'||'/content/'" class="border-2 mx-48 grid grid-cols-8 grid-rows-2 overflow-x-scroll px-10 rounded-xl my-6">
        <p class="justify-self-center col-span-12 ro text-2xl font-medium border-b-2 w-full mb-5 p-5 text-center">{{ currentSport.title }}</p>
        <button v-for="s in sports" :key="s.id" class="bg-gradient-to-r from-blue-500 to-blue-600 rounded px-5 py-2 bg-zinc-600 mx-6 text-white">
            <NuxtLink :to="`/content/${s.url}/`">{{ s.title }}</NuxtLink>
        </button>
    </div>
</template>