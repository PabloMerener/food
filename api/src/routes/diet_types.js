'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../../mock_api/diet_types.json');
    const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.send(json.results);
});

module.exports = router;
