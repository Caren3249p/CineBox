const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Pelicula');

// GET: Obtener TODAS las películas
router.get('/', async (req, res) => {
    try {
        // Busca todos los registros almacenados en la colección
        const peliculas = await Pelicula.find({});
        res.json(peliculas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET: Obtener UNA película por su ID (para la vista de detalle)
router.get('/:id', async (req, res) => {
    try {
        const pelicula = await Pelicula.findById(req.params.id);
        if (!pelicula) {
            return res.status(404).json({ mensaje: 'Película no encontrada' });
        }
        res.json(pelicula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST: Crear una nueva película
router.post('/', async (req, res) => {
    try {
        const nuevaPelicula = await Pelicula.create(req.body);
        res.status(201).json(nuevaPelicula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT: Actualizar película por ID
router.put('/:id', async (req, res) => {
    try {
        const actualizada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(actualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE: Eliminar película por ID
router.delete('/:id', async (req, res) => {
    try {
        await Pelicula.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Película eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;