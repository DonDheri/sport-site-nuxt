<script setup lang="ts">
    const props = defineProps({
        homeTeamName: String,
    })
</script>
<template>
    <div>
        <p class="text-md capitalize">{{ props.homeTeamName }}</p>
        <table class="table table-xs table-auto text-sm text-center w-full lg:table-lg">
            <thead>
                <tr>
                    <th class="py-1 px-1">#</th>
                    <th class="py-1 px-1 text-start">Player</th>
                    <th class="py-1 px-1">Position</th>
                    <th class="py-1 px-1">Age</th>
                    <th class="py-1 px-1">Rating</th>
                </tr>
            </thead>

            <tbody>
                <slot></slot>
                
            </tbody>
        </table>
    </div>
</template>