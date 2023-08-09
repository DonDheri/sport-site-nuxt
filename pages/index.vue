<script lang="ts" setup>
    import { sports } from '@/components/content/sports';
    const { id } = useRoute().params;
    const requestId = id as string || "";
    const currentSport = sports[Number(requestId)];
    

    
    function d() {
        console.log(useRoute().path=="basket-ball");
        
    }





    useServerHeadSafe({
        title: 'Sport Site'
    });
    
    
</script>
<template>

    <TheContent/>
    <DifferentOptions/>

</template>
