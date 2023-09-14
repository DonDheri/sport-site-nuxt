
export const sports = [
    {
        id: 0,
        active: true,
        title: "Basket Ball",
        category: "basketball"
    },
    {
        id: 1,
        active: false,
        title: "Hockey",
        category: "hockey",
    },
    {
        id: 2,
        active: false,
        title: "Tennis",
        category: "tennis",
    },
    {
        id: 3,
        active: false,
        title: "Foot Ball",
        category: "soccer"
    },
]
export const currentSport = () => {
    for (let sport of sports) {
        return sport.active? sport: ""
    }
}
