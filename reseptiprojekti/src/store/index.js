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

            //sets number as an available id
            for (;; nextID++) {
                if (!state.reseptit_used_id.includes(nextID)){
                    break;
                }
            }

            newRecipe.id = nextID;
            state.reseptit_used_id.push(nextID);
            state.reseptit.push(newRecipe);
        },
        DELETE_RECIPE(state, id) {
            //delete id from used ids
            let indexUsed = state.reseptit_used_id.indexOf(id);
            state.reseptit_used_id.splice(indexUsed, 1);

            let index = state.reseptit.findIndex(x => x.id = id);
            state.reseptit.splice(index, 1);

            //sort by id taitaa olla turha
            // state.reseptit.sort((a, b) => a.id - b.id);
        }
    },
    //Functions called elsewhere that call mutations
    actions: {
        async addRecipe({commit}, resepti) {
            commit('ADD_RECIPE', resepti);
        },
        deleteRecipe({commit}, id) {
            commit('DELETE_RECIPE', id)
        }
    },
    getters: {
        getRecipe: (state) => (id) => {
            return state.reseptit.find(x => x.id == id);
        }
    }
});