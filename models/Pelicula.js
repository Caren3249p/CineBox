const mongoose = require('mongoose'); // <-- ¡Agrega esta línea al inicio!

const peliculaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    imagen: { type: String, required: true }
});

module.exports = mongoose.model('Pelicula', peliculaSchema);