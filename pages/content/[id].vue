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

    <DifferentOptions
    :sports="
        {
            id: currentSport.id,
            title: currentSport.title,
            url: currentSport.url
        }
        "
    />

    <DifferentOptions
    :sports.leagues="
        {
            id: currentSport.leagues[Number(requestId)].id,
            title: currentSport.title,
            url: currentSport.url
        }
    "/>
</template>