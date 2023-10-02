<script setup lang="ts">
    
</script>
<template>
    <AllSports/>
    <UpcomingMatches
    :sport-slug="'football'"
    
    :match-slug="'some-match-slug'"
    :match-date="'Date'"
    :match-time="'Time'"

    :league-name="'Some League'"

    :home-logo="'#'"
    :home-name-short="'ABC'"
    :home-score="'2'"

    :away-logo="'#'"
    :away-name-short="'DEF'"
    :away-score="'0'"
    />
    <div class="divider my-0 mx-2"></div>
    <PopularLeagues/>
</template>