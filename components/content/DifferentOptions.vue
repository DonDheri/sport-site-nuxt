<script setup lang="ts">
    import { sports } from './Sports';

    
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    const props = defineProps<{
        sports:({
            id: number
            title: string
            url: string
            leagues?: [
                {
                    id: number
                    title: string
                    type: string
                    country: {
                        id: number
                        title: string
                        code: string
                        flag: string
                    }
                    seasons: [
                        {
                            season: string
                            start: string
                            end: string
                        }
                    ]
                }
            ]
        })
    }>()
    

    
    
</script>
<template>
    <div v-if="useRoute().path=='/'||`/content/${props.sports.id}`" class="border-2 mx-48 grid grid-cols-12 grid-rows-2 gap-5 overflow-x-scroll px-10 pb-5 rounded-xl my-6">
        <p class="justify-self-center col-span-12 ro text-2xl font-medium border-b-2 w-full p-5 mb-5  text-center">Sports</p>
        <Btn 
        v-for="sport in sports"
        :sports="{
            id: sport.id,
            title: sport.title,
            url: sport.url
        }"
        />
    </div>

    <div v-if="useRoute().path==`/content/${props.sports.id}/${props.sports.leagues}`" class="border-2 mx-48 grid grid-cols-12 grid-rows-2 gap-5 overflow-x-scroll px-10 pb-5 rounded-xl my-6">
        <p class="justify-self-center col-span-12 ro text-2xl font-medium border-b-2 w-full p-5 mb-5  text-center">Sports</p>
        <SportBtn 
        v-for="sport in sports"
        :sports="{
            id: sport.id,
            title: sport.title,
            url: sport.url
        }"
        />
    </div>
</template>