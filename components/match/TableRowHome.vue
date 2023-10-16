<script setup lang="ts">
    const props = defineProps({
        homePlayerNum: Number,
        homePlayerName: String,
        homePlayerPos: String,
        homePlayerAge: Number,
        homePlayerPrice: Number,
        homePlayerRating: Number,
    })
</script>
<template>
    <tr >
        <th>{{ props.homePlayerNum }}</th>
        <td class="text-start capitalize">{{ props.homePlayerName }}</td>
        <td class="py-1 px-1 uppercase">{{ props.homePlayerPos }}</td>
        <td>{{ props.homePlayerAge }}</td>
        <td>{{ props.homePlayerRating }}</td>
    </tr>
</template>