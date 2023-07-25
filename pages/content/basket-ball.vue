<script setup lang="ts">
    import TheHeader from '../../components/partials/TheHeader.vue';
    import TheFooter from '../../components/partials/TheFooter.vue';
    import DifferentSports from '../../components/content/DifferentSports.vue';

    const APIKey = "1adcd8e27bmsh079f7bf7c1d6bfdp15a67ajsn9e21a6ac31c1"

    const { id } = useRoute().params;
    const requestId = id as string || "";

    const { data } = await useFetch(`https://api-basketball.p.rapidapi.com/teams?league=12&season=2019-2020`)

    
    console.log(data);
    

</script>

<template>
    <TheHeader/>

    <DifferentSports/>

    <div class="grid grid-cols-4 gap-5">
        <div v-for="d in data">
            <p>{{ d }}</p>
        </div>
    </div>

    <TheFooter/>
</template>