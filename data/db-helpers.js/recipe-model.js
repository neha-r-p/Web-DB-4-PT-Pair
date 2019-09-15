const db = require('../db-config.js')

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
}

function getRecipes() {
	return db('recipes')
}

function getShoppingList(recipe_id) {
	return db('recipe_ingredients as ri')
			.join('ingredients as i', 'ri.ingredient_id', 'i.ingredient_id')
			.where("id", recipe_id)
			.select('ri.quantity', 'i.ingredient_name')
}

function getInstructions(recipe_id) {
	return db('recipes as r')
			.join('steps as st', 'r.id', 'st.recipe_id')
			.where("id", recipe_id)
			.select('r.recipe_name', 'st.step_number', 'st.description')
			.orderBy('st.step_number')
}