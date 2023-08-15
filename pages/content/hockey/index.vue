<script setup lang="ts">
    import { sports } from "components/content/Sports.mjs"
    const { id } = useRoute().params;
    const requestId = id as string || "";
</script>

<template>

    <DifferentSports/>
    

</template>