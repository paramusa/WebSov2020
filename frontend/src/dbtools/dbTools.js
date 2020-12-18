const axios = require('axios');

//API-server. Heroku didn't allow me to use the same server for api as well as serving the site
const apiserver = process.env.APISERVER || 'https://reseptiprojekti-api.herokuapp.com';

/**
 * Get all recipes from database
 * @returns Data containing all recipe objects
 */
async function getAllRecipes() {
    const response = await axios.get(apiserver + '/api/recipes');
    return response.data;
}

/**
 * Adds a recipe to the database with the POST-method
 * @param recipe - Recipe to be added
 * @returns {Promise<AxiosResponse<any>>}
 */
async function addRecipe(recipe) {
    return await axios.post(apiserver + '/api/recipes', recipe);
}

/**
 * Update a recipe in database with the PATCH-method
 * @param recipe - Recipe to be updated
 * @returns {Promise<AxiosResponse<any>>}
 */
async function updateRecipe(recipe) {
    return await axios.patch(apiserver + `/api/recipes/${recipe.id}`, recipe);
}

/**
 * Deletes recipe from database
 * @param {Number} id - ID of recipe to be deleted
 * @returns {Promise<AxiosResponse<any>>}
 */
async function deleteRecipe(id) {
    return await axios.delete(apiserver + `/api/recipes/${id}`);
}


export {getAllRecipes, addRecipe, updateRecipe, deleteRecipe};