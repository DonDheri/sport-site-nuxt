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

    <Stats v-if="tab === 'stats'"
    :home-ball-poss="46"
    :home-total-shots="14"

    :away-ball-poss="54"
    :away-total-shots="10"
    />

    <LineUps v-if="tab === 'line-ups'"
        :home-team-name="'Nottingham Forest'"

        :home-player-num="1"
        :home-player-name="'Matt Turner'"
        :home-player-pos="'G'"
        :home-player-age="29"
        :home-player-price="0.5"
        :home-player-rating="69.1"
    
        :home-formation="'3-4-2-1'"
        :home-overall-rating="55.9"
        :home-perf-comp="59.9"

        :home-attack="59"
        :home-technical="51"
        :home-defending="56"
        :home-tactical="50"

        :away-team-name="'Burnley'"

        :away-player-num="1"
        :away-player-name="'James Trafford'"
        :away-player-pos="'G'"
        :away-player-age="20"
        :away-player-price="''"
        :away-player-rating="63.7"

        :away-formation="'4-4-2'"
        :away-overall-rating="56.3"
        :away-perf-comp="86.8"

        :away-attack="60"
        :away-technical="53"
        :away-defending="55"
        :away-tactical="50"
    />
    
    <H2H v-if="tab === 'h2h'"
    :game-date="'10/09-2023'"
    :game-time="'00:00'"

    :home-name="'Home Team'"
    :home-score="2"
    
    :away-name="'Away Team'"
    :away-score="1"
    />
</template>
