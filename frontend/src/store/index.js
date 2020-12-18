import { createStore } from 'vuex';
const db = require('../dbtools/dbTools');

//Create Vuex store
export default createStore( {
    //Holds the information of the store
    state: {
        reseptit_used_id: [],
        reseptit: []
    },
    //Functions that affect the state
    mutations: {
        /**
         * Adds given recipe to store.
         * @param {object} state - State of the store
         * @param {object} recipe - Recipe to be added
         */
        ADD_RECIPE(state, recipe) {
            state.reseptit_used_id.push(recipe.id);
            state.reseptit.push(recipe);
        },
        /**
         * Deletes recipe from store with the given ID.
         * @param {object} state - State of the store
         * @param {number} id - ID of the recipe to be deleted
         */
        DELETE_RECIPE(state, id) {
            //delete id from used ids
            let indexUsed = state.reseptit_used_id.indexOf(id);
            state.reseptit_used_id.splice(indexUsed, 1);

            //delete from reseptit
            let index = state.reseptit.findIndex(x => x.id == id);
            state.reseptit.splice(index, 1);
        },
        /**
         * Adds recipes retrieved from database to the store.
         * @param {object} state - State of the store
         * @param {array<object>} recipes - Array of recipes
         */
        REFRESH_ALL_RECIPES(state, recipes){
            state.reseptit = recipes;
        },
        /**
         * Replaces used IDs in the store with ones from the recipes from the database.
         * @param {object} state - State of the store
         * @param {array<Number>} usedID - Array of used IDs
         */
        REFRESH_USED_ID(state, usedID){
            state.reseptit_used_id = usedID;
        }
    },
    //Functions called elsewhere that call mutations
    actions: {
        /**
         * Adds an id to the recipe and passes it on to be added to the store and adds it to the database.
         * @param {object} recipe - Recipe to be added, missing id
         */
        async addRecipe({commit, getters}, recipe) {
            //get recipe with added id
            let nextID = getters.getUnusedID;
            let newRecipe = recipe;
            newRecipe.id = nextID;
            commit('ADD_RECIPE', newRecipe);
            await db.addRecipe(newRecipe);
        },
        /**
         * Deletes recipe from database and calls mutation that deletes it from store.
         * @param {number} id - ID of recipe to be deleted
         */
        async deleteRecipe({commit}, id) {
            await db.deleteRecipe(id);
            commit('DELETE_RECIPE', id);
        },
        /**
         * Refreshes the recipes in the store from the database as well as
         * adds used IDs to the store through mutations.
         * Called on launch of app.
         */
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
        /**
         * Getter for wanted recipe
         * @param {object} state - the state of the store
         * @param {number} id - ID of the recipe
         * @returns {object} recipe - Requested recipe
         */
        getRecipe: (state) => (id) => {
            return state.reseptit.find(x => x.id == id);
        },
        /**
         * Getter for the next unused ID. Returns first unused ID starting from 1.
         * @param {object} state - State of the store
         * @returns {number} nextID - the next ID
         */
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