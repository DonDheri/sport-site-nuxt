<script setup>
    import { sports } from '@/components/content/Sports.mjs';
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
    const tabs = ref([]);
    function deActivate() {
        for (let sport of sports) {
            if (sport.active === true) {
                sport.active = false;
                for (let tab of tabs.value) {
                    if (tab.classList.contains("btn-outline")) {
                        tab.classList.remove("btn-outline")
                    }
                }
            }
        }
    }
    const clicked = (event) => {
        deActivate()
        for (let sport of sports) {
            if (event.target.id.toString() === sport.id.toString()) {
                sport.active = true;
                event.target.classList.add("btn-outline");
            }
        }
    }
    
    function whichSport() {
        for (let sport of sports) {
            if (sport.active === true) {
                return sport;                
            } 
        }
    }
    const sportId = whichSport()?.id.toString();
    const sportSlug = whichSport()?.slug;
    
    
</script>

<template>
    <div class="bg-info-content uppercase text-center mb-2">
        
        <div class="grid grid-cols-6 p-2">
            <p class="text-2xl py-1 text-start col-span-5 ">The Sports Site</p>
            <div class="drawer drawer-end border rounded-xl col-span-1 col-start-6 place-items-center">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <!-- Page content here -->
                        <label for="my-drawer"><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></label>
                    </div> 
                    <div class="drawer-side">
                        <label for="my-drawer" class="drawer-overlay"></label>
                        <ul class="menu p-4 w-80 min-h-full text-base-content bg-info-content">
                            <!-- Sidebar content here -->
                            <li class="border-b mb-2 font-bold text-lg">
                                <p>Menu</p>
                            </li>
                            <li v-for="sportLink in sportLinks">
                                <NuxtLink
                                    :to="`${sportLink.url}/`"
                                >{{ sportLink.name }}</NuxtLink>
                            </li>
                            <div class="divider"></div>
                            <li v-for="link in links">
                                <NuxtLink
                                    :to="`${link.url}/`"
                                >{{ link.name }}</NuxtLink>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="navbar border-t inline-flex space-x-2 overflow-x-auto md:space-x-8" aria-label="tabs">
                <button
                v-for="(sport, index) in sports"
                @click="clicked"
                :id="sportId"
                ref="tabs"
                :key="index"
                class="h-fit btn btn-sm font-semibold uppercase"
                :class="{ btnOutline: sport.active }"
                >{{ sport.name }}</button>
            </div> -->
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