<script setup lang="ts">
    import { sports } from '@/components/content/Sports';
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    
</script>

<template>

    <DifferentOptions
    :url="currentSport"
    :title="currentSport.title"
    :id="currentSport.id"
    />
    

</template>