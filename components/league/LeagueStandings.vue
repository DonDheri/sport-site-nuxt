<script setup lang="ts">
    const params = useRoute().params;
    const config = useRuntimeConfig();
    const select = ref(null);
    const checkBoxes = ref([])
    const check = ref();

    const {data} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/seasons/${params.season}/standings-tables`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            page: 1,
        },
    }));
    const standings = computed(() => {
        return data.value?.data[0];
    })

    
    console.log(checkBoxes);
    
    
    
</script>

<template>
    <div class="px-2">
        <div>
            <div class="maw-w-full">
                <div ref="checkBoxes" class="my-2 flex space-x-2">
                    <div class="flex items-center">
                        <label for="totalCheck">Total</label>
                        <input name="totalCheck" type="checkbox" ref="checkBox" class="checkbox checkbox-sm">
                    </div>

                    <div class="flex items-center">
                        <label for="homeCheck">Home</label>
                        <input name="homeCheck" type="checkbox" ref="checkBox" class="checkbox checkbox-sm">
                    </div>

                    <div class="flex items-center">
                        <label for="awayCheck">Away</label>
                        <input name="awayCheck" type="checkbox" ref="checkBox" class="checkbox checkbox-sm">
                    </div>
                </div>
                <table class="table table-auto table-xs text-center w-full border-collapse">
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
                        <tr v-for="row in standings.standings_rows">
                            <th>{{ row.position }}</th>
                            <td class="text-start">{{ row.team.name }}</td>
                            <td>{{ row.fields.matches_total }}</td>
                            <td>{{ row.fields.wins_total }}</td>
                            <td>{{ row.fields.draws_total }}</td>
                            <td>{{ row.fields.losses_total }}</td>
                            <td>{{ row.fields.goals_total }}</td>
                            <td>{{ row.fields.points_total }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>