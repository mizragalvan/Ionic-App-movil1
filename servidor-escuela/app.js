const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8100;

// Configurar CORS para permitir solicitudes desde la aplicación Ionic
app.use(cors());

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'escuela'
});

// Conectar a la base de datos
connection.connect(error => {
    if (error) {
        console.error('Error de conexión a la base de datos:', error);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para obtener los datos de los alumnos
app.get('/api/alumnos', (req, res) => {
    connection.query('SELECT * FROM alumnos', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

// Ruta para obtener los datos de los padres
app.get('/api/padres', (req, res) => {
    connection.query('SELECT * FROM padres', (error, results) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
