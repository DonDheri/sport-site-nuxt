<script lang="ts" setup>

    useServerHeadSafe({
        title: 'Sport Site',
        
    });
    useRouter().push({path: "/football"});
</script>
<template>
    <Games/>
</template>
