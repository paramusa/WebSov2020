import { createStore } from 'vuex';
const db = require('../dbtools/dbTools');

export default createStore( {
    state: {
        reseptit_used_id: [1,2,3,4,5],
        reseptit: [
            {
                id: 1,
                name: "Alpakka",
                content: "Paista ja nauti"
            },
            {
                id: 2,
                name: "Paahtoleipä",
                content: "Paahda ja syö"
            },
            {
                id: 3,
                name: "Roiskeläppä",
                content: "Mikroon ja polta suu"
            },
            {
                id: 4,
                name: "Tonnikalapurkki",
                content: "Avaa ja maiskis"
            },
            {
                id: 5,
                name: "Omena",
                content: "Siis vaan syö"
            }
        ]
    },
    //Functions that affect the state
    mutations: {
        ADD_RECIPE(state, recipe) {
            state.reseptit_used_id.push(recipe.id);
            state.reseptit.push(recipe);
        },
        DELETE_RECIPE(state, id) {
            //delete id from used ids
            let indexUsed = state.reseptit_used_id.indexOf(id);
            state.reseptit_used_id.splice(indexUsed, 1);

            //delete from reseptit
            let index = state.reseptit.findIndex(x => x.id == id);
            state.reseptit.splice(index, 1);

            //sort by id taitaa olla turha
            // state.reseptit.sort((a, b) => a.id - b.id);
        },
        //funktio joka lisää haetut objektin/objektit storeen
        REFRESH_ALL_RECIPES(state, recipes){
            state.reseptit = recipes;
        },
        //funktio joka korvaa id arrayn usedid:ssä
        REFRESH_USED_ID(state, usedID){
            state.reseptit_used_id = usedID;
        }
    },
    //Functions called elsewhere that call mutations
    actions: {
        async addRecipe({commit, getters}, recipe) {
            //get recipe with added id
            let nextID = getters.getUnusedID;
            let newRecipe = recipe;
            newRecipe.id = nextID;
            commit('ADD_RECIPE', newRecipe);
            await db.addRecipe(newRecipe);
        },
        async deleteRecipe({commit}, id) {
            await db.deleteRecipe(id);
            commit('DELETE_RECIPE', id);
        },
        //funktio joka päivittää hakee tietokannan tiedot ja kutsuu mutaatiota
        async refreshAllRecipesFromDB({commit}) {
            const recipes = await db.getAllRecipes();
            let usedID = [];

            for (let i = 0; i < recipes.length; i++) {
                usedID.push(recipes[i].id);
            }

            commit('REFRESH_ALL_RECIPES', recipes);
            commit('REFRESH_USED_ID', usedID);
        }

    },
    getters: {
        getRecipe: (state) => (id) => {
            return state.reseptit.find(x => x.id == id);
        },
        getUnusedID: (state) => {
            let nextID = 1;

            //sets number as an available id
            for (;; nextID++) {
                if (!state.reseptit_used_id.includes(nextID)){
                    break;
                }
            }

            return nextID;
        }
    }
});