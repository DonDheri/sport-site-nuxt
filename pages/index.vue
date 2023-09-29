<script lang="ts" setup>
    import sportData from "~/data/sportsData.json"

    const sports = ref(sportData);

    
    
    useServerHeadSafe({
        title: 'Sport Site',
        
    });
    definePageMeta({
        layout: "default",
    });
    navigateTo({ path: "/football" })
</script>

