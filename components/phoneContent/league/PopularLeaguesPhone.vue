<script setup lang="ts">

</script>
<template>
    <div class="uppercase flex flex-row px-2">
        <NuxtLink :to="`/football/league/some-league/standings`" class="inline-flex gap-2 place-items-center text-center border border-neutral rounded-full px-3 py-2 w-auto shadow">
            <div class="h-[22px] w-[22px] bg-black"></div>
            <p class="text-xs">Some league</p>
        </NuxtLink>
    </div>
</template>