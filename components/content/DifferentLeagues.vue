<script setup lang="ts">
    import sports from "./sports"
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
</script>

<template>

    <!-- <div class="grid grid-cols-12 gap-5 border-2 p-5 mx-48 rounded-xl overflow-x-scoll">

        <NuxtLink 
            v-for="sport in sports"
            
            class="flex justify-center align-center bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-white"
            :to="`/content/${sport.url}/${sport.id}`"
            >
            {{ sport.id }}
        </NuxtLink>

    </div> -->

    <div class="border-2 mx-48 grid grid-rows-2 overflow-x-scroll px-10 rounded-xl my-6">
        <p class="justify-self-center text-2xl font-medium border-b-2 w-full mb-5 p-5 text-center">Different {{ sports[Number(requestId)].name }} Leagues</p>
        <div>
            <button v-for="league in currentSport.leagues" class="bg-gradient-to-r from-blue-500 to-blue-600 rounded px-5 py-2 bg-zinc-600 mx-6 text-white">
                <NuxtLink 
                :to="`/content/${currentSport.url}/${requestId}`"
                >
                {{ league.name }}
                </NuxtLink>
            </button>
        </div>
    </div>
        
</template>