const server = require('./app.js');
const { conn } = require('./DB_connection.js'); // Importa el objeto Sequelize completo
const PORT = 3001;

conn.sync({force: true}).then(() => {
  server.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); 
})

