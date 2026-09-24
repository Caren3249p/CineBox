const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://caren3249p_db_user:0a0FqLSk5mML4fpG@cluster0.kzmocrd.mongodb.net/cinebox?appName=Cluster0');
        console.log(' Base de datos conectada correctamente');
    } catch (error) {
        console.error(' Error al conectar la base de datos:', error);
        process.exit(1);
    }
};

module.exports = conectarDB;