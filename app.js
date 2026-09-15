const express = require('express');
const conectarDB = require('./config/db');
const peliculasRouter = require('./routes/peliculas');

const app = express();

// Conectar a la base de datos
conectarDB();

// Configurar EJS (AQUÍ ES DONDE VA)
app.set('view engine', 'ejs');
app.set('views', './views');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Enlazar rutas
app.use('/', peliculasRouter);

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});