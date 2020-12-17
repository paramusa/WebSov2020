const axios = require('axios');

//get all
async function getAllRecipes() {
    const response = await axios.get('/api/recipes');
    return response.data;
}

//post one
async function addRecipe(recipe) {
    return await axios.post('/api/recipes', recipe);
}

//patch one, ei vielä käytössä
async function updateRecipe(recipe) {
    return await axios.patch(`/api/recipes/${recipe.id}`, recipe)
}

//delete one
async function deleteRecipe(id) {
    return await axios.delete(`/api/recipes/${id}`)
}


export {getAllRecipes, addRecipe, updateRecipe, deleteRecipe};