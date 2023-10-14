const express = require('express');
const cors = require('cors');
const app = express();
const { Client } = require('pg');
const { connectDB } = require('./db/db');
const { registerUser } = require('./controller/register');
const { loginUser } = require('./controller/login');


// Habilitar CORS para todas las rutas
app.use(cors());
app.use(express.json());
//BASE DE DATOS

connectDB();

app.post('/register', async (req, res) => {
  try {
    const { nombre, email, pass } = req.body;
    
    // Verifica si los datos requeridos existen en la solicitud
    if (!nombre || !email || !pass) {
      return res.status(400).json({ error: 'Faltan datos requeridos.' });
    }

    await registerUser(nombre, email, pass);
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, pass } = req.body;

    if (!email || !pass) {
      return res.status(400).json({ error: 'Faltan datos requeridos.' });
    }

    // Implementa la lógica para verificar las credenciales del usuario
    const user = await loginUser(email, pass);

    if (user) {
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ error: 'Credenciales incorrectas' });
    }
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const client = new Client({
  connectionString: 'postgres://sbadpryx:Qm8lZbio6bbNyqIWTydZcEq_7TA9akGb@berry.db.elephantsql.com/sbadpryx',
  ssl: {
    rejectUnauthorized: false, // Opción necesaria si ElephantSQL utiliza SSL
  },
});

client.connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  })



app.get('/api/ventas-por-dia', async (req, res) => {
  try {
    const result = await client.query(`
      SELECT DiaSemana, COUNT(*) as CantidadVentas
    FROM Ventas
    GROUP BY DiaSemana
    ORDER BY
      CASE
        WHEN DiaSemana = 'lunes' THEN 1
        WHEN DiaSemana = 'martes' THEN 2
        WHEN DiaSemana = 'miércoles' THEN 3
        WHEN DiaSemana = 'jueves' THEN 4
        WHEN DiaSemana = 'viernes' THEN 5
        WHEN DiaSemana = 'sábado' THEN 6
        WHEN DiaSemana = 'domingo' THEN 7
        ELSE 8 -- Para cualquier otro valor
      END;
    `)
    const rows = result.rows;
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener datos de ventas:', error);
    res.status(500).json({ error: 'Error al obtener datos de ventas' });
  }
});


// Ruta que envía datos al cliente
app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hola desde Node.js',
    // Otros datos que desees enviar
  };
  res.json(data);
});

// Resto de la configuración de Express

app.listen(3000, () => {
  console.log('Servidor Node.js en ejecución en el puerto 3000');
});
