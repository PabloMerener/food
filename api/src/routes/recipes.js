'use strict';
var path = require('path');

const express = require('express');
const router = express.Router();

const fs = require('fs');

require('dotenv').config();
const {
    API, API_KEY, MOCK_API
} = process.env;

const https = require('https')

const setFilterToResponse = (req, res, data) => {
    const { name } = req.query;
    const json = JSON.parse(data);

    if (name) {
        res.send(json.results.filter(e => e.title.toUpperCase().indexOf(name.toUpperCase()) !== -1));
    } else {
        res.send(json.results);
    }
}

router.get('/', (req, res) => {
    if (MOCK_API === 'true') {
        const filePath = path.join(__dirname, '../../mock_api/detailed_recipes.json');
        setFilterToResponse(req, res, fs.readFileSync(filePath, 'utf8'));
    } else {
        const url = API + '/recipes/complexSearch?addRecipeInformation=true&apiKey=' + API_KEY;

        https.get(url, function (httpsRes) {
            var body = '';

            httpsRes.on('data', function (chunk) {
                body += chunk;
            });

            httpsRes.on('end', function () {
                setFilterToResponse(req, res, body);
            });
        }).on('error', function (e) {
            console.log("Got an error: ", e);
        });
    }
});

router.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../../mock_api/recipes/' + req.params.id));
});

module.exports = router;