<script setup lang="ts">
    const props = defineProps({
        gameDate: String,
        gameTime: String,

        homeName: String,
        homeScore: Number,
        
        awayName: String,
        awayScore: Number
    })
</script>

<template>
    <div class="flex flex-col place-items-center">
        <label for="quantity">Number of Matches</label>
        <select class="select select-xs select-bordered" name="quantity" id="quantity">
            <option class="option selected" value="5">5</option>
            <option class="option" value="10">10</option>
        </select>
        <table class="table table-xs table-auto border-collapse text-center font-semibold font-inter lg:table-lg lg:w-3/4">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Game</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ gameDate }}</td>
                    <td>{{ gameTime }}</td>
                    <td>{{ homeName }} - {{ awayName }}</td>
                    <td>{{ homeScore }}-{{ awayScore }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>