<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import popLeagues from "~/data/popularLeaguesFootball.json";
    const popularLeagues = ref(popLeagues);
    const sports = ref(sportsData);
    const config = useRuntimeConfig();
    const params = useRoute().params;
    const submit = ref()

    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    const whichLeague = () => {
        for (let league of popularLeagues.value) {
            if (league.id.toString() === params.league) {
                return league;
            }
        }
    }
    const currentLeague = whichLeague();
    
    const {data} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/leagues/${params.league}/seasons`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            page: 1,
        },
    }));
    const seasons = computed(() => {
        return data.value.data;
    });
    
    console.log(useState());
    
</script>
<template>
    <div class="p-2 flex flex-col place-items-center">
        <img :src="currentLeague?.logo" alt="logo" class="row-span-3 col-span-12">
        <p class="text-lg col-span-7 row-span-2 my-2">{{ currentLeague?.name_translations.en }}</p>
        <div class="form-control flex flex-row space-x-2">
            <select class="select select-bordered select-sm col-span-4 row-span-2">
                <option v-for="season in seasons" :id="season.id">{{ season.slug }}</option>
            </select>
            <button class="btn btn-sm bg-info-content p-2" ref="submit" type="submit">Pick</button>
        </div>
    </div>

</template>