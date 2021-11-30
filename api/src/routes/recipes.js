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

const setFilterToResponse = (req, res, data) => {
    const { name, diet } = req.query;
    const json = JSON.parse(data);

    let results = json.results;

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
        const filePath = path.join(__dirname, '../../mock_api/detailed_recipes_100.json');
        setFilterToResponse(req, res, fs.readFileSync(filePath, 'utf8'));
    } else {
        const url = API + '/recipes/complexSearch?addRecipeInformation=true&apiKey=' + API_KEY;

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

router.get('/:id', (req, res) => {
    // No se por qué 'id' viene con el sufijo '.json'
    const id = parseInt(req.params.id);

    if (MOCK_API === 'true') {
        res.sendFile(path.join(__dirname, '../../mock_api/recipes/' + id + '.json'));
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
    const { name, diets } = req.body;

    const recipe = await Recipe.create({ name });
    for (let index = 0; index < diets.length; index++) {
        const dietName = diets[index];
        const diet = await Diet.findOne({ where: { name: dietName } });
        await recipe.addDiet(diet.id);
    }

    res.send(recipe);
});

module.exports = router;