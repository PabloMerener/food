'use strict';
const express = require('express');
const router = express.Router();
const https = require('https');
const fs = require('fs');
const path = require('path');
const { Recipe, Diet } = require('../db.js');

require('dotenv').config();
const {
    API, API_KEY, MOCK_API
} = process.env;

const setFilterToResponse = async (req, res, data) => {
    const { name, diet } = req.query;
    const json = JSON.parse(data);

    let results = json.results;

    const recipes = await Recipe.findAll({ include: Diet });
    recipes.forEach(recipe => {
        results.push({
            id: recipe.id,
            title: recipe.name,
            image: '../../../cooking.png',
            spoonacularScore: recipe.score,
            healthScore: recipe.health_score,
            diets: recipe.diets.map(e => e.name),
            dishTypes: [],
            analyzedInstructions: [{
                number: 1,
                step: recipe.step_by_step
            }]
        });
    });

    if (name) results = results.filter(e => e.title.toUpperCase().includes(name.toUpperCase()));

    if (Array.isArray(diet)) {
        const dietQuery = diet.map(e => e.toUpperCase());
        results = results.filter(element => dietQuery.every(e => element.diets.map(e => e.toUpperCase()).includes(e.toUpperCase())));
    } else if (diet) {
        const dietQuery = diet.toUpperCase();
        results = results.filter(e => e.diets.map(e => e.toUpperCase()).includes(dietQuery));
    }

    res.send(results);
}

router.get('/', (req, res) => {
    if (MOCK_API === 'true') {
        const filePath = path.join(__dirname, '../../mock_api/detailed_recipes.json');
        setFilterToResponse(req, res, fs.readFileSync(filePath, 'utf8'));
    } else {
        const url = API + '/recipes/complexSearch?addRecipeInformation=true&apiKey=' + API_KEY + `&number=100`;

        https.get(url, function (httpsRes) {
            var data = '';

            httpsRes.on('data', function (chunk) {
                data += chunk;
            });

            httpsRes.on('end', function () {
                setFilterToResponse(req, res, data);
            });
        }).on('error', function (e) {
            console.log("Got an error: ", e);
        });
    }
});

router.get('/:id', async (req, res) => {
    const id = path.parse(req.params.id).name; // Remove json extension

    if (MOCK_API === 'true') {
        res.sendFile(path.join(__dirname, '../../mock_api/recipes/' + id + '.json'));
    } else if (isNaN(id)) {
        const recipe = await Recipe.findByPk(id, { include: Diet });
        const r = recipe.toJSON();

        res.send({
            id: id,
            title: r.name,
            image: '../../../cooking.png',
            spoonacularScore: r.score,
            healthScore: r.health_score,
            diets: r.diets.map(e => e.name),
            dishTypes: [],
            analyzedInstructions: [{
                steps: [{
                    number: 1,
                    step: r.step_by_step
                }]
            }]
        });
    } else {
        const url = API + '/recipes/' + id + '/information?apiKey=' + API_KEY;

        https.get(url, function (httpsRes) {
            var data = '';

            httpsRes.on('data', function (chunk) {
                data += chunk;
            });

            httpsRes.on('end', function () {
                res.send(JSON.parse(data));
            });
        }).on('error', function (e) {
            console.log("Got an error: ", e);
        });
    }
});

router.post('/create', async (req, res) => {

    try {
        const { name, dish_overview, score, health_score, step_by_step, diets } = req.body;

        const recipe = await Recipe.create({
            name,
            dish_overview,
            score,
            health_score,
            step_by_step
        });

        const associatedDiets = [];
        for (let index = 0; index < diets.length; index++) {
            const dietName = diets[index];
            const diet = await Diet.findOne({ where: { name: dietName } });
            associatedDiets.push(diet);
        }
        await recipe.addDiets(associatedDiets.map(e => e.id));

        res.status(201).send({
            ...recipe.toJSON(),
            diets: associatedDiets.map(e => e.toJSON())
        });
    } catch (error) {
        res.status(422).send(error);
    }
});

module.exports = router;
