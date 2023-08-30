<script setup lang="ts">

    const { id } = useRoute().params;
    const requestId = id as string || "";

    const props = defineProps<{
        url: string,
        title: string
    }>()
    
</script>

<template>
        <NuxtLink
        class="flex items-center justify-center col-span-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-l font-medium text-white my-5"
        :to="`/content/${props.url}`"
        >{{ props.title }}
        </NuxtLink>
</template>