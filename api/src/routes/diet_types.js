'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { Diet } = require('../db.js');

router.get('/', (req, res) => {
    Diet.count().then(e => {
        if (e) {
            Diet.findAll().then(e => res.send(e));
        } else {
            const filePath = path.join(__dirname, '../../mock_api/diet_types.json');
            const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

            for (let index = 0; index < json.results.length; index++) {
                const name = json.results[index].name;
                Diet.findOrCreate({ where: { name } })
                    .then(e => console.log([e[0].toJSON(), e[1]]));
            }

            res.send(json.results);    
        }
    });
});

module.exports = router;
