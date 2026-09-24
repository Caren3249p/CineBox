const express = require('express');
const cors = require('cors'); // <-- Habilitar CORS
const conectarDB = require('./config/db');
const peliculasRouter = require('./routes/peliculas');

const app = express();

// Conectar a la base de datos
conectarDB();

// Middlewares
app.use(cors()); // <-- Permitir peticiones desde el frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enlazar rutas de la API (es recomendable usar un prefijo como /api/peliculas)
app.use('/api/peliculas', peliculasRouter);

app.listen(3000, () => {
    console.log('Servidor Backend corriendo en http://localhost:3000');
});