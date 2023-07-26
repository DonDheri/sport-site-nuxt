<script lang="ts" setup>
    const { id } = useRoute().params;
    const requestId = id as string || '';

</script>

<template>
    <TheHeader />
    
    <ContactInfo />

    <TheFooter/>
</template>