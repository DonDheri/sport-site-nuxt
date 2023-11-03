<script setup lang="ts">    
    const matches = ref([Object]);
    const match = ref();
    
    const date = ref(new Date());
    const formatDate = (date: Date) => {
        let day = date.getDate().toString();
        let month = date.getMonth().toString();
        let year = date.getFullYear().toString();
        if (Number(day) < 10) {
            day = "0" + day;
        } else if (Number(month) < 10) {
            month = "0" + month
        }
        return `${year}-${month}-${day}`;
    }
    const formattedDate = formatDate(date.value);
    
    const props = defineProps({
        sportSlug: String,
        
        matchId: Number,
        matchDate: String,
        matchTime: String,

        leagueName: String,

        homeLogo: String,
        homeNameShort: String,
        homeScore: Number,
        
        awayLogo: String,
        awayNameShort: String,
        awayScore: Number
    })
    
        
    
</script>

<template>
        

        <NuxtLink
            :to="`/${props.sportSlug}/match/${props.matchId}/lineups`"
            ref="match"
            class="carousel-item flex flex-row p-1 font-inter">
            <div class="grid grid-cols-4 grid-rows-4 gap-3 grid-flow-row w-[150px] h-[115px] font-semibold">
                <p class="text-xs col-span-4 row-span-1 align-sub">{{ props.leagueName }}</p>

                <img :src="homeLogo" alt="no logo" class="h-[25px] w-[25px] col-span-1 row-span-1">
                <p class="col-span-2 row-span-1">{{ props.homeNameShort }}</p>
                <p class="col-span-1 row-span-1 text-center">{{ props.homeScore }}</p>
                
                <img :src="awayLogo" alt="no logo" class="h-[25px] w-[25px] col-span-1 row-span-1">
                <p class="col-span-2 row-span-1">{{ props.awayNameShort }}</p>
                <p class="col-span-1 row-span-1 text-center">{{ props.awayScore }}</p>
                
                <p class="col-span-2 row-span-1 text-sm font-semibold">{{ matchDate }}</p>
                <p class="col-span-2 row-span-1 text-sm font-semibold text-end">{{ matchTime }}</p>
            </div>
        </NuxtLink>
        
</template>