<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
    import popLeagues from "~/data/popularLeaguesFootball.json"
    const popularLeagues = ref(popLeagues);
    const sports = ref(sportsData)
    const datePicker = ref(VueDatePicker);
    const params = useRoute().params;
    const selectedLeague = ref()

    const emits = (["update", "change"])

    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    let date = ref(new Date());
    let newDate = ref()

    const formatDate = () => {
        let day = date.value.getDate().toString();
        let month = (date.value.getMonth()+1).toString();
        let year = date.value.getFullYear().toString();
        if (Number(day) <= 9) {
            day = "0" + day;
        } else if (Number(month) <= 9) {
            month = "0" + month
        }       
        return `${year}-${month}-${day}`;
    }
    const formattedDate = formatDate();
    
    const changeDate = (modelData) => {
        date.value = modelData;        
    }

    const config = useRuntimeConfig();
    const {data: events} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/events/date/${formattedDate}`, {
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
    
    const sortGames = () => {
        const sortedGames = [];
        for (let game of games.value) {
            for (let league of popularLeagues.value) {
                if (game.league_id === league.id) {
                    sortedGames.push(game)
                }
            }
        }
        return sortedGames;
    };
    const sortedGames = sortGames();    
    
</script>
<template>
    <AllSports/>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-3">
        <div class="lg:col-span-2 lg:border-r-2 lg:border-neutral">
            <PopularLeagues class="hidden lg:flex"/>
        </div>

        <div class="lg:col-span-9">
            <div class="ml-4 mt-2 place-items-center">
                <div class="mx-3 flex flex-col space-x-6 items-center text-center" >
                    <p class="uppercase font-bold font-inter">Find match</p>
                    <div class="form-control">
                        <!-- <VueDatePicker ref="datePicker" v-model="date" @update:model-value="changeDate, console.log(sortedGames) " :enable-time-picker="false" style="width: 150px;" dark/> -->
                    </div>
                </div>
        
                <div class="divider my-0 mx-2"></div>
            </div>

            <div class="carousel grid grid-flow-col uppercase mb-2 overflow-auto space-x-5" ref="matches">
                <div v-for="game in sortedGames">
                    <UpcomingMatches
                    :sport-slug="currentSport?.slug"
                    
                    :match-id="(game.id)"
                    :match-date="game.start_at.slice(5, 11).replace('-', '/')"
                    :match-time="game.start_at.slice(11,16)"
                    
                    :league-name="game.challenge.name"
                    
                    :home-logo="game.home_team.logo"
                    :home-name-short="game.home_team.name_code"
                    :home-score="game.home_team.score || 0"
                    
                    :away-logo="game.away_team.logo"
                    :away-name-short="game.away_team.name_code"
                    :away-score="game.away_team.score || 0"
                    />
                </div>
            </div>

            <div class="divider my-0 mx-2 lg:hidden"></div>
            <PopularLeaguesPhone class="lg:hidden"/>
        </div>
    </div>
    </template>