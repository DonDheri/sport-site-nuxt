<script setup lang="ts">
    import { sports }  from "@/components/content/Sports.js"
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];

</script>

<template>
    <div class="border-2 mx-48 grid grid-rows-2 overflow-x-scroll rounded-xl my-6">
        <p class="justify-self-center text-2xl font-medium border-b-2 w-full mb-5 p-5 text-center">Sports</p>
        <div>
            <button
                v-for="(sport) in sports"
                class="bg-gradient-to-r from-blue-500 to-blue-600 rounded px-5 py-2 bg-zinc-600 mx-6 text-white"
                >
                <NuxtLink :to="`/content/${sport.id}`">{{ sport.name }}</NuxtLink>
            </button>
        </div>

    </div>

</template>