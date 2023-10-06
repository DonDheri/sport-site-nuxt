<script setup lang="ts">

</script>

<template>
    <div>
        <ul class="flex flex-col w-full mr-4">
            <h1 class="text-lg border-b border-neutral">Popular Leagues</h1>
            <li>
                <NuxtLink :to="`/football/league/some-league`" class="uppercase text-sm">
                    Some League
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>