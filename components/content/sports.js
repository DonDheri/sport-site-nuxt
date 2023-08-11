
export const sports = [
    {
        id: 0,
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
        title: "Hockey",
        url:"hockey",
        text: "NHL",
        },
        {
        id: 2,
        title: "Base Ball",
        url:"base-ball",
        text: "MLB",
        },
        {
        id: 3,
        title: "Foot Ball",
        url: "foot-ball",
        text: "NFL"  
    },
]
