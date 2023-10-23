<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";
    const sports = ref(sportsData)

    const params = useRoute().params;
    const whichSport = () => {
        for (let sport of sports.value) {
            if (sport.slug === params.sport) {
                return sport;
            }
        }
    }
    const currentSport = whichSport();
    
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
    
    
    const {data: getStats, error: errorStats} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}/statistics`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
    }));
    const stats = computed(() => {
        return getStats.value.data;
    });
    



    const {data: getLineups, error: errorLineups} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match.toString()}/lineups`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        
    }));
    const lineups = computed(() => {
        return getLineups.value.data;
    });
    const homeLineup  = lineups.value;
    const awayLineup = lineups.value;
    
</script>
<template>
    <CurrentMatch
        :sport-slug="currentSport?.slug"
        
        :match-id="params.match.toString()"
        :match-date="game.start_at.slice(0, 11)"
        :match-time="game.start_at.slice(11,16)"
        :time-left="game.status_more"

        :home-team-logo="game.home_team.logo"
        :home-team-name="game.home_team.name"
        :home-team-slug="game.home_team.slug"
        :home-team-score="game.home_score.display || 0"

        :away-team-logo="game.away_team.logo"
        :away-team-name="game.away_team.name"
        :away-team-slug="game.away_team.slug"
        :away-team-score="game.away_score.display || 0"
    />

    <div class="divider my-0 mx-2"></div>


    <Stats v-if="params.tab === 'statistics'"
    :home-ball-poss="46"
    :home-total-shots="14"

    :away-ball-poss="54"
    :away-total-shots="10"
    />

    <div v-if="params.tab === 'lineups'">
        <LineUps
        :home-formation="lineups[0].formation || 'no formation'"
        :home-overall-rating="homeLineup.avg_rating"
        :home-perf-comp="homeLineup.best_composition"

        :home-attack="Math.round(homeLineup.attacking)"
        :home-technical="Math.round(homeLineup.technical)"
        :home-defending="Math.round(homeLineup.defending)"
        :home-tactical="Math.round(homeLineup.tactical)"

        :away-formation="awayLineup.formation"
        :away-overall-rating="awayLineup.avg_rating"
        :away-perf-comp="awayLineup.best_composition"

        :away-attack="Math.round(awayLineup.attacking)"
        :away-technical="Math.round(awayLineup.technical)"
        :away-defending="Math.round(awayLineup.defending)"
        :away-tactical="Math.round(awayLineup.tactical)"
        >
            <HomeLineupTable
            :home-team-name="game.home_team.name"
            >
            <TableRowHome v-for="player in homeLineup.lineup_players"
            :home-player-num="player.position"
            :home-player-name="player.player.name"
            :home-player-pos="player.player.position"
            :home-player-age="player.player.age"
            :home-player-rating="player.player.rating"
            />
            </HomeLineupTable>
            <div class="divider my-2 mx-2"></div>
            <AwayLineupTable
            :away-team-name="game.away_team.name"
            >
            <TableRowAway v-for="player in awayLineup.lineup_players"
            :away-player-num="player.position"
            :away-player-name="player.player.name"
            :away-player-pos="player.player.position"
            :away-player-age="player.player.age"
            :away-player-rating="player.player.rating"
            />
            </AwayLineupTable>
        </LineUps>
    </div>
    
    <H2H v-if="params.tab === 'h2h'"
    :game-date="'10/09-2023'"
    :game-time="'00:00'"

    :home-name="'Home Team'"
    :home-score="2"
    
    :away-name="'Away Team'"
    :away-score="1"
    />
</template>
