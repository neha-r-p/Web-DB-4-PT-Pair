const express = require('express');
const helmet = require('helmet');

const Recipe = require('./data/db-helpers.js/recipe-model.js')

const db = require('./data/db-config.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
	Recipe.getRecipes()
	.then(recipes => {
		res.status(200).json(recipes)
	})
	.catch(err => {
		res.json(err)
	})
})

module.exports = server;