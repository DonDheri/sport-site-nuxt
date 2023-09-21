<script setup lang="ts">
    import {sports} from "./Sports.mjs"
    import VueDatePicker from "@vuepic/vue-datepicker";
    import '@vuepic/vue-datepicker/dist/main.css'
import { list } from "postcss";

    let arr = [
        {
            id: 1,
        },
        {
            id: 5,
        },
        {
            id: 10,
        }
    ]
    function whichSport() {
        for (let sport of sports) {
            if (sport.active === true) {
                return sport;                
            } 
        }
    }
    const sportId = whichSport()?.id.toString() || "";
    const sportSlug = whichSport()?.slug;

    const date = ref(new Date());
    const formatDate = (date: Date) => {
        let day = date.getDate().toString();
        let month = date.getMonth().toString();
        let year = date.getFullYear().toString();
        if (Number(day) < 10) {
            day = "0" + day;
        } else if (Number(month) < 10) {
            month = "0" + month
        }
        return `${year}-${month}-${day}`;
    }
    const formattedDate = formatDate(date.value);
    
    const { id } = useRoute().params;
    const requestId = id as String || "";
    const config = useRuntimeConfig();
    const { data: Games } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${sportId}/events/date/${formattedDate}`, {
        headers: {
            'X-RapidAPI-Key': (config.public.apiKey.toString()) || '',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        },
        
    }))
    // const { data: Leagues } = await useAsyncData(() => $fetch(`https://sportscore1.p.rapidapi.com/sports/${currentSport?.id}/leagues`, {
    //     headers: {
    //         'X-RapidAPI-Key': (config.public.apiKey as string) || '',
    //         'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //     },
    //     params: {
    //     },
    // }))
    const games = <any>computed(() => {
        return games.value;
    })

    // const games = 
    //     [
    //         {
    //         "id": 1,
    //         "slug": "2020-02-15-southampton-burnley",
    //         "name": "Ballyclare Comrades – Queens University",
    //         "status": "finished",
    //         "status_more": "walkover",
    //         "time_details": [
    //             {
    //             "prefix": "ET-",
    //             "initial": "840"
    //             }
    //         ],
    //         "home_team": [
    //             {
    //             "id": 1,
    //             "slug": "southampton",
    //             "name": "Southampton",
    //             "name_translations": [
    //                 {
    //                 "en": "Southampton"
    //                 }
    //             ],
    //             "name_short": "Southampton",
    //             "name_full": "Southampton",
    //             "name_code": "SOU",
    //             "has_sub": true,
    //             "has_logo": true,
    //             "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //             "gender": "M",
    //             "is_nationality": true,
    //             "country_code": "ENG",
    //             "country": "England",
    //             "flag": "england",
    //             "foundation": "1983-07-08 06:00:00",
    //             "details": [
    //                 {
    //                 "country": "Portugal"
    //                 }
    //             ],
    //             "sport": [
    //                 {
    //                 "id": 1,
    //                 "slug": "football",
    //                 "name": "Football",
    //                 "name_translations": [
    //                     {
    //                     "en": "Football"
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "section": [
    //                 {
    //                 "id": 1,
    //                 "slug": "argentina",
    //                 "name": "Argentina",
    //                 "name_translations": {},
    //                 "priority": "0",
    //                 "flag": "armenia",
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "venue": [
    //                 {
    //                 "id": 1,
    //                 "slug": "southampton-st-marys-stadium",
    //                 "city": "Southampton",
    //                 "stadium": "St. Mary's Stadium",
    //                 "stadium_capacity": "32500",
    //                 "country_name": "England",
    //                 "country_flag": "england"
    //                 }
    //             ],
    //             "manager": [
    //                 {
    //                 "id": 2,
    //                 "slug": "sean-dyche",
    //                 "name": "Sean Dyche",
    //                 "name_translations": [
    //                     {
    //                     "en": "Sean Dyche"
    //                     }
    //                 ],
    //                 "name_short": "S. Dyche",
    //                 "has_photo": true,
    //                 "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                 "date_birth": "1971-06-28",
    //                 "nationality_code": "ENG",
    //                 "performance": {},
    //                 "preferred_formation": "4-4-2",
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "team": []
    //                 }
    //             ],
    //             "tennis_ranking": [
    //                 {
    //                 "id": 1,
    //                 "type": "ATP",
    //                 "points": "1315",
    //                 "ranking": "34",
    //                 "official_updated_at": "2020-05-18",
    //                 "team": []
    //                 }
    //             ]
    //             }
    //         ],
    //         "away_team": [
    //             {
    //             "id": 1,
    //             "slug": "southampton",
    //             "name": "Southampton",
    //             "name_translations": [
    //                 {
    //                 "en": "Southampton"
    //                 }
    //             ],
    //             "name_short": "Southampton",
    //             "name_full": "Southampton",
    //             "name_code": "SOU",
    //             "has_sub": true,
    //             "has_logo": true,
    //             "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //             "gender": "M",
    //             "is_nationality": true,
    //             "country_code": "ENG",
    //             "country": "England",
    //             "flag": "england",
    //             "foundation": "1983-07-08 06:00:00",
    //             "details": [
    //                 {
    //                 "country": "Portugal"
    //                 }
    //             ],
    //             "sport": [
    //                 {
    //                 "id": 1,
    //                 "slug": "football",
    //                 "name": "Football",
    //                 "name_translations": [
    //                     {
    //                     "en": "Football"
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "section": [
    //                 {
    //                 "id": 1,
    //                 "slug": "argentina",
    //                 "name": "Argentina",
    //                 "name_translations": {},
    //                 "priority": "0",
    //                 "flag": "armenia",
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "venue": [
    //                 {
    //                 "id": 1,
    //                 "slug": "southampton-st-marys-stadium",
    //                 "city": "Southampton",
    //                 "stadium": "St. Mary's Stadium",
    //                 "stadium_capacity": "32500",
    //                 "country_name": "England",
    //                 "country_flag": "england"
    //                 }
    //             ],
    //             "manager": [
    //                 {
    //                 "id": 2,
    //                 "slug": "sean-dyche",
    //                 "name": "Sean Dyche",
    //                 "name_translations": [
    //                     {
    //                     "en": "Sean Dyche"
    //                     }
    //                 ],
    //                 "name_short": "S. Dyche",
    //                 "has_photo": true,
    //                 "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                 "date_birth": "1971-06-28",
    //                 "nationality_code": "ENG",
    //                 "performance": {},
    //                 "preferred_formation": "4-4-2",
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "team": []
    //                 }
    //             ],
    //             "tennis_ranking": [
    //                 {
    //                 "id": 1,
    //                 "type": "ATP",
    //                 "points": "1315",
    //                 "ranking": "34",
    //                 "official_updated_at": "2020-05-18",
    //                 "team": []
    //                 }
    //             ]
    //             }
    //         ],
    //         "start_at": "2020-07-08 06:55:00",
    //         "priority": "1",
    //         "home_score": [
    //             {
    //             "current": "2",
    //             "display": "2"
    //             }
    //         ],
    //         "away_score": [
    //             {
    //             "current": "1",
    //             "display": "1"
    //             }
    //         ],
    //         "winner_code": "1",
    //         "aggregated_winner_code": "1",
    //         "result_only": "false",
    //         "coverage": "1",
    //         "ground_type": "Hardcourt indoor",
    //         "round_info": [
    //             {
    //             "round": "28",
    //             "name": "Semifinals"
    //             }
    //         ],
    //         "round_number": "28",
    //         "main_odds": [
    //             {
    //             "outcome_1": {},
    //             "outcome_X": {},
    //             "outcome_2": {}
    //             }
    //         ],
    //         "series_count": "3",
    //         "medias_count": "2",
    //         "status_lineup": "2",
    //         "first_supply": "2",
    //         "cards_code": "20",
    //         "main_stat": [
    //             {
    //             "ball_possession": {}
    //             }
    //         ],
    //         "event_data_change": [
    //             {
    //             "change_timestamp": "1595450306"
    //             }
    //         ],
    //         "periods": [
    //             {
    //             "current": "Score"
    //             }
    //         ],
    //         "periods_time": [
    //             {
    //             "period_4_time": "677"
    //             }
    //         ],
    //         "lasted_period": "period_4",
    //         "default_period_count": "4",
    //         "attendance": "4",
    //         "cup_match_order": "6",
    //         "cup_match_in_round": "7",
    //         "sport": [
    //             {
    //             "id": 1,
    //             "slug": "football",
    //             "name": "Football",
    //             "name_translations": [
    //                 {
    //                 "en": "Football"
    //                 }
    //             ]
    //             }
    //         ],
    //         "section": [
    //             {
    //             "id": 1,
    //             "slug": "argentina",
    //             "name": "Argentina",
    //             "name_translations": {},
    //             "priority": "0",
    //             "flag": "armenia",
    //             "sport": [
    //                 {
    //                 "id": 1,
    //                 "slug": "football",
    //                 "name": "Football",
    //                 "name_translations": [
    //                     {
    //                     "en": "Football"
    //                     }
    //                 ]
    //                 }
    //             ]
    //             }
    //         ],
    //         "season": [
    //             {
    //             "id": 1,
    //             "slug": "2019-2020",
    //             "name": "Premier League 19/20",
    //             "year_start": "2019",
    //             "year_end": "2020",
    //             "league": [
    //                 {
    //                 "id": 1,
    //                 "slug": "northern-ireland-premiership",
    //                 "name": "Premiership",
    //                 "name_translations": [
    //                     {
    //                     "en": "Premiership"
    //                     }
    //                 ],
    //                 "has_logo": true,
    //                 "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                 "start_date": "2019-08-09 18:45:00",
    //                 "end_date": "2020-06-01 00:00:00",
    //                 "priority": "0",
    //                 "host": [
    //                     {
    //                     "country": "Netherlands",
    //                     "flag": "netherlands"
    //                     }
    //                 ],
    //                 "tennis_points": "0",
    //                 "facts": [
    //                     {
    //                     "name": "Average goals"
    //                     }
    //                 ],
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "section": [
    //                     {
    //                     "id": 1,
    //                     "slug": "argentina",
    //                     "name": "Argentina",
    //                     "name_translations": {},
    //                     "priority": "0",
    //                     "flag": "armenia",
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "title_holder_team": [
    //                     {
    //                     "id": 1,
    //                     "slug": "southampton",
    //                     "name": "Southampton",
    //                     "name_translations": [
    //                         {
    //                         "en": "Southampton"
    //                         }
    //                     ],
    //                     "name_short": "Southampton",
    //                     "name_full": "Southampton",
    //                     "name_code": "SOU",
    //                     "has_sub": true,
    //                     "has_logo": true,
    //                     "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                     "gender": "M",
    //                     "is_nationality": true,
    //                     "country_code": "ENG",
    //                     "country": "England",
    //                     "flag": "england",
    //                     "foundation": "1983-07-08 06:00:00",
    //                     "details": [
    //                         {
    //                         "country": "Portugal"
    //                         }
    //                     ],
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "section": [
    //                         {
    //                         "id": 1,
    //                         "slug": "argentina",
    //                         "name": "Argentina",
    //                         "name_translations": {},
    //                         "priority": "0",
    //                         "flag": "armenia",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "venue": [
    //                         {
    //                         "id": 1,
    //                         "slug": "southampton-st-marys-stadium",
    //                         "city": "Southampton",
    //                         "stadium": "St. Mary's Stadium",
    //                         "stadium_capacity": "32500",
    //                         "country_name": "England",
    //                         "country_flag": "england"
    //                         }
    //                     ],
    //                     "manager": [
    //                         {
    //                         "id": 2,
    //                         "slug": "sean-dyche",
    //                         "name": "Sean Dyche",
    //                         "name_translations": [
    //                             {
    //                             "en": "Sean Dyche"
    //                             }
    //                         ],
    //                         "name_short": "S. Dyche",
    //                         "has_photo": true,
    //                         "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                         "date_birth": "1971-06-28",
    //                         "nationality_code": "ENG",
    //                         "performance": {},
    //                         "preferred_formation": "4-4-2",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ],
    //                         "team": []
    //                         }
    //                     ],
    //                     "tennis_ranking": [
    //                         {
    //                         "id": 1,
    //                         "type": "ATP",
    //                         "points": "1315",
    //                         "ranking": "34",
    //                         "official_updated_at": "2020-05-18",
    //                         "team": []
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "most_titles_team": [
    //                     {
    //                     "id": 1,
    //                     "slug": "southampton",
    //                     "name": "Southampton",
    //                     "name_translations": [
    //                         {
    //                         "en": "Southampton"
    //                         }
    //                     ],
    //                     "name_short": "Southampton",
    //                     "name_full": "Southampton",
    //                     "name_code": "SOU",
    //                     "has_sub": true,
    //                     "has_logo": true,
    //                     "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                     "gender": "M",
    //                     "is_nationality": true,
    //                     "country_code": "ENG",
    //                     "country": "England",
    //                     "flag": "england",
    //                     "foundation": "1983-07-08 06:00:00",
    //                     "details": [
    //                         {
    //                         "country": "Portugal"
    //                         }
    //                     ],
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "section": [
    //                         {
    //                         "id": 1,
    //                         "slug": "argentina",
    //                         "name": "Argentina",
    //                         "name_translations": {},
    //                         "priority": "0",
    //                         "flag": "armenia",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "venue": [
    //                         {
    //                         "id": 1,
    //                         "slug": "southampton-st-marys-stadium",
    //                         "city": "Southampton",
    //                         "stadium": "St. Mary's Stadium",
    //                         "stadium_capacity": "32500",
    //                         "country_name": "England",
    //                         "country_flag": "england"
    //                         }
    //                     ],
    //                     "manager": [
    //                         {
    //                         "id": 2,
    //                         "slug": "sean-dyche",
    //                         "name": "Sean Dyche",
    //                         "name_translations": [
    //                             {
    //                             "en": "Sean Dyche"
    //                             }
    //                         ],
    //                         "name_short": "S. Dyche",
    //                         "has_photo": true,
    //                         "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                         "date_birth": "1971-06-28",
    //                         "nationality_code": "ENG",
    //                         "performance": {},
    //                         "preferred_formation": "4-4-2",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ],
    //                         "team": []
    //                         }
    //                     ],
    //                     "tennis_ranking": [
    //                         {
    //                         "id": 1,
    //                         "type": "ATP",
    //                         "points": "1315",
    //                         "ranking": "34",
    //                         "official_updated_at": "2020-05-18",
    //                         "team": []
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "most_titles_team_count": 0
    //                 }
    //             ]
    //             }
    //         ],
    //         "league": [
    //             {
    //             "id": 1,
    //             "slug": "northern-ireland-premiership",
    //             "name": "Premiership",
    //             "name_translations": [
    //                 {
    //                 "en": "Premiership"
    //                 }
    //             ],
    //             "has_logo": true,
    //             "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //             "start_date": "2019-08-09 18:45:00",
    //             "end_date": "2020-06-01 00:00:00",
    //             "priority": "0",
    //             "host": [
    //                 {
    //                 "country": "Netherlands",
    //                 "flag": "netherlands"
    //                 }
    //             ],
    //             "tennis_points": "0",
    //             "facts": [
    //                 {
    //                 "name": "Average goals"
    //                 }
    //             ],
    //             "sport": [
    //                 {
    //                 "id": 1,
    //                 "slug": "football",
    //                 "name": "Football",
    //                 "name_translations": [
    //                     {
    //                     "en": "Football"
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "section": [
    //                 {
    //                 "id": 1,
    //                 "slug": "argentina",
    //                 "name": "Argentina",
    //                 "name_translations": {},
    //                 "priority": "0",
    //                 "flag": "armenia",
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "title_holder_team": [
    //                 {
    //                 "id": 1,
    //                 "slug": "southampton",
    //                 "name": "Southampton",
    //                 "name_translations": [
    //                     {
    //                     "en": "Southampton"
    //                     }
    //                 ],
    //                 "name_short": "Southampton",
    //                 "name_full": "Southampton",
    //                 "name_code": "SOU",
    //                 "has_sub": true,
    //                 "has_logo": true,
    //                 "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                 "gender": "M",
    //                 "is_nationality": true,
    //                 "country_code": "ENG",
    //                 "country": "England",
    //                 "flag": "england",
    //                 "foundation": "1983-07-08 06:00:00",
    //                 "details": [
    //                     {
    //                     "country": "Portugal"
    //                     }
    //                 ],
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "section": [
    //                     {
    //                     "id": 1,
    //                     "slug": "argentina",
    //                     "name": "Argentina",
    //                     "name_translations": {},
    //                     "priority": "0",
    //                     "flag": "armenia",
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "venue": [
    //                     {
    //                     "id": 1,
    //                     "slug": "southampton-st-marys-stadium",
    //                     "city": "Southampton",
    //                     "stadium": "St. Mary's Stadium",
    //                     "stadium_capacity": "32500",
    //                     "country_name": "England",
    //                     "country_flag": "england"
    //                     }
    //                 ],
    //                 "manager": [
    //                     {
    //                     "id": 2,
    //                     "slug": "sean-dyche",
    //                     "name": "Sean Dyche",
    //                     "name_translations": [
    //                         {
    //                         "en": "Sean Dyche"
    //                         }
    //                     ],
    //                     "name_short": "S. Dyche",
    //                     "has_photo": true,
    //                     "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                     "date_birth": "1971-06-28",
    //                     "nationality_code": "ENG",
    //                     "performance": {},
    //                     "preferred_formation": "4-4-2",
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "team": []
    //                     }
    //                 ],
    //                 "tennis_ranking": [
    //                     {
    //                     "id": 1,
    //                     "type": "ATP",
    //                     "points": "1315",
    //                     "ranking": "34",
    //                     "official_updated_at": "2020-05-18",
    //                     "team": []
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "most_titles_team": [
    //                 {
    //                 "id": 1,
    //                 "slug": "southampton",
    //                 "name": "Southampton",
    //                 "name_translations": [
    //                     {
    //                     "en": "Southampton"
    //                     }
    //                 ],
    //                 "name_short": "Southampton",
    //                 "name_full": "Southampton",
    //                 "name_code": "SOU",
    //                 "has_sub": true,
    //                 "has_logo": true,
    //                 "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                 "gender": "M",
    //                 "is_nationality": true,
    //                 "country_code": "ENG",
    //                 "country": "England",
    //                 "flag": "england",
    //                 "foundation": "1983-07-08 06:00:00",
    //                 "details": [
    //                     {
    //                     "country": "Portugal"
    //                     }
    //                 ],
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "section": [
    //                     {
    //                     "id": 1,
    //                     "slug": "argentina",
    //                     "name": "Argentina",
    //                     "name_translations": {},
    //                     "priority": "0",
    //                     "flag": "armenia",
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "venue": [
    //                     {
    //                     "id": 1,
    //                     "slug": "southampton-st-marys-stadium",
    //                     "city": "Southampton",
    //                     "stadium": "St. Mary's Stadium",
    //                     "stadium_capacity": "32500",
    //                     "country_name": "England",
    //                     "country_flag": "england"
    //                     }
    //                 ],
    //                 "manager": [
    //                     {
    //                     "id": 2,
    //                     "slug": "sean-dyche",
    //                     "name": "Sean Dyche",
    //                     "name_translations": [
    //                         {
    //                         "en": "Sean Dyche"
    //                         }
    //                     ],
    //                     "name_short": "S. Dyche",
    //                     "has_photo": true,
    //                     "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                     "date_birth": "1971-06-28",
    //                     "nationality_code": "ENG",
    //                     "performance": {},
    //                     "preferred_formation": "4-4-2",
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "team": []
    //                     }
    //                 ],
    //                 "tennis_ranking": [
    //                     {
    //                     "id": 1,
    //                     "type": "ATP",
    //                     "points": "1315",
    //                     "ranking": "34",
    //                     "official_updated_at": "2020-05-18",
    //                     "team": []
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "most_titles_team_count": 0
    //             }
    //         ],
    //         "challenge": [
    //             {
    //             "id": 1,
    //             "slug": "premiership",
    //             "name": "Premiership",
    //             "name_translations": [
    //                 {
    //                 "en": "Premiership"
    //                 }
    //             ],
    //             "priority": "0",
    //             "order": "23",
    //             "sport": [
    //                 {
    //                 "id": 1,
    //                 "slug": "football",
    //                 "name": "Football",
    //                 "name_translations": [
    //                     {
    //                     "en": "Football"
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "section": [
    //                 {
    //                 "id": 1,
    //                 "slug": "argentina",
    //                 "name": "Argentina",
    //                 "name_translations": {},
    //                 "priority": "0",
    //                 "flag": "armenia",
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ]
    //                 }
    //             ],
    //             "league": [
    //                 {
    //                 "id": 1,
    //                 "slug": "northern-ireland-premiership",
    //                 "name": "Premiership",
    //                 "name_translations": [
    //                     {
    //                     "en": "Premiership"
    //                     }
    //                 ],
    //                 "has_logo": true,
    //                 "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                 "start_date": "2019-08-09 18:45:00",
    //                 "end_date": "2020-06-01 00:00:00",
    //                 "priority": "0",
    //                 "host": [
    //                     {
    //                     "country": "Netherlands",
    //                     "flag": "netherlands"
    //                     }
    //                 ],
    //                 "tennis_points": "0",
    //                 "facts": [
    //                     {
    //                     "name": "Average goals"
    //                     }
    //                 ],
    //                 "sport": [
    //                     {
    //                     "id": 1,
    //                     "slug": "football",
    //                     "name": "Football",
    //                     "name_translations": [
    //                         {
    //                         "en": "Football"
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "section": [
    //                     {
    //                     "id": 1,
    //                     "slug": "argentina",
    //                     "name": "Argentina",
    //                     "name_translations": {},
    //                     "priority": "0",
    //                     "flag": "armenia",
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "title_holder_team": [
    //                     {
    //                     "id": 1,
    //                     "slug": "southampton",
    //                     "name": "Southampton",
    //                     "name_translations": [
    //                         {
    //                         "en": "Southampton"
    //                         }
    //                     ],
    //                     "name_short": "Southampton",
    //                     "name_full": "Southampton",
    //                     "name_code": "SOU",
    //                     "has_sub": true,
    //                     "has_logo": true,
    //                     "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                     "gender": "M",
    //                     "is_nationality": true,
    //                     "country_code": "ENG",
    //                     "country": "England",
    //                     "flag": "england",
    //                     "foundation": "1983-07-08 06:00:00",
    //                     "details": [
    //                         {
    //                         "country": "Portugal"
    //                         }
    //                     ],
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "section": [
    //                         {
    //                         "id": 1,
    //                         "slug": "argentina",
    //                         "name": "Argentina",
    //                         "name_translations": {},
    //                         "priority": "0",
    //                         "flag": "armenia",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "venue": [
    //                         {
    //                         "id": 1,
    //                         "slug": "southampton-st-marys-stadium",
    //                         "city": "Southampton",
    //                         "stadium": "St. Mary's Stadium",
    //                         "stadium_capacity": "32500",
    //                         "country_name": "England",
    //                         "country_flag": "england"
    //                         }
    //                     ],
    //                     "manager": [
    //                         {
    //                         "id": 2,
    //                         "slug": "sean-dyche",
    //                         "name": "Sean Dyche",
    //                         "name_translations": [
    //                             {
    //                             "en": "Sean Dyche"
    //                             }
    //                         ],
    //                         "name_short": "S. Dyche",
    //                         "has_photo": true,
    //                         "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                         "date_birth": "1971-06-28",
    //                         "nationality_code": "ENG",
    //                         "performance": {},
    //                         "preferred_formation": "4-4-2",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ],
    //                         "team": []
    //                         }
    //                     ],
    //                     "tennis_ranking": [
    //                         {
    //                         "id": 1,
    //                         "type": "ATP",
    //                         "points": "1315",
    //                         "ranking": "34",
    //                         "official_updated_at": "2020-05-18",
    //                         "team": []
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "most_titles_team": [
    //                     {
    //                     "id": 1,
    //                     "slug": "southampton",
    //                     "name": "Southampton",
    //                     "name_translations": [
    //                         {
    //                         "en": "Southampton"
    //                         }
    //                     ],
    //                     "name_short": "Southampton",
    //                     "name_full": "Southampton",
    //                     "name_code": "SOU",
    //                     "has_sub": true,
    //                     "has_logo": true,
    //                     "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
    //                     "gender": "M",
    //                     "is_nationality": true,
    //                     "country_code": "ENG",
    //                     "country": "England",
    //                     "flag": "england",
    //                     "foundation": "1983-07-08 06:00:00",
    //                     "details": [
    //                         {
    //                         "country": "Portugal"
    //                         }
    //                     ],
    //                     "sport": [
    //                         {
    //                         "id": 1,
    //                         "slug": "football",
    //                         "name": "Football",
    //                         "name_translations": [
    //                             {
    //                             "en": "Football"
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "section": [
    //                         {
    //                         "id": 1,
    //                         "slug": "argentina",
    //                         "name": "Argentina",
    //                         "name_translations": {},
    //                         "priority": "0",
    //                         "flag": "armenia",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ]
    //                         }
    //                     ],
    //                     "venue": [
    //                         {
    //                         "id": 1,
    //                         "slug": "southampton-st-marys-stadium",
    //                         "city": "Southampton",
    //                         "stadium": "St. Mary's Stadium",
    //                         "stadium_capacity": "32500",
    //                         "country_name": "England",
    //                         "country_flag": "england"
    //                         }
    //                     ],
    //                     "manager": [
    //                         {
    //                         "id": 2,
    //                         "slug": "sean-dyche",
    //                         "name": "Sean Dyche",
    //                         "name_translations": [
    //                             {
    //                             "en": "Sean Dyche"
    //                             }
    //                         ],
    //                         "name_short": "S. Dyche",
    //                         "has_photo": true,
    //                         "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //                         "date_birth": "1971-06-28",
    //                         "nationality_code": "ENG",
    //                         "performance": {},
    //                         "preferred_formation": "4-4-2",
    //                         "sport": [
    //                             {
    //                             "id": 1,
    //                             "slug": "football",
    //                             "name": "Football",
    //                             "name_translations": [
    //                                 {
    //                                 "en": "Football"
    //                                 }
    //                             ]
    //                             }
    //                         ],
    //                         "team": []
    //                         }
    //                     ],
    //                     "tennis_ranking": [
    //                         {
    //                         "id": 1,
    //                         "type": "ATP",
    //                         "points": "1315",
    //                         "ranking": "34",
    //                         "official_updated_at": "2020-05-18",
    //                         "team": []
    //                         }
    //                     ]
    //                     }
    //                 ],
    //                 "most_titles_team_count": 0
    //                 }
    //             ]
    //             }
    //         ],
    //         "venue": [
    //             {
    //             "id": 1,
    //             "slug": "southampton-st-marys-stadium",
    //             "city": "Southampton",
    //             "stadium": "St. Mary's Stadium",
    //             "stadium_capacity": "32500",
    //             "country_name": "England",
    //             "country_flag": "england"
    //             }
    //         ],
    //         "referee": [
    //             {
    //             "id": 2,
    //             "slug": "craig-hicks",
    //             "name": "Antonio Mateu",
    //             "name_translations": [
    //                 {
    //                 "en": "Antonio Mateu"
    //                 }
    //             ],
    //             "date_birth": "1977-03-12",
    //             "date_debut": "2008-09-13",
    //             "age": "43",
    //             "has_photo": true,
    //             "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
    //             "nationality_code": "ESP",
    //             "country": [
    //                 {
    //                 "name": "Spain",
    //                 "flag": "spain"
    //                 }
    //             ],
    //             "yellow_cards": "1346",
    //             "red_cards": "19",
    //             "yellow_red_cards": "40",
    //             "games": "256",
    //             "sport": [
    //                 {
    //                 "id": 1,
    //                 "slug": "football",
    //                 "name": "Football",
    //                 "name_translations": [
    //                     {
    //                     "en": "Football"
    //                     }
    //                 ]
    //                 }
    //             ]
    //             }
    //         ]
    //     }
    //     ]
    const leagues = [
        {
        "id": 1,
        "slug": "northern-ireland-premiership",
        "name": "Premiership",
        "name_translations": [
            {
            "en": "Premiership"
            }
        ],
        "has_logo": true,
        "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
        "start_date": "2019-08-09 18:45:00",
        "end_date": "2020-06-01 00:00:00",
        "priority": "0",
        "host": [
            {
            "country": "Netherlands",
            "flag": "netherlands"
            }
        ],
        "tennis_points": "0",
        "facts": [
            {
            "name": "Average goals"
            }
        ],
        "sport": [
            {
            "id": 1,
            "slug": "football",
            "name": "Football",
            "name_translations": [
                {
                "en": "Football"
                }
            ]
            }
        ],
        "section": [
            {
            "id": 1,
            "slug": "argentina",
            "name": "Argentina",
            "name_translations": {},
            "priority": "0",
            "flag": "armenia",
            "sport": [
                {
                "id": 1,
                "slug": "football",
                "name": "Football",
                "name_translations": [
                    {
                    "en": "Football"
                    }
                ]
                }
            ]
            }
        ],
        "title_holder_team": [
            {
            "id": 1,
            "slug": "southampton",
            "name": "Southampton",
            "name_translations": [
                {
                "en": "Southampton"
                }
            ],
            "name_short": "Southampton",
            "name_full": "Southampton",
            "name_code": "SOU",
            "has_sub": true,
            "has_logo": true,
            "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
            "gender": "M",
            "is_nationality": true,
            "country_code": "ENG",
            "country": "England",
            "flag": "england",
            "foundation": "1983-07-08 06:00:00",
            "details": [
                {
                "country": "Portugal"
                }
            ],
            "sport": [
                {
                "id": 1,
                "slug": "football",
                "name": "Football",
                "name_translations": [
                    {
                    "en": "Football"
                    }
                ]
                }
            ],
            "section": [
                {
                "id": 1,
                "slug": "argentina",
                "name": "Argentina",
                "name_translations": {},
                "priority": "0",
                "flag": "armenia",
                "sport": [
                    {
                    "id": 1,
                    "slug": "football",
                    "name": "Football",
                    "name_translations": [
                        {
                        "en": "Football"
                        }
                    ]
                    }
                ]
                }
            ],
            "venue": [
                {
                "id": 1,
                "slug": "southampton-st-marys-stadium",
                "city": "Southampton",
                "stadium": "St. Mary's Stadium",
                "stadium_capacity": "32500",
                "country_name": "England",
                "country_flag": "england"
                }
            ],
            "manager": [
                {
                "id": 2,
                "slug": "sean-dyche",
                "name": "Sean Dyche",
                "name_translations": [
                    {
                    "en": "Sean Dyche"
                    }
                ],
                "name_short": "S. Dyche",
                "has_photo": true,
                "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
                "date_birth": "1971-06-28",
                "nationality_code": "ENG",
                "performance": {},
                "preferred_formation": "4-4-2",
                "sport": [
                    {
                    "id": 1,
                    "slug": "football",
                    "name": "Football",
                    "name_translations": [
                        {
                        "en": "Football"
                        }
                    ]
                    }
                ],
                "team": []
                }
            ],
            "tennis_ranking": [
                {
                "id": 1,
                "type": "ATP",
                "points": "1315",
                "ranking": "34",
                "official_updated_at": "2020-05-18",
                "team": []
                }
            ]
            }
        ],
        "most_titles_team": [
            {
            "id": 1,
            "slug": "southampton",
            "name": "Southampton",
            "name_translations": [
                {
                "en": "Southampton"
                }
            ],
            "name_short": "Southampton",
            "name_full": "Southampton",
            "name_code": "SOU",
            "has_sub": true,
            "has_logo": true,
            "logo": "https:\\/\\/sport-enter.loc\\/storage\\/no-loga-liga.png",
            "gender": "M",
            "is_nationality": true,
            "country_code": "ENG",
            "country": "England",
            "flag": "england",
            "foundation": "1983-07-08 06:00:00",
            "details": [
                {
                "country": "Portugal"
                }
            ],
            "sport": [
                {
                "id": 1,
                "slug": "football",
                "name": "Football",
                "name_translations": [
                    {
                    "en": "Football"
                    }
                ]
                }
            ],
            "section": [
                {
                "id": 1,
                "slug": "argentina",
                "name": "Argentina",
                "name_translations": {},
                "priority": "0",
                "flag": "armenia",
                "sport": [
                    {
                    "id": 1,
                    "slug": "football",
                    "name": "Football",
                    "name_translations": [
                        {
                        "en": "Football"
                        }
                    ]
                    }
                ]
                }
            ],
            "venue": [
                {
                "id": 1,
                "slug": "southampton-st-marys-stadium",
                "city": "Southampton",
                "stadium": "St. Mary's Stadium",
                "stadium_capacity": "32500",
                "country_name": "England",
                "country_flag": "england"
                }
            ],
            "manager": [
                {
                "id": 2,
                "slug": "sean-dyche",
                "name": "Sean Dyche",
                "name_translations": [
                    {
                    "en": "Sean Dyche"
                    }
                ],
                "name_short": "S. Dyche",
                "has_photo": true,
                "photo": "https:\\/\\/sport-enter.loc\\/storage\\/no-photo.png",
                "date_birth": "1971-06-28",
                "nationality_code": "ENG",
                "performance": {},
                "preferred_formation": "4-4-2",
                "sport": [
                    {
                    "id": 1,
                    "slug": "football",
                    "name": "Football",
                    "name_translations": [
                        {
                        "en": "Football"
                        }
                    ]
                    }
                ],
                "team": []
                }
            ],
            "tennis_ranking": [
                {
                "id": 1,
                "type": "ATP",
                "points": "1315",
                "ranking": "34",
                "official_updated_at": "2020-05-18",
                "team": []
                }
            ]
            }
        ],
        "most_titles_team_count": 0
        }
    ]
    const sortGames = (games: Array<Object>) => {
        let sortedGames = []
        return sortedGames = games.sort((a, b) => b.priority - a.priority)
    }
    const sortedGames = sortGames(games.value)
    console.log();
    
</script>

<template>
    <div id="div" class="">
        <div class="mx-3 inline-flex space-x-6 items-center" >
            <p class="uppercase font-semibold">Upcoming Matches</p>
            <p>-</p>
            <VueDatePicker v-model="date" :enable-time-picker="false" style="width: 150px;" :auto-apply="true" :format="formatDate(date)" dark/>
        </div>
        <div class="divider mt-0 mb-1"></div>
        <NuxtLink v-for="league in leagues" :to="`/${sportSlug}/league/${league.slug}`"  class="bg-info-content w-full inline-flex items-center">
            <div class="flex content-center bg-black h-[25px] w-[25px] rounded-full  mr-3"></div>
            <p> Europe / UEAFA Champions League</p>
        </NuxtLink>
        <NuxtLink :to="`/${sportSlug}/game/#`" class="grid grid-cols-12" v-for="game in sortedGames">
            <div class="col-span-2 flex flex-col">
                <p class="text-[15px]">Time</p>
                <p class="text-[12px] mt-1">Status</p>
            </div>
            <div class="col-span-8 text-[15px]">
                <p>Home Team</p>
                <p>Away Team</p>
            </div>
            <div class="col-span-2 flex flex-col text-xs">
                <p>Odds</p>
                <p>Odds</p>
                <p>Odds</p>
            </div>
            <div class="divider col-span-12 my-0"></div>
        </NuxtLink>
    </div>
</template>