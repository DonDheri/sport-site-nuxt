<script setup lang="ts">

    import sports from "../../../components/content/sports.js"
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const basketBall = sports[0];

    const config = useRuntimeConfig();
    const { data } = await useAsyncData("requestId", () => $fetch(`https://api-basketball.p.rapidapi.com/leagues`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            id: requestId,
            
        }
    }))
    // const leagues = computed(() => {
    //     return data?.value.leagues;
    // })
    console.log(requestId);

</script>

<template>
    <div class="grid grid-cols-12 gap-5 border-2 p-5 rounded-xl">

        <NuxtLink 
            v-for="sport in sports"
            
            class="flex justify-center align-center bg-gradient-to-r from-blue-500 to-blue-600 rounded bg-zinc-600 text-white"
            :to="`/content/${sport.url}/${sport.id}`"
            >
            {{ sport.name }}
        </NuxtLink>
        
    </div>
    <!-- <div class="flex text-center mx-48 w-full justify-center my-10">

        <div class="grid grid-cols-12 gap-5 border-2 p-5 rounded-xl">
            <div v-for="d in data">
                {{  }}
            </div>
        </div>
    </div> -->
    </template>