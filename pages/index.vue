<script lang="ts" setup>

    useServerHeadSafe({
        title: 'Sport Site',
        
    });
    definePageMeta({
        layout: "default",
    });
    useRouter().push({path: "/football"});
</script>
<template>
    <Games/>
</template>
