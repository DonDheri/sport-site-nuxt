<script setup lang="ts">
    const { id } = useRoute().params;
    const requestId = id as string || "";
    
</script>

<template>

    <DifferentSports/>

    <DifferentLeagues/>

    <Games/>
</template>