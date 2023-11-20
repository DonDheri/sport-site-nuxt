<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import popLeagues from "~/data/popularLeaguesFootball.json"
    const popularLeagues = ref(popLeagues);
    const sports = ref(sportsData)
    const params = useRoute().params;
    const selectedLeague = ref()
    const config = useRuntimeConfig();
    let date = ref(new Date());
    const sortedGames: [] = [];


    const emits = (["update", "change"])

    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();


    const formatDate = (date) => {
        let day = date.value.getDate().toString();
        let month = (date.value.getMonth() + 1).toString();
        let year = date.value.getFullYear().toString();
        if (Number(day) <= 9) {
            day = "0" + day;
        } else if (Number(month) <= 9) {
            month = "0" + month
        }       
        return `${year}-${month}-${day}`;
    }

    
    const updateDate = async (modelData) => {
        date.value = modelData;

        const {data: events} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/events/date/${formatDate(modelData)}`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': (config.public.apiKey as string) || "",
                'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
            },
            params: {
                page: 1,
            },
        }));
        const games = computed(() => {
            return events.value.data;
        });
        const sortGames = async () => {
            for (let game of games.value) {
                for (let league of popularLeagues.value) {
                    if (game.league_id === league.id) {
                        sortedGames.push(game)
                    }
                }
            }
            return sortedGames;
        };
        return await sortGames()
    }

    
    
</script>
<template>
    <AllSports/>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-3">
        <div class="lg:col-span-2 lg:border-r-2 lg:border-neutral">
            <PopularLeagues class="hidden lg:flex"/>
        </div>

        <UpcomingMatches/>
    </div>
    </template>