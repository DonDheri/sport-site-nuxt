<script setup lang="ts">
    import sportsData from "~/data/sportsData.json"
    let sports = ref(sportsData);

    let routePath = useRoute().path.slice(1, );

    const links = [
        { name: 'Home', url: 'football'},
        { name: 'About', url: 'about' },
        { name: 'Contact', url: 'contact' },
        
    ]
    const sportLinks = [
        { name: 'Football', url: 'football' },
        { name: 'Handball', url: 'handball' },
        { name: 'Volleyball', url: 'volleyball' },
        { name: 'Tennis', url: 'tennis' },
        { name: 'Basketball', url: 'basketball' },
        { name: 'Ice Hockey', url: 'hockey' },
    ]
    const tabs = ref([sports]);
    
    function whichSport() {
        for (let sport of sports.value) {
            if (sport.slug === routePath) {
                return sport;                
            } 
        }
    }
    const currentSport = whichSport(); 

    
</script>

<template>
    <div class="bg-info-content uppercase text-center mb-2">
        
        <div class="grid grid-cols-6 p-2">
            <p class="text-2xl py-1 text-start col-span-5 ">The Sports Site</p>
            <div class="drawer drawer-end place-items-center border rounded-xl col-span-1 col-start-6">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <!-- Page content here -->
                    <label for="my-drawer"><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></label>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 min-h-full text-base-content bg-info-content">
                         <!-- Sidebar content here -->
                        <li class="menu-title border-b mb-2 font-bold text-lg">Menu</li> 
                        <li v-for="link in links">
                            <NuxtLink
                                :to="`${link.url}/`"
                            >{{ link.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="tabs tabs-bordered overflow-x-scroll flex-nowrap pb-3" aria-label="tabs">
                <NuxtLink
                v-for="(sport, index) in sports"
                ref="tabs"
                :to="`/${sport.slug}`"
                :id="sport.id"
                :key="index"
                :class="['h-fit', 'tab', 'tab-bordered', 'font-semibold', 'uppercase', {tabActive: useRoute().path.slice(1, ) === sport.slug}]"
                >{{ sport.name }}</NuxtLink>
            </div>
    </div>
    
    <slot>

    </slot>
    
    
    <!-- <div class="grid grid-cols-4 fixed bottom-0 w-full h-16 place-items-center bg-info-content">
        <p class="col-span-1">Lukas <br> Lilholt</p>
        <NuxtLink
        v-for="link in links"
        :to="link.url"
        class=""
        >{{ link.name }}</NuxtLink>
    </div> -->
</template>