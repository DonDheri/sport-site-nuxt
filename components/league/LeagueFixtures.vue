<script setup lang="ts">
    const nextGames = ref([]);
    const game = ref();
</script>

<template>
    <div class="grid grid-cols-12 mb-3 px-2">
        <div class="col-span-12 grid grid-cols-12 bg-base-200">
            <div class="col-start-6 col-end-10 grid grid-cols-3 text-center text-xs place-items-center">
                <p>1</p>
                <p>X</p>
                <p>2</p>
            </div>
        </div>
        
        <ul class="col-span-12 grid grid-cols-12 px-1" ref="nextGames">
            <li class="col-span-12 grid grid-cols-12 grid-rows-2" ref="game">
                <div class="col-span-5 row-span-2 text-xs">
                    <p>{{  }}</p>
                    <p>{{  }}</p>
                </div>
                <div class="col-span-4 row-span-2 grid grid-cols-3 text-center text-sm place-items-center">
                    <p>{{  }}</p>
                    <p>{{  }}</p>
                    <p>{{  }}</p>
                </div>
                <div class="col-span-3 row-span-2 flex place-items-center place-self-center text-xs">
                    <p>{{  }}, {{  }}</p>
                </div>
                <div class="col-span-12 divider my-0" ref="divider" v-if="nextGames.findLast === game"></div>
            </li>
        </ul>
    </div>
</template>