<script setup lang="ts">
    const {data} = await useAsyncData(() => $fetch(`https://www.balldontlie.io/api/v1/teams`), {
        method: "GET",
        params: {
            page: 0,
            per_page: 30
        },
    });
    
    
</script>