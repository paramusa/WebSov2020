import { createStore } from 'vuex';

export default createStore( {
    state: {
        reseptit_used_id: [1,2,3,4,5],
        reseptit: [
            {
                id: 1,
                nimi: "Alpakka",
                ohjeet: "Paista ja nauti"
            },
            {
                id: 2,
                nimi: "Paahtoleipä",
                ohjeet: "Paahda ja syö"
            },
            {
                id: 3,
                nimi: "Roiskeläppä",
                ohjeet: "Mikroon ja polta suu"
            },
            {
                id: 4,
                nimi: "Tonnikalapurkki",
                ohjeet: "Avaa ja maiskis"
            },
            {
                id: 5,
                nimi: "Omena",
                ohjeet: "Siis vaan syö"
            }
        ]
    },
    //Functions that affect the state
    mutations: {
        ADD_RECIPE(state, resepti) {

            let nextID = 1;
            let newRecipe = resepti;

            for (;; nextID++) {
                if (!state.reseptit_used_id.includes(nextID)){
                    break;
                }
            }

            newRecipe.id = nextID;

            state.reseptit.push(newRecipe);
        }
    },
    //Functions called elsewhere that call mutations
    actions: {
        async addRecipe({commit}, resepti) {
            commit('ADD_RECIPE', resepti);
        }
    },
    getters: {}
});