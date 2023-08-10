<script setup lang="ts">
    import { sports } from './Sports';

    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    const props = defineProps<{
        url: string
        id: number
        title: string
    }>()
    

    
    
</script>
<template>
    <div class="border-2 mx-48 grid grid-cols-12 grid-rows-2 gap-5 overflow-x-scroll px-10 pb-5 rounded-xl my-6">
        <p class="justify-self-center col-span-12 ro text-2xl font-medium border-b-2 w-full p-5 mb-5  text-center">Sports</p>
        <button v-for="(s, index) in sports" class="btn col-span-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-l font-medium text-white my-5">
            <NuxtLink :to="`/${props.url}`">{{ props.title }}</NuxtLink>
        </button>
    </div>
</template>