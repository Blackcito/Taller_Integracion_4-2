const express = require('express');
const cors = require('cors');
const app = express();
const { Client } = require('pg');


// Habilitar CORS para todas las rutas
app.use(cors());

//BASE DE DATOS

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
