<script setup lang="ts">
    import { sports } from '@/components/content/sports';
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    
</script>

<template>

    <DifferentOptions/>
    
    <DifferentOptions/>

</template>