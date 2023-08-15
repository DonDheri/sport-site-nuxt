<script setup lang="ts">

    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/games`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            season: "2019-2020",
            id: requestId,
            
        },
    }))

    const matches = computed(() => {
        return data.value?.response;
    })
    console.log(matches.value);
    

</script>

<template>
    <div class="text-center border-2 mx-48 grid grid-cols-6 gap-3 px-3 rounded-xl my-6">
        
        <p>{{  }}</p>
    </div>
</template>