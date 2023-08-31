<script setup lang="ts">
    import { sports } from '@/components/content/Sports.mjs';
    let activePage = 0;
    const links = [
        { name: 'Home', url: '/', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
        { name: 'About', url: '/info/about', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
        { name: 'Contact', url: '/info/contact', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
    ]


</script>

<template>
    <div class="text-lime-500">
        <div class="navbar flex justify-center md:justify-start bg-black">
            <h2 class="text-4xl italic font-bold uppercase tracking-tight sm:text-3xl sm:h-[100px] md:h-[75px]">The Sport Site</h2>
        </div>
        <div class="bg-gray-950 navbar">
            <NuxtLink
            v-for="sport in sports"
            class="btn-ghost font-semibold p-1"
            >{{ sport.title }}</NuxtLink>
        </div>
    </div>

    <slot>

    </slot>


    <div class="flex flex-row absolute bottom-0 w-full h-16 bg-gradient-to-r from-cyan-600 to-blue-600">
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