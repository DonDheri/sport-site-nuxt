<script setup lang="ts">

</script>

<template>
    <div class="">
        <div class="flex justify-evenly">
            <div class="form-control flex flex-row justify-evenly place-items-center">
                <select class="select select-sm">
                    <option ref="ballPossession">Ball possession</option>
                    <option ref="bigChances">Big chances</option>
                    <option ref="bigChancesMissed">Big chances missed</option>
                    <option ref="blockedShots">Blocked Shots</option>
                    <option ref="cornerKicks">Corner kicks</option>
                    <option ref="fouls">Fouls</option>
                    <option ref="goals">Goals</option>
                    <option ref="offsides">Offsides</option>
                    <option ref="overUnder">Over/under</option>
                    <option ref="shotsInBox">Shots inside Box</option>
                    <option ref="shotsOnTarget">Shots on target</option>
                    <option ref="shotsOutBox">Shots outside box</option>
                    <option ref="totalShots">Total shots</option>
                    <option ref="yellowCards">Yellow cards</option>
                </select>
            </div>
            <div class="form-control flex-row">
                <label for="overall" class="label cursor-pointer flex-col">
                    <span class="label-text">Overall</span>
                    <input ref="overallCheck" class="checkbox checkbox-xs" type="checkbox" name="overall" checked>
                </label>

                <label for="home" class="label cursor-pointer flex-col">
                    <span class="label-text">Home</span>
                    <input ref="homeCheck" class="checkbox checkbox-xs" type="checkbox" name="home">
                </label>

                <label for="away" class="label cursor-pointer flex-col">
                    <span class="label-text">Away</span>
                    <input ref="awayCheck" class="checkbox checkbox-xs" type="checkbox" name="away">
                </label>
            </div>
        </div>
        <table class="table table-sm border-collapse text-center">
            <thead>
                <!-- <tr>
                    <th class="w-[125px] text-start">Team</th>
                    <th>Games</th>
                    <th>Result</th>
                    <th>Average</th>
                </tr> -->
                <tr>
                    <th class="w-[125px] text-start">Team</th>
                    <th>Games</th>
                    <th>O 2.5</th>
                    <th>U 2.5</th>
                    <th>O 2.5 (%)</th>
                    <th>U 2.5 (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-start">{{  }}</td>
                    <td>{{  }}</td>
                    <td>{{  }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>