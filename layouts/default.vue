<script setup lang="ts">
    

    const links = [
        { name: 'Home', url: '/football'},
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
        
    ]
    
    
    

    
</script>

<template>
    <div class="bg-info-content uppercase text-center pt-1">
        
        <div class="grid grid-cols-6 p-2">
            <p class="text-2xl py-1 text-start col-span-5 ">The Sports Site</p>
            <div class="drawer drawer-end place-items-center rounded-xl col-span-1 col-start-6 z-50">
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
