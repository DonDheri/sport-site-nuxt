<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    const params = useRoute().params;
    let sports = ref(sportsData);

    function whichSport() {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;                
            } else {
                continue
            }
        }
    }
    const sportId = whichSport()?.id.toString() || "";
    

    const nextGames = ref([]);
    const game = ref();

    const props = defineProps({
        sport: String,

        leagueLogo: String,
        leagueName: String,
        leagueSlug: String,

        season1: String,
        season2: String,
        season3: String,

        homeTeamName: String,
        awayTeamName: String,

        oddsHome: Number,
        oddsDraw: Number,
        oddsAway: Number,

        matchDate: String,
        matchTime: String,

        teamStanding: Number,
        teamName: String,
        teamPlayed: Number,
        teamWins: Number,
        teamDraws: Number,
        teamLoses: Number,
        teamGoals: String,
        teamPoints: Number,

    })
</script>
<template>
    <div class="p-2 grid grid-cols-12 grid-rows-5 place-items-center">
        <div class="bg-red-900 h-[100px] w-[100px] row-span-3 col-span-12">{{ props.leagueLogo }}</div>
        <p class="text-lg col-span-7 row-span-2 ">{{ props.leagueName }}</p>
        <p class="col-span-1 row-span-2">-</p>
        
        <select class="select select-bordered select-sm col-span-4 row-span-2">
            <option class="selected">{{ season1 }}</option>
            <option>{{ season2 }}</option>
            <option>{{ season3 }}</option>
        </select>
    </div>

    <div v-if="params.tab === undefined">
        <div class="tabs overflow-x-scroll overflow-y-hidden flex-nowrap fit-content py-3">
            <NuxtLink :to="`/${sport}/league/${leagueSlug}`" class="tab tab-sm tab-bordered tab-active">Results</NuxtLink>
            <NuxtLink :to="`/${sport}/league/${leagueSlug}/stats`" class="tab tab-sm tab-bordered">Stats</NuxtLink>
        </div>

        <div class="px-2">
            <div class="tab tab-bordered tab-active mb-3">Next Games</div>
            <div class="grid grid-cols-12 mb-3">
                <div class="col-span-12 grid grid-cols-12 bg-base-200">
                    <div class="col-start-6 col-end-10 grid grid-cols-3 text-center text-xs place-items-center">
                        <p>1</p>
                        <p>X</p>
                        <p>2</p>
                    </div>
                </div>
                
                <ul class="col-span-12 grid grid-cols-12 px-1" ref="nextGames">
                    <li class="col-span-12 grid grid-cols-12 grid-rows-2" ref="game">
                        <div class="col-span-5 row-span-2 text-xs">
                            <p>{{ homeTeamName }}</p>
                            <p>{{ awayTeamName }}</p>
                        </div>
                        <div class="col-span-4 row-span-2 grid grid-cols-3 text-center text-sm place-items-center">
                            <p>{{ oddsHome }}</p>
                            <p>{{ oddsDraw }}</p>
                            <p>{{ oddsAway }}</p>
                        </div>
                        <div class="col-span-3 row-span-2 flex place-items-center place-self-center text-xs">
                            <p>{{ matchDate }}, {{ matchTime }}</p>
                        </div>
                        <div class="col-span-12 divider my-0" ref="divider" v-if="nextGames.findLast === game"></div>
                    </li>
                </ul>
            </div>
            <div>
                <div class="tabs place-content-center text-center">
                    <a class="tab tab-bordered tab-active">Standings</a>
                    <a class="tab tab-bordered">Form</a>
                    <a class="tab tab-bordered">Over/Under</a>
                    <a class="tab tab-bordered">Top Scores</a>
                </div>
                <div class="tabs place-content-center text-center">
                    <a class="tab tab-bordered tab-active">Overall</a>
                    <a class="tab tab-bordered">Home</a>
                    <a class="tab tab-bordered">Away</a>
                </div>
                <div class="maw-w-full overflow-x-scroll">
                    <table class="table-auto text-sm text-center w-full">
                        <thead>
                            <tr class="uppercase">
                                <th>#</th>
                                <th class="text-start">Team</th>
                                <th>P</th>
                                <th><p>W</p></th>
                                <th><p>D</p></th>
                                <th><p>L</p></th>
                                <th><p>G</p></th>
                                <th><p>PTS</p></th>
                            </tr>
                        </thead>
                        <tbody class="text-sm text-center">
                            <tr>
                                <th>{{ teamStanding }}</th>
                                <td class="text-start">{{ teamName }}</td>
                                <td>{{ teamPlayed }}</td>
                                <td>{{ teamWins }}</td>
                                <td>{{ teamDraws }}</td>
                                <td>{{ teamLoses }}</td>
                                <td>{{ teamGoals }}</td>
                                <td>{{ teamPoints }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <div>

    </div>
</template>