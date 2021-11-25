const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes');
const diet_types = require('./diet_types');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipes);
router.use('/diet-types', diet_types);

module.exports = router;
