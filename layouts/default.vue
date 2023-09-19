<script setup lang="ts">
    import { sports } from '@/components/content/Sports.mjs';
    const links = [
        { name: 'Home', url: '/', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
        { name: 'About', url: '/info/about', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
        { name: 'Contact', url: '/info/contact', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
    ]
    const tabs = ref([])

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
    const clicked = (event: Event) => {
        deActivate()
        for (let sport of sports) {
            if (event.target.id.toString() === sport.id.toString()) {
                sport.active = true;
                event.target.classList.add("btn-outline");
            }
        }
    }
    function currSport() {
        for (let sport of sports) {
            if (sport.active) {
                return sport
            }
        }
    }
    const currentSport = currSport();
    
    
    
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
                            <li v-for="link in links">
                                <NuxtLink
                                    :to="'#'"
                                    class=""
                                >{{ link.name }}</NuxtLink>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="navbar border-t inline-flex space-x-2 overflow-x-auto md:space-x-8" aria-label="Tabs">
                <button
                v-for="(sport, index) in sports"
                @click.prevent="clicked"
                :id="sport.id.toString()"
                ref="tabs"
                :key="index"
                class="h-fit btn btn-sm font-semibold uppercase"
                :class="{ 'btn-outline': sport.active }"
                >{{ sport.name }}</button>
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