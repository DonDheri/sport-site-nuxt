<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
    const sports = ref(sportsData)
    const datePicker = ref();
    const params = useRoute().params;


    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();

    let date = ref(new Date());
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
        return games.value.sort((a, b) => b.section.priority - a.section.priority);
    };
    const sortedGames = sortGames();

    
    
    // const getLeagues = async (page) => {
    //     const {data: leagues} = await useAsyncData((page) => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/leagues`, {
    //         method: "GET",
    //         headers: {
    //             'X-RapidAPI-Key': (config.public.apiKey as string) || "",
    //             'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //         },
    //         params: {
    //             page: page,
    //         },
    //     }));
    //     const leagueData = computed(() => {
    //         return leagues.value.data;
    //     })
    //     return leagueData;
    // }
        
        
    // const getAllLeagues = async () => {
    //     const maxPages = 45;
    //     const allLeagues = [];
    //     for (let page = 1; page <= maxPages; page ++) {
    //         const leagues = await getLeagues(page);
    //         allLeagues.push(leagues);
    //     }
    //     return allLeagues;
    // }
    // console.log(await getAllLeagues());
    

    // const leagues = ref([]);

    // async function fetchData(page) {
    // const response = await $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/leagues`, {
    //     method: "GET",
    //     headers: {
    //     'X-RapidAPI-Key': (config.public.apiKey as string) || "",
    //     'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     },
    //     params: {
    //     page: page,
    //     },
    // });

    // const data = await response.json();
    // return data;
    // }

    // async function loadData() {
    //     const maxPages = 10; // Set the maximum number of pages

    //     for (let page = 1; page <= maxPages; page++) {
    //         const { data: leaguesData } = await fetchData(page);
    //         leagues.value = [...leagues.value, ...leaguesData]; // Append data to leagues
    //     }
    // }

</script>
<template>
    <AllSports/>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-3">
        <div class="lg:col-span-2 lg:border-r-2 lg:border-neutral">
            <PopularLeagues class="hidden lg:flex"/>
        </div>
        <div class="lg:col-span-10">
            <div class="ml-4 mt-2 place-items-center">
                <div class="mx-3 inline-flex space-x-6 items-center" >
                    <p class="uppercase font-bold font-inter">Todays Matches</p>
                    <p>-</p>
                    <VueDatePicker ref="datePicker" v-model="date" :enable-time-picker="false" style="width: 150px;" dark/>
                </div>
        
                <div class="divider my-0 mx-2"></div>
            </div>
            <div class="carousel grid grid-flow-col uppercase mb-2 overflow-auto space-x-5" ref="matches">
                <div v-for="game in sortedGames">
                    <UpcomingMatches v-if="game.status !== 'canceled'"
                    :sport-slug="currentSport?.slug"
                    
                    :match-id="(game.id)"
                    :match-date="game.start_at.slice(5, 11).replace('-', '/')"
                    :match-time="game.start_at.slice(11,16)"
                    npm
                    :league-name="game.challenge.name"
                    
                    :home-logo="game.home_team.logo"
                    :home-name-short="game.home_team.name_code"
                    :home-score="game.home_team.score"
                    
                    :away-logo="game.away_team.logo"
                    :away-name-short="game.away_team.name_code"
                    :away-score="game.away_team.score"
                    />
                </div>
            </div>

            <div class="divider my-0 mx-2 lg:hidden"></div>
            <PopularLeaguesPhone class="lg:hidden"/>
        </div>
    </div>
    </template>