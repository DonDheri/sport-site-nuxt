<script setup lang="ts">
const { id } = useRoute().params;
const requestId = id as string || '';
const { data, pending, refresh } = await useAsyncData<any>(requestId, () => $fetch(`https://pokeapi.co/api/v2/pokemon/${requestId}`)) 

const abilities = computed(() => {
    return data?.value.abilities;
})
</script>
<template>
    Dynamisk side {{ id  }}s
    <button @click="refresh">Refresh</button>
    <div v-if="!pending">
        <div v-for="ability in abilities" :key="ability.slot">
            <Card :ability="ability.ability" @nameClicked="refresh"/>
    </div>
    </div>
</template>