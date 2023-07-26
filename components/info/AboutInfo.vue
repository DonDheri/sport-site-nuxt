<script lang="ts" setup>

    const { id } = useRoute().params;
    const requestId = id as string || '';
    const props = defineProps({
        name: String,
    })
</script>

<template>
    
    <div class="flex flex-col text-center w-full justify-content mt-10">
        <div class="border-2 mx-48  rounded-xl">
            <h1 class="text-3xl p-3 border-b-2">About Page - {{ props.name }}</h1>
            <p class="p-3">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.</p>
        </div>
    </div>

</template>