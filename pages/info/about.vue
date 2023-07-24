<script lang="ts" setup>
    import TheHeader from '../../components/partials/TheHeader.vue';
    import TheFooter from '../../components/partials/TheFooter.vue';
    import AboutInfo from '../../components/info/AboutInfo.vue';

    const { id } = useRoute().params;
    const requestId = id as string || '';

</script>

<template>
    <TheHeader />
    
    <AboutInfo />

    <TheFooter/>
</template>