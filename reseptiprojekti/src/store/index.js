import { createStore } from 'vuex';

export default createStore( {
    state: {
        reseptit: [
            {
                id: 1,
                nimi: "Alpakka",
                teksti: "Paista ja nauti"
            },
            {
                id: 2,
                nimi: "Paahtoleipä",
                teksti: "Paahda ja syö"
            },
            {
                id: 3,
                nimi: "Roiskeläppä",
                teksti: "Mikroon ja polta suu"
            },
            {
                id: 4,
                nimi: "Tonnikalapurkki",
                teksti: "Avaa ja maiskis"
            },
            {
                id: 5,
                nimi: "Omena",
                teksti: "Siis vaan syö"
            }
        ]
    },
    //Functions that affect the state
    mutations: {},
    //Functions called elsewhere that call mutations
    actions: {},
    getters: {}
});