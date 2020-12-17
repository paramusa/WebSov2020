const axios = require('axios');

const apiserver = process.env.APISERVER || 'https://reseptiprojekti-api.herokuapp.com';

//get all
async function getAllRecipes() {
    const response = await axios.get(apiserver + '/api/recipes');
    return response.data;
}

//post one
async function addRecipe(recipe) {
    return await axios.post(apiserver + '/api/recipes', recipe);
}

//patch one, ei vielä käytössä
async function updateRecipe(recipe) {
    return await axios.patch(apiserver + `/api/recipes/${recipe.id}`, recipe);
}

//delete one
async function deleteRecipe(id) {
    return await axios.delete(apiserver + `/api/recipes/${id}`);
}


export {getAllRecipes, addRecipe, updateRecipe, deleteRecipe};