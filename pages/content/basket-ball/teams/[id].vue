<script setup lang="ts">
    import {sports} from "@/components/content/Sports.mjs"
    function whichSport() {
        for (let sport of sports) {
            if (useRoute().path) {
                return sport;
            }
        }
    }

    const currentSport = whichSport();

    const {id} = useRoute().params;
    const requestId = id as string || "";
    function some() {
        return requestId.split("-")
    }
    const rId = some();
    
    const config = useRuntimeConfig();
    const { data } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/statistics`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            season: "2022-2023",
            league: rId[0],
            team: rId[1]
        },
    }))
    
    const team = data.value?.response;
    
    
</script>

<template>
    <div class="border-2 mx-48 grid px-10 place-items-center rounded-xl my-6 p-5">
        <p class="text-center w-full text-3xl border-b-2 pb-3">{{ team.team.name }}</p>
        <img class="w-[500px] my-5" :src="team.team.logo" alt="team logo">
        <div class="text-2xl p-2 grid grid-cols-8 place-items-center w-full border-b-2">
            <p>Country:</p>
            <p>League:</p>
            <p>Games Played:</p>
            <p>Games Won:</p>
            <p>Games Lost:</p>
            <p>Games Draw:</p>
            <p>Points Scored:</p>
            <p>Points Against:</p>
        </div>
        <div class="text-xl p-2 grid grid-cols-8 place-items-center w-full rounded-xl">
            <div class="flex flex-col">
                <p>{{ team.country.name }}</p>
                <img class="w-[45px] place-self-center" :src="team.country.flag" alt="country flag">
            </div>
            <div class="flex flex-col">
                <p>{{ team.league.name }}</p>
                <img class="w-[50px] place-self-center" :src="team.league.logo" alt="league logo">
            </div>
            <p>
                Home: {{ team.games.played.home }} <br>
                Away: {{ team.games.played.away }} <br>
                Total: {{ team.games.played.all }}
            </p>
            <p>
                Home: {{ team.games.wins.home.total }} <br>
                Away: {{ team.games.wins.away.total }} <br>
                Total: {{ team.games.wins.all.total }}
            </p>
            <p>
                Home: {{ team.games.loses.home.total }} <br>
                Away: {{ team.games.loses.away.total }} <br>
                Total: {{ team.games.loses.all.total }}
            </p>
            <p>
                Home: {{ team.games.draws.home.total }} <br>
                Away: {{ team.games.draws.away.total }} <br>
                Total: {{ team.games.draws.all.total }}
            </p>
            <p>
                Home: {{ team.points.for.total.home }} <br>
                Away: {{ team.points.for.total.away }} <br>
                Total: {{ team.points.for.total.all }}
            </p>
            <p>
                Home: {{ team.points.against.total.home }} <br>
                Away: {{ team.points.against.total.away }} <br>
                Total: {{ team.points.against.total.all }}
            </p>
        </div>
    </div>
</template>