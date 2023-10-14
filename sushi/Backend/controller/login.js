const { client } = require('../db/db'); // Importa la instancia de cliente de db.js

const loginUser = async (email, pass) => {
  try {
    // Define la consulta SQL para buscar un usuario con el correo electrónico y la contraseña proporcionados
    const query = `
      SELECT * FROM "User"
      WHERE "Email" = $1 AND "Pass" = $2
    `;

    // Parámetros de la consulta
    const values = [email, pass];

    // Ejecuta la consulta SQL
    const result = await client.query(query, values);

    if (result.rows.length === 1) {
      // Usuario autenticado
      console.log('Usuario autenticado exitosamente');
      return result.rows[0];
    } else {
 
      console.log('Credenciales incorrectas');
      return null;
    }
  } catch (error) {
    console.error('Error al autenticar al usuario:', error);
    throw error;
  }
};

module.exports = { loginUser };