<script setup lang="ts">
    const props = defineProps({
        homeTeamName: String,

        homePlayerNum: Number,
        homePlayerName: String,
        homePlayerPos: String,
        homePlayerAge: Number,
        homePlayerPrice: Number,
        homePlayerRating: Number,

        homeFormation: String,
        homeOverallRating: Number,
        homePerfComp: Number,

        homeAttack: Number,
        homeTechnical: Number,
        homeDefending: Number,
        homeTactical: Number,

        awayTeamName: String,

        awayPlayerNum: Number,
        awayPlayerName: String,
        awayPlayerPos: String,
        awayPlayerAge: Number,
        awayPlayerPrice: String,
        awayPlayerRating: Number,

        awayFormation: String,
        awayOverallRating: Number,
        awayPerfComp: Number,

        awayAttack: Number,
        awayTechnical: Number,
        awayDefending: Number,
        awayTactical: Number,
    })
</script>
<template>
    <div class="uppercase font-inter font-bold">
        <div class="flex flex-row text-center justify-evenly mt-2 uppercase font-inter font-bold text-sm">
            <div class="space-y-1">
                <p>{{ props.homeFormation }}</p>
                
                <p>{{ props.homeOverallRating }}</p>

                <p>{{ props.homePerfComp }} %</p>
            </div>
            
            <div class="space-y-1 font-bold">
                <p>Formation</p>
                <p>Overall player rating</p> 
                <p>From perfect comp.</p>  
            </div>

            <div class="space-y-1">
                <p>{{ props.awayFormation }}</p>

                <p>{{ props.awayPlayerRating }}</p>

                <p>{{ props.awayPerfComp }} %</p>
            </div>
        </div>

        <div class="divider my-0 mx-2"></div>

        <div class="flex flex-row justify-evenly font-inter font-bold"> 
            <div class="grid grid-cols-8 gap-x-1 gap-y-1 place-items-center">
                <p class="col-span-2 text-sm">{{ props.homeAttack }}%</p>
                <progress class="col-span-6 progress" :value="props.homeAttack" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.homeTechnical }}%</p>
                <progress class="col-span-6 progress" :value="props.homeTechnical" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.homeDefending }}%</p>
                <progress class="col-span-6 progress" :value="props.homeDefending" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.homeTactical }}%</p>
                <progress class="col-span-6 progress" :value="props.homeTactical" max="100"></progress>
            </div>

            <div class="text-sm text-center grid gap-y-1 font-inter font-bold uppercase">
                <p>Attacking</p>
                <p>Technical</p>
                <p>Defending</p>
                <p>Tactical</p>
            </div>

            <div class="grid grid-cols-8 gap-x-1 gap-y-1 place-items-center">
                <progress class="col-span-6 progress" :value="props.awayAttack" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.awayAttack }}%</p>
                <progress class="col-span-6 progress" :value="props.awayTechnical" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.awayTechnical }}%</p>
                <progress class="col-span-6 progress" :value="props.awayDefending" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.awayDefending }}%</p>
                <progress class="col-span-6 progress" :value="props.awayTactical" max="100"></progress>
                <p class="col-span-2 text-sm">{{ props.awayTactical }}%</p>
            </div>
        </div>

        <div class="divider my-0 mx-2"></div>

        <div class="lg:flex lg:flex-row justify-evenly">
            <div>
                <p class="text-md capitalize">{{ props.homeTeamName }}</p>
                <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th class="text-start">Player</th>
                            <th>Position</th>
                            <th>Age</th>
                            <th>€</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr >
                            <th>{{ props.homePlayerNum }}</th>
                            <td class="text-start capitalize">{{ props.homePlayerName }}</td>
                            <td class="py-1 px-1 uppercase">{{ props.homePlayerPos }}</td>
                            <td>{{ props.homePlayerAge }}</td>
                            <td>{{ props.homePlayerPrice }}M+</td>
                            <td>{{ props.homePlayerRating }}</td>
                        </tr>
                    
                    </tbody>
                </table>
            </div>

            <div class="divider my-2 mx-2"></div>

            <div>
                <p class="text-md capitalize">{{ props.awayTeamName }}</p>
                <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg">
                    <thead>
                        <tr>
                            <th class="py-1 px-1">#</th>
                            <th class="py-1 px-1 text-start">Player</th>
                            <th class="py-1 px-1">Position</th>
                            <th class="py-1 px-1">Age</th>
                            <th class="py-1 px-1">€</th>
                            <th class="py-1 px-1">Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <th class="py-1 px-1">{{ props.awayPlayerNum }}</th>
                            <td class="py-1 px-1 text-start capitalize">{{ props.awayPlayerName }}</td>
                            <td class="py-1 px-1 uppercase">{{ props.awayPlayerPos }}</td>
                            <td class="py-1 px-1">{{ props.awayPlayerAge }}</td>
                            <td class="py-1 px-1">{{ props.awayPlayerPrice }}</td>
                            <td class="py-1 px-1">{{ props.awayPlayerRating }}</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>