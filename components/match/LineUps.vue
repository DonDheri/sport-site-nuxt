<script setup lang="ts">

    const params = useRoute().params;
    const config = useRuntimeConfig();

    const {data: getLineups} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}/lineups`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        
    }));
    const lineups = computed(() => {
        return getLineups.value.data;
    });
    const homeLineup = lineups.value[0];
    const homePlayers = homeLineup?.lineup_players;
    const homeMissingPlayers = homeLineup?.missing_players;

    const awayLineup = lineups.value[1];
    const awayPlayers = awayLineup?.lineup_players;
    const awayMissingPlayers = awayLineup?.missing_players;
    
</script>
<template>
    <div v-if="lineups.length !== 0" class="uppercase">
        <div class="flex flex-row text-center justify-evenly mt-2 uppercase font-inter font-bold text-sm">
            <div class="space-y-1">
                <p>{{ homeLineup.formation }}</p>
                
                <p>{{ homeLineup.avg_rating }}</p>

                <p>{{ homeLineup.best_composition }} %</p>
            </div>
            
            <div class="space-y-1 font-bold">
                <p>Formation</p>
                <p>Overall player rating</p> 
                <p>From perfect comp.</p>  
            </div>

            <div class="space-y-1">
                <p>{{ awayLineup.formation }}</p>

                <p>{{ awayLineup.avg_rating }}</p>

                <p>{{ awayLineup.best_composition }} %</p>
            </div>
        </div>

        <div class="divider my-0 mx-2"></div>

        <div class="flex flex-row justify-evenly font-inter font-bold"> 
            <div class="grid grid-cols-8 gap-x-1 gap-y-1 place-items-center">
                <p class="col-span-2 text-sm">{{ Math.round(homeLineup.attacking) }}%</p>
                <progress class="col-span-6 progress" :value="homeLineup.attacking" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(homeLineup.technical) }}%</p>
                <progress class="col-span-6 progress" :value="homeLineup.technical" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(homeLineup.defending) }}%</p>
                <progress class="col-span-6 progress" :value="homeLineup.defending" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(homeLineup.tactical) }}%</p>
                <progress class="col-span-6 progress" :value="homeLineup.tactical" max="100"></progress>
            </div>

            <div class="text-sm text-center grid gap-y-1 font-inter font-bold uppercase">
                <p>Attacking</p>
                <p>Technical</p>
                <p>Defending</p>
                <p>Tactical</p>
            </div>

            <div class="grid grid-cols-8 gap-x-1 gap-y-1 place-items-center">
                <progress class="col-span-6 progress" :value="awayLineup.attacking" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(awayLineup.attacking) }}%</p>

                <progress class="col-span-6 progress" :value="awayLineup.technical" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(awayLineup.technical) }}%</p>

                <progress class="col-span-6 progress" :value="awayLineup.defending" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(awayLineup.defending) }}%</p>

                <progress class="col-span-6 progress" :value="awayLineup.tactical" max="100"></progress>
                <p class="col-span-2 text-sm">{{ Math.round(awayLineup.tactical) }}%</p>
            </div>
        </div>

        <div class="divider my-0 mx-2"></div>

        <!-- Tables -->
        <div class="lg:flex lg:justify-evenly">
            <div>
                <!-- Home team table -->
                <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg lg:">
                    <thead>
                        <tr>
                            <th class="py-1 px-1">#</th>
                            <th class="py-1 px-1 text-start">Player</th>
                            <th class="py-1 px-1">Position</th>
                            <th class="py-1 px-1">Age</th>
                            <th class="py-1 px-1">Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="player in homePlayers">
                            <th>{{ player.position }}</th>
                            <td class="text-start capitalize">{{ player.player.name }}</td>
                            <td class="py-1 px-1 uppercase">{{ player.position_key }}</td>
                            <td>{{ player.player.age }}</td>
                            <td>{{ player.player.rating }}</td>
                        </tr>
                    </tbody>
                </table>

                <!-- Home missing players table -->
                <p class="font-bold">Benched players</p>
                <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg">
                    <thead>
                        <tr>
                            <th class="py-1 px-1"></th>
                            <th class="py-1 px-1 text-start">Player</th>
                            <th class="py-1 px-1">Position</th>
                            <th class="py-1 px-1">Age</th>
                            <th class="py-1 px-1">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="player in homeMissingPlayers">
                            <td class="py-1 px-1"></td>
                            <td class="py-1 px-1 text-start">{{ player.player.name }}</td>
                            <td class="py-1 px-1">{{ player.player.age }}</td>
                            <td class="py-1 px-1">{{ player.player.position }}</td>
                            <td class="py-1 px-1">{{ player.player.rating }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="divider mx-2 my-0 lg:divider-horizontal lg:mx-0"></div>

            <div>
                <!-- Away team player table -->
                <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg">
                    <thead>
                        <tr>
                            <th class="py-1 px-1">#</th>
                            <th class="py-1 px-1 text-start">Player</th>
                            <th class="py-1 px-1">Position</th>
                            <th class="py-1 px-1">Age</th>
                            <th class="py-1 px-1">Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="player in awayPlayers">
                            <th class="py-1 px-1">{{ player.position }}</th>
                            <td class="py-1 px-1 text-start capitalize">{{ player.player.name }}</td>
                            <td class="py-1 px-1 uppercase">{{ player.position_key }}</td>
                            <td class="py-1 px-1">{{ player.player.age }}</td>
                            <td class="py-1 px-1">{{ player.player.rating }}</td>
                        </tr>
                    </tbody>
                </table>

                <p class="font-bold">Benched players</p>
                <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg">
                    <thead>
                        <tr>
                            <th class="py-1 px-1"></th>
                            <th class="py-1 px-1 text-start">Player</th>
                            <th class="py-1 px-1">Position</th>
                            <th class="py-1 px-1">Age</th>
                            <th class="py-1 px-1">Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="player in awayMissingPlayers">
                            <td class="py-1 px-1"></td>
                            <td class="py-1 px-1 text-start">{{ player.player.name }}</td>
                            <td class="py-1 px-1">{{ player.player.age }}</td>
                            <td class="py-1 px-1">{{ player.player.position }}</td>
                            <td class="py-1 px-1">{{ player.player.rating }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-if="lineups.length === 0">
        <p class="text-md text-center">No line-ups data provided.</p>
    </div>
</template>