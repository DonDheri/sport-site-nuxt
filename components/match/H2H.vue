<script setup lang="ts">
    const params = useRoute().params;
    const config = useRuntimeConfig();
    const {data: event} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }));
    const game = computed(() => {
        return event.value.data;
    });
    const {data: h2hs} = await useFetch(`https://sportscore1.p.rapidapi.com/teams/${game.value.home_team_id}/h2h-events/${game.value.away_team_id}`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            page: 1,
        }
    })
    const h2h = computed(() => {
        return h2hs.value.data;
    })
    
    
</script>

<template>
    <div v-if="h2h.length !== 0" class="flex flex-col place-items-center">
        <table class="table table-sm table-auto border-collapse text-center font-semibold font-inter lg:table-lg lg:w-3/4">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Game</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="game in h2h">
                    <td>{{ game.start_at.slice(0, 11).replaceAll('-', '/') }}</td>
                    <td>{{ game.start_at.slice(11, 16) }}</td>
                    <td>{{ game.home_team.name }} - {{ game.away_team.name }}</td>
                    <td>{{ game.home_score?.display || 0 }} - {{ game.away_score?.display || 0 }}</td>
                </tr>
            </tbody>
        </table>
    </div>


    <div v-if="h2h.length === 0">
        <p class="text-md text-center">No h2h data provided.</p>
    </div>
</template>