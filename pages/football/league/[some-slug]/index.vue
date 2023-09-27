<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";

    let sports = ref(sportsData);

    function whichSport() {
        for (let sport of sports.value) {
            if (sport.active === true) {
                return sport;                
            } else {
                continue
            }
        }
    }
    const sportId = whichSport()?.id.toString() || "";
    const sportSlug = whichSport()?.slug || "";
    const someSlug = useRoute().params;
    const requestId = someSlug.someslug.toString();

    const nextGames = ref([]);
    const game = ref();

    definePageMeta({
        layout: "default",
    });
    
    
    
</script>
<template>
    <div class="p-2 grid grid-cols-12 grid-rows-5 place-items-center">
        <div class="bg-red-900 h-[100px] w-[100px] row-span-3 col-span-12">img</div>
        <p class="text-lg col-span-7 row-span-2 ">Some league name</p>
        <p class="col-span-1 row-span-2">-</p>
        <select class="select select-bordered select-sm col-span-4 row-span-2">
            <option class="selected">season1</option>
            <option>season2</option>
            <option>season3</option>
        </select>
    </div>
    <div>
        <div class="tabs overflow-x-scroll overflow-y-hidden flex-nowrap fit-content py-3">
            <NuxtLink to="/football/league/some-slug" class="tab tab-sm tab-bordered tab-active">Summary</NuxtLink>
            <NuxtLink to="/football/league/some-slug/results" class="tab tab-sm tab-bordered">Results</NuxtLink>
            <NuxtLink to="/football/league/some-slug/fixtures" class="tab tab-sm tab-bordered">Fixtures</NuxtLink>
            <NuxtLink to="/football/league/some-slug/stats" class="tab tab-sm tab-bordered">Stats</NuxtLink>
            <NuxtLink to="/football/league/some-slug/mututal-games" class="tab tab-sm tab-bordered">H2H</NuxtLink>
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
                    <li class="col-span-12 grid grid-cols-12 grid-rows-2" :key="`someKey`" ref="game">
                        <div class="col-span-5 row-span-2 text-xs">
                            <p>Home Team</p>
                            <p>Away Team</p>
                        </div>
                        <div class="col-span-4 row-span-2 grid grid-cols-3 text-center text-sm place-items-center">
                            <p>1.23</p>
                            <p>2.50</p>
                            <p>3.00</p>
                        </div>
                        <div class="col-span-3 row-span-2 flex place-items-center place-self-center text-sm">
                            <p>Date, Time</p>
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
                    <table class="table table-auto text-sm text-center">
                        <thead>
                            <tr class="uppercase">
                                <th>#</th>
                                <th>Team</th>
                                <th>gp</th>
                                <th><p>w</p></th>
                                <th><p>d</p></th>
                                <th><p>l</p></th>
                                <th><p>g</p></th>
                                <th><p>gd</p></th>
                                <th><p>pts</p></th>
                                <th>form</th>
                            </tr>
                        </thead>
                        <tbody class="text-sm text-center">
                            <tr>
                                <th>1.</th>
                                <td class="">Team Name</td>
                                <td>6</td>
                                <td>4</td>
                                <td>1</td>
                                <td>1</td>
                                <td>8:6</td>
                                <td>2</td>
                                <td>13</td>
                                <td>some form</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>