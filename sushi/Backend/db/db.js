const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://iybzmvsv:hj6DNFr-OeKixASg3_xOuptdxzSOzo8j@silly.db.elephantsql.com/iybzmvsv',
  ssl: {
    rejectUnauthorized: false,
  },
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error);
  }
};

module.exports = { client, connectDB };
