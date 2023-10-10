<script setup lang="ts">
    
</script>
<template>
    <CurrentLeague
        :sport-slug="'football'"

        :league-logo="'league logo'"
        :league-name="'Some League'"
        :league-slug="'some-league'"

        :season1="'2022-2023'"
        :season2="'2021-2022'"
        :season3="'2020-2021'"


        :stand-team-standing="1"
        :stand-team-name="'Team name'"
        :stand-team-played="3"
        :stand-team-wins="1"
        :stand-team-draws="0"
        :stand-team-loses="2"
        :stand-team-goals="'8:6'"
        :stand-team-points="3"


        :fix-home-name="'Home team'"
        :fix-away-name="'Away team'"

        :fix-odds-home="1.23"
        :fix-odds-draw="1.98"
        :fix-odds-away="2.00"

        :fix-date="'Date'"
        :fix-time="'Time'"


        :res-date="'Date'"
        
        :res-home-name="'Home Team'"
        :res-away-name="'Away Team'"

        :res-result="'2-1'"
        :res-league-name="'League Name'"

        :stat-team-name="'Team Name'"
        :stat-games="3"
        :stat-goals="4"
    />
</template>