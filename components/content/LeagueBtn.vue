<script setup lang="ts">
    const props = defineProps<{
        sportUrl: string | undefined,
        leagueId: number,
        leagueName: string,
        leagueLogo: string,
        leagueCountry: string
    }>();
</script>

<template>
    <NuxtLink
            class="border-2 rounded-xl flex flex-col place-items-center text-2xl"
            :to="`/content/${props.sportUrl}/leagues/${props.leagueId}`"
            >{{ props.leagueName }} <br>
            <img class="w-[150px] pt-5" :src="props.leagueLogo" alt="league logo"> <br>
            {{ props.leagueCountry }}
        </NuxtLink>
</template>