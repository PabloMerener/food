'use strict';
var path = require('path');

const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../../mock_api/detailed_recipes.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const { name } = req.query;

    if (name) {
        res.send(data.results.filter(e => e.title.toUpperCase().indexOf(name.toUpperCase()) !== -1));
    } else {
        res.send(data.results);
    }
});

router.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../../mock_api/recipes/' + req.params.id));
});

module.exports = router;