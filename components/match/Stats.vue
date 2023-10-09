<script setup lang="ts">

    const d = new Date()
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const config = useRuntimeConfig();
    // const { data, } = await useAsyncData<any>(() => $fetch(`https://api-basketball.p.rapidapi.com/games`, {
    //     headers: {
    //         'X-RapidAPI-Key': (config.public.apiKey as string) || '',
    //         'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    //     },
    //     params: {
    //         season: `${(year-1).toString()}-${year.toString()}`,
            
    //     },
    // }))

    // const matches = computed(() => {
    //     return data.value?.response;
    // })
    
    const props = defineProps({
        homeBallPoss: Number,
        homeTotalShots: Number,

        awayBallPoss: Number,
        awayTotalShots: Number,
    })
    
</script>

<template>
    <div class="flex place-content-center">
        
        <table class="table text-center text-md table-auto border-collapse font-inter font-bold lg:table-lg lg:w-1/2">
            <thead>
                <tr>
                    <th>Home</th>
                    <th>Category</th>
                    <th>Away</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ homeBallPoss }}%</td>
                    <td>Ball Possession</td>
                    <td>{{ awayBallPoss }}%</td>
                </tr>
                <tr>
                    <td>{{ homeTotalShots }}</td>
                    <td>Total Shots</td>
                    <td>{{ awayTotalShots }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>