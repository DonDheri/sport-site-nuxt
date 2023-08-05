<script setup lang="ts">
    import sports from "../../../components/content/sports.js"
    const { id } = useRoute().params;
    const requestId = id as string || "";
</script>

<template>

    <DifferentSports/>
    

</template>