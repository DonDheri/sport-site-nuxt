<script setup lang="ts">

</script>
<template>
    <AllSports/>
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-3">
        <div class="lg:col-span-2 lg:border-r-2 lg:border-neutral">
            <PopularLeagues class="hidden lg:flex"/>
        </div>
        <div class="lg:col-span-10">
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
            <div class="divider my-0 mx-2 lg:hidden"></div>
            <PopularLeaguesPhone class="lg:hidden"/>
        </div>
    </div>
    </template>