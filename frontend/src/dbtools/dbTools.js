const axios = require('axios');

//get all
async function getAllRecipes() {
    const response = await axios.get('http://localhost:8080/api/recipes');
    return response.data;
}

//post one
async function addRecipe(recipe) {
    return await axios.post('http://localhost:8080/api/recipes', recipe);
}

//patch one, ei vielä käytössä
async function updateRecipe(recipe) {
    return await axios.patch(`http://localhost:8080/api/recipes/${recipe.id}`, recipe)
}

//delete one
async function deleteRecipe(id) {
    return await axios.delete(`http://localhost:8080/api/recipes/${id}`)
}


export {getAllRecipes, addRecipe, updateRecipe, deleteRecipe};