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
    const datePicker = ref(null)

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
    
    watch(date, async (newDate) => {
    const formattedNewDate = formatDate(newDate);
    const { data: newEvents } = await $fetch(
      `https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/events/date/${formattedNewDate}`,
      {
        method: "GET",
        headers: {
          'X-RapidAPI-Key': (config.public.apiKey as string) || "",
          'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
          page: 1,
        },
      }
    );
    matches.value = newEvents?.data || [];
  });

    
</script>

<template>

        <div class="lg:col-span-9">
            <div class="ml-4 mt-2 place-items-center">
                <div class="mx-3 flex flex-col space-x-6 items-center text-center" >
                    <p class="uppercase font-bold font-inter">Popular Matches</p>
                    <VueDatePicker ref="datePicker" v-model="date" :enable-time-picker="false" style="width: 150px;" dark/>
                </div>
        
                <div class="divider my-0 mx-2"></div>
            </div>

            <div class="carousel uppercase mb-2 overflow-auto space-x-5" ref="matches">
                <div v-for="game in matches" class="carousel-item">
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