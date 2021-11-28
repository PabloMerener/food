'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { Diet } = require('../db.js');

router.get('/', async (req, res) => {
    const results = await Diet.findAll({ order: [['name', 'ASC']] });

    if (results.length) {
        res.send(results);
    } else {
        const filePath = path.join(__dirname, '../../mock_api/diet_types.json');
        const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        for (let index = 0; index < json.results.length; index++) {
            const name = json.results[index].name;
            Diet.create({ name });
        }
        res.send(json.results);
    }
});

module.exports = router;
