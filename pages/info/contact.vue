<script lang="ts" setup>
    import TheHeader from '../../components/partials/TheHeader.vue';
    import TheFooter from '../../components/partials/TheFooter.vue';
    import ContactInfo from '../../components/info/ContactInfo.vue';

    const { id } = useRoute().params;
    const requestId = id as string || '';

</script>

<template>
    <TheHeader />
    
    <ContactInfo />

    <TheFooter/>
</template>