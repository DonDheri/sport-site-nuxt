<script setup lang="ts">
    import sports from "./sports.js";

    


</script>

<template>

    <div class="flex flex-col text-center w-full justify-content mt-10">
        <div class="border-2 mx-48 flex flex-row-1 overflow-scroll px-10 py-8 rounded-xl">
            
            <button 
            v-for="(sport, index) in sports" :key="index" class="bg-gradient-to-r from-blue-500 to-blue-600 rounded px-5 py-2 bg-zinc-600 mx-6 text-white">
                <a 
                    :href="`/content/${ sport.url }`"
                    
                    
                >{{ sport.type }}</a>
            </button>

        </div>
    </div>

</template>