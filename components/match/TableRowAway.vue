<script setup lang="ts">
    const props = defineProps({
        awayTeamName: String,

        awayPlayerNum: Number,
        awayPlayerName: String,
        awayPlayerPos: String,
        awayPlayerAge: Number,
        awayPlayerPrice: Number,
        awayPlayerRating: Number,
    })
</script>
<template>
    <tr >
        <th class="py-1 px-1">{{ props.awayPlayerNum }}</th>
        <td class="py-1 px-1 text-start capitalize">{{ props.awayPlayerName }}</td>
        <td class="py-1 px-1 uppercase">{{ props.awayPlayerPos }}</td>
        <td class="py-1 px-1">{{ props.awayPlayerAge }}</td>
        <td class="py-1 px-1">{{ props.awayPlayerRating }}</td>
    </tr>
</template>