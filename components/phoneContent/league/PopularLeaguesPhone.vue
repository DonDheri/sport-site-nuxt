<script setup lang="ts">
    import sportsData from "~/data/sportsData.json"
    const params = useRoute().params;
    const sports = ref(sportsData)
    const config = useRuntimeConfig();
    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug.toString() === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    async function getLeagues() {
        let allLeagues = [];
        while(true) {
            let page = 1
            let {data} = await useFetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/leagues`, {
                headers: {
                    'X-RapidAPI-Key': (config.public.apiKey as string) || "",
                    'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
                },
                params: {
                    page: page,
                }
            });

            let leagues = computed(() => {
                return data.value?.data || 'error';
            });
            
            allLeagues.push(...leagues.value);

            page ++
            if (leagues.value.length < 50) {
                return allLeagues
            }
        }
    }
    
    const sortLeagues = async () => {
        return (await getLeagues()).sort((a, b) => b.priority - a.priority);
    };
    const sortedLeagues = await sortLeagues()
    console.log(sortedLeagues);
    
    
</script>
<template>
    <div class="uppercase flex flex-row px-2">
        <NuxtLink :to="`/football/league/some-league/standings`" class="inline-flex gap-2 place-items-center text-center border border-neutral rounded-full px-3 py-2 w-auto shadow">
            <div class="h-[22px] w-[22px] bg-black"></div>
            <p class="text-xs">Some league</p>
        </NuxtLink>
    </div>
</template>