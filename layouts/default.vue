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
                    if (tab.classList.contains("tab-active")) {
                        tab.classList.remove("tab-active")
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
                event.target.classList.add("tab-active");
            }
        }
    }
    
    
</script>

<template>
    <div class="text-lime-500 uppercase text-center">
        
        <div class="bg-gray-950">
            <p class="text-2xl py-1 border-b-2 border-lime-500">The Sports Site</p>
            <div class="navbar inline-flex space-x-2 overflow-x-auto" aria-label="Tabs">
                <button
                    v-for="sport, index in sports"
                    @click.prevent="clicked"
                    :id="sport.id.toString()"
                    ref="tabs"
                    :key="index"
                    class="h-fit btn btn-sm tab-lifted text-lime-500 font-semibold uppercase"
                    :class="{ tabActive: sport.active === true }"
                >{{ sport.title }}</button>
            </div>
        </div>
    </div>

    <slot>

    </slot>


    <div class="flex flex-row sticky bg-gray-950 bottom-0 w-full h-16">
        <p class="mt-2 mx-6 justify-self-start">Lukas <br> Lilholt</p>
        <div class="mx-10 place-items-center flex gap-x-8 text-base text-white text-[20px]">
            <NuxtLink
                v-for="link in links"
                :to="link.url"
                class="justify-self-end"
                >{{ link.name }}</NuxtLink>
        </div>
    </div>
</template>