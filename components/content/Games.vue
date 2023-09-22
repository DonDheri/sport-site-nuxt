<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
import { totalmem } from "os";

    let arr = [
        {
            id: 1,
        },
        {
            id: 5,
        },
        {
            id: 10,
        }
    ]
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
    const sportSlug: String = whichSport().slug;

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
    const { data: sections } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${sportId}/sections`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }))
    const sortedSections = sections.value.data.sort((a: Object, b: Object) => b.priority - a.priority);
    
    const { data: leagues } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sections/1/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }))
    function sectionIds() {
        let sectionIds = [];
        for (let section of sortedSections) {
            sectionIds.push(section.id);
        }
        return sectionIds;
    }
    function getLeagues() {
        for (let id of sectionIds()) {

        }
    }
    
    
    
</script>

<template>
    <div id="div" class="">
        <div class="mx-3 inline-flex space-x-6 items-center" >
            <p class="uppercase font-semibold">Upcoming Matches</p>
            <p>-</p>
            <VueDatePicker v-model="date" :enable-time-picker="false" style="width: 150px;" :auto-apply="true" :format="formatDate(date)" dark/>
        </div>
        <div class="divider mt-0 mb-1"></div>
        <NuxtLink v-for="section in sortedSections" :to="`/${sportSlug}/league/`" :key="section.id" class="bg-info-content w-full inline-flex items-center">
            <p> {{ section.name }} </p>
            <p>/</p>
            <p>{{  }}</p>
        </NuxtLink>
            <NuxtLink  :to="`/${sportSlug}`" class="grid grid-cols-12">
                <div class="col-span-2 flex flex-col">
                    <p class="text-[15px]">Time</p>
                    <p class="text-[12px] mt-1">Status</p>
                </div>
                <div class="col-span-8 text-[15px]">
                    <p>Home Team</p>
                    <p>Away Team</p>
                </div>
                <div class="col-span-2 flex flex-col text-xs">
                    <p>Odds</p>
                    <p>Odds</p>
                    <p>Odds</p>
                </div>
                <div class="divider col-span-12 my-0"></div>
            </NuxtLink>
    </div>
</template>