const { client } = require('../db/db'); // Importa la instancia de cliente de db.js

const registerUser = async (nombre, email, pass) => {
  try {
    // Define la consulta SQL para insertar un nuevo usuario en la tabla "User"
    const query = `
      INSERT INTO "User" ("Nombre", "Email", "Pass")
      VALUES ($1, $2, $3)
    `;

    // Parámetros de la consulta
    const values = [nombre, email, pass];

    // Ejecuta la consulta SQL con los valores proporcionados
    await client.query(query, values);
    console.log('Usuario registrado exitosamente');
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
  }
};

module.exports = { registerUser };