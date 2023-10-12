<script setup lang="ts">
import sportsData from "~/data/sportsData.json";
    const sports = ref(sportsData)

    const params = useRoute().params;
    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    const date = new Date();
    const formatDate = () => {
        let day = date.getDate().toString();
        let month = (date.getMonth()+1).toString();
        let year = date.getFullYear().toString();
        if (Number(day) <= 9) {
            day = "0" + day;
        } else if (Number(month) <= 9) {
            month = "0" + month
        }       
        return `${year}-${month}-${day}`;
    }
    const formattedDate = formatDate();
    

    const config = useRuntimeConfig();
    
    
    // const {data} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/sections`, {
    //     method: "GET",
    //     headers: {
    //         'X-RapidAPI-Key': (config.public.apiKey as string) || "",
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     },
    //     params: {
    //         page: 1,
    //     },
    // }));
    // const sections = computed(() => {
    //     return data.value;
    // })

    async function getAllSections() {
        let allSections: Array<Object> = [];
        let page = 1;
        while (true) {
            const {data} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/sections`, {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': (config.public.apiKey as string) || "",
                    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
                },
                params: {
                    page: page,
                }
            }));
            
            
            
            
            if (data.value.data.length === 0 || null || undefined) {
                return allSections
            } else {
                allSections = allSections.concat(data.value.data)
                page ++
            }
        }
    }

    console.log(await getAllSections());
    

    // const allSections = [];
    // async function getAllSections(page = 1): Promise<any[]> {
    //     const { data } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/sections`, {
    //         method: "GET",
    //         headers: {
    //         'X-RapidAPI-Key': (config.public.apiKey as string) || "",
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //         },
    //         params: {
    //         page: page,
    //         },
    //     }));
    //     const dataArray = data.value as any[];

        
    //     allSections.push(...dataArray)
        
    //     if (dataArray && dataArray.length > 0) {
    //         return dataArray.concat(await getAllSections(page + 1));
    //     } else {
    //         return [];
    //     }
    //     }

    //     const sections = computed(async () => {
    //     return (await getAllSections());
    //     });
    

    
    
</script>
<template>
    <AllSports/>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-3">
        <div class="lg:col-span-2 lg:border-r-2 lg:border-neutral">
            <PopularLeagues class="hidden lg:flex"/>
        </div>
        <div class="lg:col-span-10">
            <UpcomingMatches
            :sport-slug="'football'"
            
            :match-slug="'some-match-slug'"
            :match-date="'Date'"
            :match-time="'Time'"
            
            :league-name="'Some League'"
            
            :home-logo="'#'"
            :home-name-short="'ABC'"
            :home-score="'2'"
            
            :away-logo="'#'"
            :away-name-short="'DEF'"
            :away-score="'0'"
            />
            <div class="divider my-0 mx-2 lg:hidden"></div>
            <PopularLeaguesPhone class="lg:hidden"/>
        </div>
    </div>
    </template>