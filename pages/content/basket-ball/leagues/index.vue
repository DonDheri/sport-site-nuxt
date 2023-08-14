<script lang="ts" setup>
    import { sports } from '@/components/content/Sports';
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    

    
    





    useServerHeadSafe({
        title: 'Sport Site'
    });
    
    
</script>
<template>
    <DifferentSports/>    
    <DifferentLeagues/>
</template>