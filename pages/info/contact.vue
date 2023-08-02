<script lang="ts" setup>
    const { id } = useRoute().params;
    const requestId = id as string || '';

</script>

<template>
    
    <ContactInfo />
    <DifferentSports/>

</template>