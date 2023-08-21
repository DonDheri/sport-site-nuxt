<script setup lang="ts">
    import {sports} from "./Sports.mjs"
</script>

<template>
    <div class="border-2 mx-48 grid grid-cols-12 grid-rows-2 gap-5 overflow-x-scroll px-10 p-5 rounded-xl my-6">
        <p class="justify-self-center col-span-12 text-2xl font-medium border-b-2 w-full pb-5 text-center">Sports</p>
        <NuxtLink class="flex items-center justify-center p-2 col-span-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-l font-medium text-white" >{{ "___" }}</NuxtLink>
    </div>
</template>