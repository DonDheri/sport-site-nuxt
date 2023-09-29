<script setup lang="ts">
    import sportsData from "~/data/sportsData.json"
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
    
    const sportReg = /((?![/])(\w+)(?=[/])?)/;
    let sports = ref(sportsData);
    let routePath = useRoute().path.slice(1, );
    const routeSlug = useRoute().path.match(sportReg)?.[0];
    

    function whichSport() {
        for (let sport of sports.value) {
            if (sport.slug === routePath) {
                return sport;                
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
    <div class="mt-2 place-items-center">
        <div class="mx-3 inline-flex space-x-6 items-center" >
            <p class="uppercase font-semibold">Upcoming Matches</p>
            <p>-</p>
            <VueDatePicker v-model="date" :enable-time-picker="false" style="width: 150px;" :auto-apply="true" :format="formatDate(date)" dark/>
        </div>

        <div class="divider mt-0 mb-1"></div>
        
        <div class="carousel grid grid-flow-col uppercase mb-2">
            <NuxtLink
            
            class="carousel-item flex flex-col p-2 ">
                <div class="grid grid-cols-4 grid-rows-4 gap-3 grid-flow-row w-[128px] h-[115px] font-semibold">
                    <p class="text-xs col-span-4 row-span-1 align-sub">League</p>

                    <div class="h-[25px] w-[25px] bg-black col-span-1 row-span-1"></div>
                    <p class="col-span-2 row-span-1">abc</p>
                    <p class="col-span-1 row-span-1 text-center">0</p>
                    
                    <div class="h-[25px] w-[25px] bg-black col-span-1 row-span-1"></div>
                    <p class="col-span-2 row-span-1">def</p>
                    <p class="col-span-1 row-span-1 text-center">1</p>
                    
                    <p class="col-span-2 row-span-1 text-xs font-normal">date</p>
                    <p class="col-span-2 row-span-1 text-xs font-normal text-end">time</p>
                </div>
            </NuxtLink>
            
            <div class="row-span-4 divider divider-horizontal"></div>
            
            <NuxtLink class="carousel-item flex flex-col p-2 ">
                <div class="grid grid-cols-4 grid-rows-4 gap-3 grid-flow-row w-[128px] h-[115px] flex-row font-semibold">
                    <p class="text-xs col-span-4 row-span-1 align-sub">League</p>

                    <div class="h-[25px] w-[25px] bg-black col-span-1 row-span-1"></div>
                    <p class="col-span-2 row-span-1">abc</p>
                    <p class="col-span-1 row-span-1 text-center">0</p>
                    
                    <div class="h-[25px] w-[25px] bg-black col-span-1 row-span-1"></div>
                    <p class="col-span-2 row-span-1">def</p>
                    <p class="col-span-1 row-span-1 text-center">1</p>
                    
                    <p class="col-span-2 row-span-1 text-xs font-normal">date</p>
                    <p class="col-span-2 row-span-1 text-xs font-normal text-end">time</p>
                </div>
            </NuxtLink>

            <div class="row-span-4 divider divider-horizontal"></div>

            <NuxtLink class="carousel-item flex flex-col p-2 ">
                <div class="grid grid-cols-4 grid-rows-4 gap-3 grid-flow-row w-[128px] h-[115px] flex-row font-semibold">
                    <p class="text-xs col-span-4 row-span-1 align-sub">League</p>

                    <div class="h-[25px] w-[25px] bg-black col-span-1 row-span-1"></div>
                    <p class="col-span-2 row-span-1">abc</p>
                    <p class="col-span-1 row-span-1 text-center">0</p>
                    
                    <div class="h-[25px] w-[25px] bg-black col-span-1 row-span-1"></div>
                    <p class="col-span-2 row-span-1">def</p>
                    <p class="col-span-1 row-span-1 text-center">1</p>
                    
                    <p class="col-span-2 row-span-1 text-xs font-normal">date</p>
                    <p class="col-span-2 row-span-1 text-xs font-normal text-end">time</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>