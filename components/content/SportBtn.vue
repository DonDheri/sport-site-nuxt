<script setup lang="ts">

    const { id } = useRoute().params;
    const requestId = id as string || "";

    const props = defineProps<{
        sports:({
            id: number
            title: string
            url: string
            leagues?: [
                {
                    id: number
                    title: string
                    type: string
                    country: {
                        id: number
                        title: string
                        code: string
                        flag: string
                    }
                    seasons: [
                        {
                            season: string
                            start: string
                            end: string
                        }
                    ]
                }
            ]
        })
    }>()
</script>

<template>
        <NuxtLink class="flex items-center justify-center col-span-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-l font-medium text-white my-5" :to="`/content/${props.sports.url}`">{{ props.sports.title }}</NuxtLink>
</template>