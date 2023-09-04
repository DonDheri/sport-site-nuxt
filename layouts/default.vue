<script setup lang="ts">
    import { currentSport } from '@/components/content/Sports.mjs';
    let activePage = 0;
    const links = [
        { name: 'Home', url: '/', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
        { name: 'About', url: '/info/about', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
        { name: 'Contact', url: '/info/contact', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fugiat possimus, aut enim provident distinctio excepturi deleniti est iure incidunt maiores nostrum adipisci rem esse cumque minima eveniet eum quo? Mollitia veniam asperiores ab illo delectus ex iste corporis autem, deleniti similique? Ab ut delectus dolores repudiandae placeat reprehenderit repellendus doloremque similique impedit explicabo, adipisci, error laborum iure necessitatibus soluta, minima asperiores quas quibusdam! Nihil explicabo, ratione quisquam doloremque fugit unde ad reiciendis vitae ex esse quam quae sit iure autem consequatur deleniti accusantium ea cupiditate vel nostrum numquam ipsum maiores? Quaerat voluptatem architecto corrupti sit minus sed dicta, cupiditate saepe ipsa ducimus cum! Id dignissimos consequuntur corrupti ea laboriosam, consequatur aut qui sunt, nobis impedit non temporibus porro ipsam error est possimus quasi eveniet rerum, sint iusto inventore sed quod nisi! Reprehenderit distinctio enim dolore beatae doloremque nemo officia eius quis sapiente nam, fugit unde ab error consequuntur officiis soluta quas fuga nisi vel. Ipsum delectus vel eveniet molestiae veniam optio molestias tenetur quis? Vel odio nesciunt assumenda nobis laborum quia quam beatae at veritatis itaque tempora blanditiis nihil corporis fugit reprehenderit minus, aperiam totam aliquam. Eos natus, ex fugiat officia ipsam ipsum pariatur earum et ad explicabo? Expedita.", },
    ]
    const sports = [
    {
        id: 0,
        active: true,
        title: "Basket Ball",
        url:"basket-ball",
        leagues: [
            {
                id: 34,
                title:"Basketligaen",
                type:"League",
                country: {
                    id: 13,
                    title:"Denmark",
                    code:"DK",
                    flag:"https://media.api-football.com/flags/dk.svg"
                },
                seasons: [
                    {
                        season:"2019-2020",
                        start:"2019-09-22",
                        end:"2020-03-23"
                    }
                ]
            },
            {
                id: 12,
                title:"NBA",
                type:"League",
                country: {
                    id: 5,
                    title:"USA",
                    code:"US",
                    flag:"https://media-3.api-sports.io/flags/us.svg"
                },
                seasons: [
                    {season: '2019-2020', start: '2019-10-04', end: '2020-10-11'},

                    {season: '2018-2019', start: '2018-09-28', end: '2019-05-24'},
                    
                    {season: '2017-2018', start: '2017-10-01', end: '2018-06-09'},
                    
                    {season: '2016-2017', start: '2016-10-01', end: '2017-06-13'},

                    {season: '2015-2016', start: '2015-10-03', end: '2016-06-20'},

                    {season: '2020-2021', start: '2020-12-12', end: '2021-07-21'},

                    {season: '2021-2022', start: '2021-10-03', end: '2022-06-17'},

                    {season: '2022-2023', start: '2022-09-30', end: '2023-06-13'},

                    {season: '2014-2015', start: '2014-10-04', end: '2015-06-17'},

                    {season: '2013-2014', start: '2013-10-05', end: '2014-06-16'},

                    {season: '2012-2013', start: '2012-10-07', end: '2013-06-21'},

                    {season: '2011-2012', start: '2011-12-17', end: '2012-06-22'},

                    {season: '2010-2011', start: '2010-10-04', end: '2011-06-13'},

                    {season: '2009-2010', start: '2009-10-09', end: '2010-06-18'},

                    {season: '2008-2009', start: '2008-10-09', end: '2009-06-15'},
                ]
            },
        ],
    },
    {
        id: 1,
        active: false,
        title: "Hockey",
        url:"hockey",
        text: "NHL",
        },
        {
        id: 2,
        active: false,
        title: "Base Ball",
        url:"base-ball",
        text: "MLB",
        },
        {
        id: 3,
        active: false,
        title: "Foot Ball",
        url: "foot-ball",
        text: "NFL"  
    },
]


    const clicked = computed((event) => {
        return event.target
    })
    console.log(clicked);
    
</script>

<template>
    <div class="text-lime-500">
        <div class="navbar flex justify-center h-[150px] md:justify-start bg-black">
            <h2 class="text-4xl italic font-bold uppercase tracking-tight sm:text-3xl sm:h-[100px] md:h-[75px]">The Sports Site</h2>
        </div>
        <div class="bg-gray-950 grid grid-cols-4 text-center">
            <p class="col-span-4 text-xl border-b-2 border-lime-500">All Sports</p>
            <div class="tabs col-span-4">
                <button
                    v-for="sport in sports"
                    :key="sport.url.toString()"
                    class="tab tab-lg font-semibold p-1 first:tab-active"
                    @click="clicked.value.className = 'tab-active'"
                >{{ sport.title }}</button>
            </div >    
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