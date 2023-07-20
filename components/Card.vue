<script lang="ts" setup>
const props = defineProps({
    ability: null
})
const clicked = ref(false);
const emits = defineEmits(['nameClicked'])
</script>
<template>
    <div @click="clicked = !clicked">
        Test: {{ props.ability.name }}
        Clicked: {{ clicked }}
    </div>
</template>
<style scoped>
* { color: red;}
</style>