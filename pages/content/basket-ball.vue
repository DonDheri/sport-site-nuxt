<script setup lang="ts">
    import TheHeader from '../../components/partials/TheHeader.vue';
    import TheFooter from '../../components/partials/TheFooter.vue';
    import DifferentSports from '../../components/content/DifferentSports.vue';

    const { id } = useRoute().params;
    const requestId = id as string || "";

    const { data, pending, refresh } = await useAsyncData<any>(requestId, () => $fetch(`https://api-basketball.p.rapidapi.com`))

    const teams = () => {
        return data
        
    }
    
    console.log(teams());
    

</script>

<template>
    <TheHeader/>

    <DifferentSports/>

    <TheFooter/>
</template>