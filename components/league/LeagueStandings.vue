<script setup lang="ts">
    const params = useRoute().params;
    const config = useRuntimeConfig();

    const {data} = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/leagues/${params.league}/seasons`, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey as string) || "",
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        params: {
            page: 1,
        },
    }));

</script>

<template>
    <div class="px-2">
        <div>
            <div class="maw-w-full overflow-x-scroll">
                <table class="table-auto text-sm text-center w-full border-collapse">
                    <thead>
                        <tr class="uppercase">
                            <th>#</th>
                            <th class="text-start">Team</th>
                            <th>P</th>
                            <th><p>W</p></th>
                            <th><p>D</p></th>
                            <th><p>L</p></th>
                            <th><p>G</p></th>
                            <th><p>PTS</p></th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-center">
                        <tr>
                            <th>{{  }}</th>
                            <td class="text-start">{{  }}</td>
                            <td>{{  }}</td>
                            <td>{{  }}</td>
                            <td>{{  }}</td>
                            <td>{{  }}</td>
                            <td>{{  }}</td>
                            <td>{{  }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>