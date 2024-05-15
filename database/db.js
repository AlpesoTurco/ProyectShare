const mysql = require ('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '12345678',
    database: process.env.DB_DATABASE || 'EduShare'
})

connection.connect((error)=>{
    if(error){
        console.log('error de conexion es: '+error);
        return;
    }
    console.log ('¡Conectado a la base de datos!')
})

module.exports = connection;