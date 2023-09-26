<script setup lang="ts">

</script>
<template>
    <div class="grid grid-cols-3 grid-rows-12 place-items-center text-center">
        <p class="col-span-3 row-span-1 text-xs">Game Date</p>
        <p class="col-span-3 row-span-1 text-xs">Game Time</p>
        <div class="flex flex-col col-start-1 col-span-1 row-span-12">
            <div class="bg-black h-[50px] w-[50px] text-white place-self-center"></div>
            <p class="text-lg">Team Name</p>
        </div>
        <div class="flex flex-col col-span-1 row-span-10">
           <p class="text-xl">score - score</p>
           <p class="text-xs">Time Left</p>
        </div>
        <div class="flex flex-col col-span-1 row-span-12">
            <div class="bg-black h-[50px] w-[50px] text-white place-self-center"></div>
            <p class="text-lg">Team Name</p>
        </div>
    </div>
    <div class="divider my-0"></div>
    <div class="w-full flex">
        <div class="tabs">
            <NuxtLink class="tab tab-active">Home</NuxtLink>
            <NuxtLink class="tab">Stats</NuxtLink>
            <NuxtLink class="tab">Line-ups</NuxtLink>
            <NuxtLink class="tab">Table</NuxtLink>
            <NuxtLink class="tab">H2H</NuxtLink>
            
        </div>
    </div>
</template>
