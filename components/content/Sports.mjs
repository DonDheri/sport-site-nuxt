
export const sports = [
    {
        id: 1,
        slug: "football",
        name: "Football",
        active: true,
        name_translations: {
            en:"Football",
            ru:"Футбол",
            de:"Fußball",
            es:"Fútbol",
            fr:"Football",
            zh:"足球",
            tr:"Futbol",
            el:"Ποδόσφαιρο",
            it:"Calcio",
            nl:"Voetbal",
            pt:"Futebol",
        }
    },
    {
        id: 2,
        slug: "tennis",
        name: "Tennis",
        active: false,
        name_translations: {
            en:"Tennis",
            ru:"Теннис",
            de:"Tennis",
            es:"Tenis",
            fr:"Tennis",
            zh:"网球",
            tr:"Tenis",
            el:"Τένις",
            it:"Tennis",
            nl:"Tennis",
            pt:"Tênis",
        }
    },
    {
        id: 3,
        slug: "basketball",
        name: "Basketball",
        active: false,
        name_translations: {
            en:"Basketball",
            ru:"Баскетбол",
            de:"Basketball",
            es:"Baloncesto",
            fr:"Basket",
            zh:"篮球",
            tr:"Basketbol",
            el:"Μπάσκετ",
            it:"Basket",
            nl:"Basketbal",
            pt:"Basquete",
        }
    },
    {
        id: 4,
        slug: "hockey",
        name: "Ice Hockey",
        active: false,
        name_translations: {
            en:"Ice Hockey",
            ru:"Хоккей",
            de:"Eishockey",
            es:"Hockey sobre Hielo",
            fr:"Hockey sur glace",
            zh:"冰球",
            tr:"Buz hokeyi",
            el:"Χόκεϊ επί πάγου",
            it:"Hockey su Ghiaccio",
            nl:"IJshockey",
            pt:"Hóquei no Gelo",
        }
    },
    {
        id: 5,
        slug: "volleyball",
        name: "Volleyball",
        active: false,
        name_translations: {
            en:"Volleyball",
            ru:"Волейбол",
            de:"Volleyball",
            es:"Voleibol",
            fr:"Volleyball",
            zh:"排球",
            tr:"Voleybol",
            el:"Βόλεϊ",
            it:"Pallavolo",
            nl:"Volleybal",
            pt:"Vôlei",
        }
    },
    {
        id: 6,
        slug: "handball",
        name: "Handball",
        active: false,
        name_translations: {
            en:"Handball",
            ru:"Гандбол",
            de:"Handball",
            es:"Balonmano",
            fr:"Handball",
            zh:"手球",
            tr:"Hentbol",
            el:"Χάντμπολ",
            it:"Pallamano",
            nl:"Handbal",
            pt:"Handebol",
        }
    },
]
export const currentSport = () => {
    for (let sport of sports) {
        return sport.active? sport: ""
    }
}
