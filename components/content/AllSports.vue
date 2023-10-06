<script setup lang="ts">
    import sportsData from "~/data/sportsData.json"
    const sports = ref(sportsData);
    const tabs = ref([sports]);

    let params = useRoute().params;
        
    




</script>

<template>
    <div class="carousel tabs flex-nowrap py-2 bg-info-content lg:hidden" aria-label="tabs">
        <NuxtLink
            v-for="(sport, index) in sports"
            ref="tabs"
            :to="`/${sport.slug}`"
            :id="sport.id"
            :key="index"
            :class="['carousel-item', 'h-fit', 'tab', 'tab-bordered', 'font-semibold', 'uppercase', {tabActive: params.sport === sport.slug}]"
        >{{ sport.name }}</NuxtLink>
    </div>
</template>