<script setup lang="ts">
    import { sports } from '@/components/content/Sports';
    const { params } = useRoute().params;
    const requestId = params as string || "";
    const currentSport = sports[Number(requestId)];
    
</script>

<template>

    <DifferentOptions
    :sports="
        {
            id: currentSport.id,
            title: currentSport.title,
            url: currentSport.url
        }
        "
    />
    

</template>