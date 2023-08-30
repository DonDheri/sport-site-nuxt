<script setup lang="ts">

    const d = new Date()
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/games`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
        params: {
            season: `${(year-1).toString()}-${year.toString()}`,
            
        },
    }))

    const matches = computed(() => {
        return data.value?.response;
    })
    
    
    
</script>

<template>
    <div class="text-center border-2 mx-48 grid grid-cols-12 grid-rows-2 gap-3 px-3 rounded-xl my-6">

        <NuxtLink
        
        
        class=""
        >{{  }}
        </NuxtLink>
        
        <p class="text-2xl font-medium w-full">vs</p>
        


        <div class="">

        </div>
    </div>
</template>