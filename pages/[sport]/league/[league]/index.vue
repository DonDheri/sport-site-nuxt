<script setup lang="ts">
    import sportsData from "~/data/sportsData.json";

    let sports = ref(sportsData);
    const sportSlug = useRoute().params.sport;

    function whichSport() {
        for (let sport of sports.value) {
            if (sport.slug === sportSlug) {
                return sport;                
            }
        }
    }
    const sportId = whichSport()?.id.toString() || "";
    
    const nextGames = ref([]);
    const game = ref();
    
    
    
    
</script>
<template>
    
    <CurrentLeague
        :sport="sportSlug.toString()"

        :league-logo="'logo'"
        :league-name="'Some league name'"

        :season1="'season 1'"
        :season2="'season 2'"
        :season3="'season 3'"

        :home-team-name="'Some league'"
        :away-team-name="'Another league'"

        :odds-home="1.15"
        :odds-draw="1.75"
        :odds-away="2.30"

        :match-date="'Date'"
        :match-time="'Time'"

        :team-standing="1"
        :team-name="'Some team'"
        :team-played="6"
        :team-wins="4"
        :team-draws="1"
        :team-loses="1"
        :team-goals="'8:6'"
        :team-points="13"
    />
</template>