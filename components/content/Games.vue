<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'

    function whichSport() {
        for (let sport of sports) {
            if (sport.active === true) {
                return sport;                
            } else {
                continue
            }
        }
    }
    const sportId = whichSport()?.id.toString() || "";
    const sportSlug = whichSport()?.slug || "";

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
    
    const { id } = useRoute().params;
    const requestId = id as String || "";
    const config = useRuntimeConfig();
    // const { data: sections } = await useAsyncData(sportId, () => $fetch(`https://sportscore1.p.rapidapi.com/sports/${sportId}/sections`, {
    //     headers: {
    //         'X-RapidAPI-Key': (config.public.apiKey as string) || '',
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     },
    // }))
    // const sortedSections = computed(() => {
    //     return sections.value
    // })
    
    // const { data: leagues } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sections/1/leagues`, {
    //     headers: {
    //         'X-RapidAPI-Key': (config.public.apiKey as string) || '',
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     },
    //     params: {page: 1}
    // }))
    
    
    

    
</script>

<template>
    <div id="div" class="">
        <div class="mx-3 inline-flex space-x-6 items-center" >
            <p class="uppercase font-semibold">Upcoming Matches</p>
            <p>-</p>
            <VueDatePicker v-model="date" :enable-time-picker="false" style="width: 150px;" :auto-apply="true" :format="formatDate(date)" dark/>
        </div>
        <div class="divider mt-0 mb-1"></div>
        <NuxtLink :to="`/${sportSlug}/league/some`" class="bg-info-content w-full inline-flex items-center space-x-4 px-3 py-1">
            <NuxtLink >Country</NuxtLink>
            <p>/</p>
            <NuxtLink :to="`/football/league/some-slug`">League name</NuxtLink>
        </NuxtLink>
        <NuxtLink  :to="`/${sportSlug}/game/event-slug`">
            <div class="grid grid-cols-12 px-1">
                <div class="col-span-2 grid row-span-2">
                    <p class="text-[15px]">Time</p>
                    <p class="text-[12px] mt-1">Status</p>
                </div>
                <div class="col-span-8 grid text-[15px]">
                    <p>Home Team</p>
                    <p>Away Team</p>
                </div>
                <div class="col-span-2 grid text-xs flex flex-col">
                    <p>Odds</p>
                    <p>Odds</p>
                    <p>Odds</p>
                </div>
                <div class="divider col-span-12 my-0"></div>
            </div>
        </NuxtLink>
    </div>
</template>