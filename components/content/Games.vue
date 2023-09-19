<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'

    function whichSport() {
        for (let sport of sports) {
            if (sport.active === true) {
                return sport;
            }
        }
    }
    const date = ref(new Date());
    const formatDate = (date: Date) => {
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }
    const currentSport = whichSport();
    const sportId = currentSport?.id;
    const formattedDate = formatDate(date.value);
    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data: Games } = await useAsyncData<any>(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/events/date/${formattedDate}`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            
        },
    }))
    const { data: Leagues } = await useAsyncData<any>(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/1/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            id: currentSport?.id.toString()
        },
    }))
    
    const games = Games.value.data;
    const leagues = Leagues.value.data;
    
</script>

<template>
    <div class="">
        <div class="mx-3 inline-flex space-x-6 items-center">
            <p class="uppercase font-semibold">Upcoming Matches</p>
            <p>-</p>
            <VueDatePicker v-model="date" :enable-time-picker="false" style="width: 150px;" :auto-apply="true" :format="formatDate(date)" dark/>
        </div>
        <div class="w-full">
            
        </div>
    </div>
</template>