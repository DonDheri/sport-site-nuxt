<script setup lang="ts">
    import { sports } from "@/components/content/Sports.js"
    const { id } = useRoute().params;
    const requestId = id as string || "";
</script>

<template>

    <DifferentOptions/>
    

</template>