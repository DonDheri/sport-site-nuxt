<script setup lang="ts">
    import sports from "../../components/content/sports.js"
    
</script>

<template>

    <DifferentSports/>

    <div class="grid grid-cols-12 gap-5 border-2 p-5 rounded-xl">

        <NuxtLink 
        v-for="league in sports[0].leagues"
        class="flex justify-center align-center bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-white"
        :to="`/content/basket-ball/${league.id}`"
        >
            {{ league.name }}
        </NuxtLink>
            
    </div>

</template>