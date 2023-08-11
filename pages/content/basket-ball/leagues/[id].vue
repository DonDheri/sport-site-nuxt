<script setup lang="ts">
    import { sports } from '@/components/content/Sports';
    import { title } from 'process';
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    const currentLeague = currentSport.leagues?.[Number(requestId)];

    
</script>

<template>
    
    

    <div class="border-2 mx-48 grid grid-rows-2 px-10 rounded-xl my-6">
        <div class="grid grid">

        </div>
    </div>
</template>