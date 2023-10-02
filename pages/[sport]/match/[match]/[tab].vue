<script setup lang="ts">
    const tab = useRoute().params.tab;
    
    
</script>
<template>
    <CurrentMatch
        :sport-slug="'football'"
        
        :match-slug="'match-slug'"
        :match-date="'Date'"
        :match-time="'Time'"
        :time-left="'Time Left'"

        :home-team-name="'Home Team'"
        :home-team-slug="'home-team'"
        :home-team-score="'Score'"

        :away-team-name="'Away Name'"
        :away-team-slug="'away-team'"
        :away-team-score="'Score'"
    />
    <LineUps v-if="tab === 'line-ups'"
        :home-formation="'4-3-3'"
        :home-player-rating="55.9"
        :home-perf-comp="59.9"

        :home-attack="59"
        :home-technical="51"
        :home-defending="56"
        :home-tactical="50"

        :away-formation="'4-4-2'"
        :away-player-rating="56.3"
        :away-perf-comp="86.8"

        :away-attack="60"
        :away-technical="53"
        :away-defending="55"
        :away-tactical="50"
    />
    
</template>
