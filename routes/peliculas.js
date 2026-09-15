const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

// Ruta principal para renderizar la plantilla EJS
router.get('/', async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.render('index', { peliculas });
    } catch (error) {
        res.status(500).send('Error al cargar la página');
    }
});

// Rutas API CRUD
router.post('/peliculas', async (req, res) => {
    try {
        const nuevaPelicula = await Pelicula.create(req.body);
        res.status(201).json(nuevaPelicula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/peliculas', async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/peliculas/:id', async (req, res) => {
    try {
        const actualizada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/peliculas/:id', async (req, res) => {
    try {
        await Pelicula.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Película eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;