<script setup lang="ts">
    import sportsData from "~/data/sportsData.json"
    const params = useRoute().params;
    const sports = ref(sportsData)
    const config = useRuntimeConfig();
    const apiData = ref(null);

    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug.toString() === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    const fetchSections = async (page: Number) => { 
        try {
            const response = await fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/sections?page=${page}`, {
                headers: {
                    'X-RapidAPI-Key': (config.public.apiKey as string) || "",
                    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
                },
            })
            const data = await response.json();
            apiData.value = data
            return apiData.value
        } catch (error) {
            console.error('error fetching data:', error)
        }
    };
    const allSections = async () => {
        let pageNum = 1;
        let allSections = [];
        while(true) {
            const sections = await fetchSections(pageNum);
            allSections.push(...sections.data);
            pageNum++;
            if (sections.data.length < 100) {
            return allSections;
            }
        }
    }

    const sortSections = async () => {
        const sections = await allSections();
        return sections.sort((a, b) => b.priority - a.priority);
    }
    const sortedSections = await sortSections();
    
    const popSects = async () => {
        const popSecs = [];
        for (let section of sortedSections) {
            if (section.priority > 5 && section.priority < 11 || section.id === 79) {
                popSecs.push(section);
            }
        }
        return popSecs
    }
    const popularSections = await popSects();
    
    
    
        //     let page = 1
            // let {data} = await useFetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/leagues`, {
            //     headers: {
            //         'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
            //     },
            //     params: {
            //         page: page,
            //     }
            // });

        //     let leagues = computed(() => {
        //         return data.value.data || 'error';
        //     });
            
        //     allLeagues.push(...leagues.value);

        //     page ++
        //     if (leagues.value.length < 50) {
        //         return allLeagues;
        //     }
        // }
    
    
    
    
</script>
<template>
    <div class="uppercase flex flex-row px-2">
        <NuxtLink :to="`/football/league/some-league/standings`" class="inline-flex gap-2 place-items-center text-center border border-neutral rounded-full px-3 py-2 w-auto shadow">
            <img  alt="logo" class="h-[22px] w-[22px]">
            <p class="text-xs">Some league</p>
        </NuxtLink>
    </div>
</template>