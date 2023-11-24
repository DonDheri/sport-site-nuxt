<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    import popLeagues from "~/data/popularLeaguesFootball.json"
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
    const popularLeagues = ref(popLeagues);
    const sports = ref(sportsData)
    const matches = ref([]);
    const match = ref();
    const params = useRoute().params;
    const config = useRuntimeConfig();
    const datePicker = ref(null);

    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug.toString() === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();
    
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
        return events.value?.data;
    });
    
    const sortGames = () => {
        const popGames = [];
        for (let game of games.value) {
            for (let league of popularLeagues.value) {
                if (game.league_id === league.id) {
                    popGames.push(game)
                }
            }
        }
        return popGames;
    };
    let sortedGames = sortGames();

    const logger = (someLog) => {
        console.log(someLog);
        
    }
    
    const increaseDate = (modelData) => {
        const increase = modelData.getDate() + 1;
        
        modelData.setDate(increase)
        
        console.log(modelData);
        
        
        
        
        
        
        
    }
    
    const decreaseDate = (modelData: Date) => {
        const decrease = modelData.getDate() - 1;

        return modelData.setDate(decrease)
        
        
    }
    
    
    
</script>

<template>

        <div class="lg:col-span-9">
            <div class="lg:ml-4 mt-2 place-items-center">
                <div class="mx-3 flex flex-col space-x-6 place-items-center place-content-center text-center" >
                    <p class="uppercase font-bold text-center">Popular Matches</p>
                    <div class="flex items-center space-x-1">
                        <button class="btn btn-sm bg-info-content" type="submit" @click="decreaseDate(date), logger(useModel())"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg></button>
                        <VueDatePicker ref="datePicker" @decrease-date="" v-model="date" update :enable-time-picker="false" style="width: 150px;" dark/>
                        <button class="btn btn-sm bg-info-content" type="submit" @click="increaseDate(date)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/></svg></button>
                    </div>
                </div>
        
                <div class="divider my-0 mx-2"></div>
            </div>

            <div class="carousel uppercase mb-2 overflow-auto space-x-5" ref="matches">
                <div v-for="game in sortedGames" class="carousel-item">
                    <NuxtLink
                    :to="`/${currentSport?.slug}/match/${game.id}/lineups`"
                    ref="match"
                    class=" p-1 grid grid-cols-4 grid-rows-4 gap-3 grid-flow-row w-[115px] h-[115px] font-semibold">

                        <p class="text-xs col-span-4 row-span-1 align-sub">{{ game.league.name }}</p>

                        <img :src="game.home_team.logo" alt="no logo" class="h-[25px] w-[25px] col-span-1 row-span-1">
                        <p class="col-span-2 row-span-1">{{ game.home_team.name_code }}</p>
                        <p class="col-span-1 row-span-1 text-center">{{ game.home_team.score || 0 }}</p>
                        
                        <img :src="game.away_team.logo" alt="no logo" class="h-[25px] w-[25px] col-span-1 row-span-1">
                        <p class="col-span-2 row-span-1">{{ game.away_team.name_code }}</p>
                        <p class="col-span-1 row-span-1 text-center">{{ game.away_team.score || 0 }}</p>
                        
                        <p class="col-span-2 row-span-1 text-sm font-semibold">{{ game.start_at.slice(5, 11).replace('-', '/') }}</p>
                        <p class="col-span-2 row-span-1 text-sm font-semibold text-end">{{ game.start_at.slice(11,16) }}</p>
                    </NuxtLink>
                </div>
            </div>

            <div class="divider my-0 mx-2 lg:hidden"></div>
            <PopularLeaguesPhone class="lg:hidden"/>
        </div>

    
</template>