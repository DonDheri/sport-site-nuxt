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
    
    // const select = ref();
    const ballPossession = ref();
    const bigChances = ref();
    const bigChancesMissed = ref();
    const blockedShots = ref();
    const cornerKicks = ref();
    const fouls = ref();
    const goals = ref();
    const offsides = ref();
    const overUnder = ref();
    const shotsInBox = ref();
    const shotsOnTarget = ref();
    const shotsOutBox = ref();
    const totalShots = ref();
    const yellowCards = ref();
    const overallCheck = ref();
    const homeCheck = ref();
    const awayCheck = ref();
    const nextGames = ref([]);
    const game = ref();

    const props = defineProps({
        sportSlug: String,

        leagueLogo: String,
        leagueName: String,
        leagueSlug: String,
        season1: String,
        season2: String,
        season3: String,


        standTeamStanding: Number,
        standTeamName: String,
        standTeamPlayed: Number,
        standTeamWins: Number,
        standTeamDraws: Number,
        standTeamLoses: Number,
        standTeamGoals: String,
        standTeamPoints: Number,


        fixHomeName: String,
        fixAwayName: String,
        fixOddsHome: Number,
        fixOddsDraw: Number,
        fixOddsAway: Number,
        fixDate: String,
        fixTime: String,


        resDate: String,
        resHomeName: String,
        resAwayName: String,
        resResult: String,
        resLeagueName: String,


        statTeamName: String,
        statGames: Number,
        statGoals: Number,
    });
    
    
</script>
<template>
    <!-- League display -->
    <div class="p-2 grid grid-cols-12 grid-rows-5 place-items-center">
        <div class="bg-red-900 h-[100px] w-[100px] row-span-3 col-span-12">{{ leagueLogo }}</div>
        <p class="text-lg col-span-7 row-span-2 ">{{ leagueName }}</p>
        <p class="col-span-1 row-span-2">-</p>
        
        <select class="select select-bordered select-sm col-span-4 row-span-2">
            <option selected>{{ season1 }}</option>
            <option>{{ season2 }}</option>
            <option>{{ season3 }}</option>
        </select>
    </div>
    <div class="flex place-content-center">
        <div class="tabs overflow-x-scroll overflow-y-hidden flex-nowrap fit-content py-3">
            <NuxtLink :to="`/${sportSlug}/league/${leagueSlug}/standings`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'standings'}]">Standings</NuxtLink>
            <NuxtLink :to="`/${sportSlug}/league/${leagueSlug}/fixtures`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'fixtures'}]">Fixtures</NuxtLink>
            <NuxtLink :to="`/${sportSlug}/league/${leagueSlug}/results`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'results'}]">Results</NuxtLink>
            <NuxtLink :to="`/${sportSlug}/league/${leagueSlug}/stats`" :class="['tab', 'tab-sm', 'tab-bordered', {tabActive: params.tab === 'stats'}]">Stats</NuxtLink>
        </div>
    </div>

    <!-- Standings -->
    <div v-if="params.tab === 'standings'" class="px-2">
        <div>
            <div class="maw-w-full overflow-x-scroll">
                <table class="table-auto text-sm text-center w-full border-collapse">
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
                            <th>{{ standTeamStanding }}</th>
                            <td class="text-start">{{ standTeamName }}</td>
                            <td>{{ standTeamPlayed }}</td>
                            <td>{{ standTeamWins }}</td>
                            <td>{{ standTeamDraws }}</td>
                            <td>{{ standTeamLoses }}</td>
                            <td>{{ standTeamGoals }}</td>
                            <td>{{ standTeamPoints }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Fixtures -->
    <div v-if="params.tab === 'fixtures'" class="grid grid-cols-12 mb-3 px-2">
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
                    <p>{{ fixHomeName }}</p>
                    <p>{{ fixAwayName }}</p>
                </div>
                <div class="col-span-4 row-span-2 grid grid-cols-3 text-center text-sm place-items-center">
                    <p>{{ fixOddsHome }}</p>
                    <p>{{ fixOddsDraw }}</p>
                    <p>{{ fixOddsAway }}</p>
                </div>
                <div class="col-span-3 row-span-2 flex place-items-center place-self-center text-xs">
                    <p>{{ fixDate }}, {{ fixTime }}</p>
                </div>
                <div class="col-span-12 divider my-0" ref="divider" v-if="nextGames.findLast === game"></div>
            </li>
        </ul>
    </div>

    <!-- Results -->
    <div v-if="params.tab === 'results'" class="px-2">
        <table class="table table-xs text-center border-collapse">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Home</th>
                    <th>Away</th>
                    <th>Result</th>
                    <th>League/Cup</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ resDate }}</td>
                    <td>{{ resHomeName }}</td>
                    <td>{{ resAwayName }}</td>
                    <td>{{ resResult }}</td>
                    <td>{{ resLeagueName }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Stats -->
    <div v-if="params.tab === 'stats'" class="">
        <div class="flex justify-evenly">
            <div class="form-control flex flex-row justify-evenly place-items-center">
                <select class="select select-sm">
                    <option ref="ballPossession">Ball possession</option>
                    <option ref="bigChances">Big chances</option>
                    <option ref="bigChancesMissed">Big chances missed</option>
                    <option ref="blockedShots">Blocked Shots</option>
                    <option ref="cornerKicks">Corner kicks</option>
                    <option ref="fouls">Fouls</option>
                    <option ref="goals">Goals</option>
                    <option ref="offsides">Offsides</option>
                    <option ref="overUnder">Over/under</option>
                    <option ref="shotsInBox">Shots inside Box</option>
                    <option ref="shotsOnTarget">Shots on target</option>
                    <option ref="shotsOutBox">Shots outside box</option>
                    <option ref="totalShots">Total shots</option>
                    <option ref="yellowCards">Yellow cards</option>
                </select>
            </div>
            <div class="form-control flex-row">
                <label for="overall" class="label cursor-pointer flex-col">
                    <span class="label-text">Overall</span>
                    <input ref="overallCheck" class="checkbox checkbox-xs" type="checkbox" name="overall" checked>
                </label>

                <label for="home" class="label cursor-pointer flex-col">
                    <span class="label-text">Home</span>
                    <input ref="homeCheck" class="checkbox checkbox-xs" type="checkbox" name="home">
                </label>

                <label for="away" class="label cursor-pointer flex-col">
                    <span class="label-text">Away</span>
                    <input ref="awayCheck" class="checkbox checkbox-xs" type="checkbox" name="away">
                </label>
            </div>
        </div>
        <table class="table table-sm border-collapse text-center">
            <thead>
                <!-- <tr>
                    <th class="w-[125px] text-start">Team</th>
                    <th>Games</th>
                    <th>Result</th>
                    <th>Average</th>
                </tr> -->
                <tr>
                    <th class="w-[125px] text-start">Team</th>
                    <th>Games</th>
                    <th>O 2.5</th>
                    <th>U 2.5</th>
                    <th>O 2.5 (%)</th>
                    <th>U 2.5 (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-start">{{ statTeamName }}</td>
                    <td>{{ statGames }}</td>
                    <td>{{ statGoals }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>