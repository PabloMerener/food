'use strict';
var path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { name } = req.body;
    res.sendFile(path.join(__dirname, '../../mock_api/detailed_recipes.json'));
});

router.get('/:id', (req, res) => {
    res.sendFile(path.join(__dirname, '../../mock_api/recipes/' + req.params.id));
});

module.exports = router;