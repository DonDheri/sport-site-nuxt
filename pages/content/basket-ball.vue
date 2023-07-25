<script setup lang="ts">
    import TheHeader from '../../components/partials/TheHeader.vue';
    import TheFooter from '../../components/partials/TheFooter.vue';
    import DifferentSports from '../../components/content/DifferentSports.vue';

    const id  = DifferentSports.key;
    const requestId = id as string || "";

    const { data, pending, refresh } = await useAsyncData(requestId, () => $fetch(`https://api-basketball.p.rapidapi.com/teams/${requestId}`))

    const teams = computed(() => {
        return data
        
    })
    
    console.log(teams);
    

</script>

<template>
    <TheHeader/>

    <DifferentSports/>

    <TheFooter/>
</template>