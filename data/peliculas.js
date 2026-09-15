const peliculas = [
    {
        id: 1,
        titulo: "Interstellar",
        genero: "Ciencia ficción",
        año: 2014,
        calificacion: 9.0,
        imagen: "/img/interestelar.jpg",
        director: {
            nombre: "Christopher Nolan",
            pais: "Reino Unido"
        },
        descripcion:
            "Un grupo de astronautas viaja a través de un agujero de gusano buscando un nuevo hogar para la humanidad."
    },

    {
        id: 2,
        titulo: "Inception",
        genero: "Ciencia ficción",
        año: 2010,
        calificacion: 8.8,
        imagen: "/img/inception.jpg",
        director: {
            nombre: "Christopher Nolan",
            pais: "Reino Unido"
        },
        descripcion:
            "Un especialista en extraer información de los sueños recibe una misión aparentemente imposible."
    },

    {
        id: 3,
        titulo: "The Batman",
        genero: "Acción",
        año: 2022,
        calificacion: 7.8,
        imagen: "/img/batman.jpg",
        director: {
            nombre: "Matt Reeves",
            pais: "Estados Unidos"
        },
        descripcion:
            "Batman investiga una serie de crímenes que revelan una conspiración dentro de Gotham City."
    },

    {
        id: 4,
        titulo: "Avatar",
        genero: "Ciencia ficción",
        año: 2009,
        calificacion: 7.6,
        imagen: "/img/avatar.jpg",
        director: {
            nombre: "James Cameron",
            pais: "Canadá"
        },
        descripcion:
            "Un exmarine se une a una misión en Pandora y termina involucrándose con los habitantes del planeta."
    },

    {
        id: 5,
        titulo: "Parasite",
        genero: "Drama",
        año: 2019,
        calificacion: 8.5,
        imagen: "/img/parasite.jpg",
        director: {
            nombre: "Bong Joon-ho",
            pais: "Corea del Sur"
        },
        descripcion:
            "Una familia de bajos recursos comienza a involucrarse progresivamente con una familia adinerada."
    },

    {
        id: 6,
        titulo: "Joker",
        genero: "Drama",
        año: 2019,
        calificacion: 8.3,
        imagen: "/img/joker.jpg",
        director: {
            nombre: "Todd Phillips",
            pais: "Estados Unidos"
        },
        descripcion:
            "Un hombre marginado enfrenta una sociedad que lo rechaza y comienza una transformación personal."
    }
];

module.exports = peliculas;