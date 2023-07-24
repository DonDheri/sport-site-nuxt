<script lang="ts" setup>
import TheContent from '../components/partials/TheContent.vue';
import TheFooter from '../components/partials/TheFooter.vue';
import TheHeader from '../components/partials/TheHeader.vue';
import DifferentSports from '../components/content/DifferentSports.vue';

    useServerHeadSafe({
        title: 'Sport Site'
    });
</script>
<template>
    <TheHeader/>
    <TheContent/>
    <DifferentSports/>
    <TheFooter/>
</template>
