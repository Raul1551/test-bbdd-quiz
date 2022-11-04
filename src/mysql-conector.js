import mysql from 'mysql';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from '../config.js';
const connector = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
});

const conectar = () => {
    connector.connect(err => {
        if (err) throw err;
        console.log('FUNCIONA');
    });
}

export { connector }