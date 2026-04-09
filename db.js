const mysql = require("mysql2");
dotenv.config();
const dotenv = require("dotenv");   

const connection = mysql.createConnection({
    host:process.env.BD_HOST,
    Use:process.env.BD_USER,
    password:process.env.BD_PASSWORD,
    database:process.env.BD_NAME,
    port:process.env.BD_PORT
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados", err);
        return;
    } else {
        console.log("Conexão bem sucedida ao banco de dados");
    }
});
module.exports = connection