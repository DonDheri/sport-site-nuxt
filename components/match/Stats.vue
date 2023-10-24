<script setup lang="ts">
    
    const params = useRoute().params;
    const config = useRuntimeConfig();
    const { data } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/events/${params.match}/statistics`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || '',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        },
    }))
    const stats = computed(() => {
        return data.value;
    });
    


    
    
</script>

<template>
    <div v-if="stats !== null" class="flex place-content-center">
        
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
                    <td>{{  }}%</td>
                    <td>Ball Possession</td>
                    <td>{{  }}%</td>
                </tr>
                <tr>
                    <td>{{  }}</td>
                    <td>Total Shots</td>
                    <td>{{  }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div v-if="stats === null">
        <p class="text-md text-center">No statistics data provided.</p>
    </div>
</template>