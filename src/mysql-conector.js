import mysql from 'mysql';

const connector = mysql.createConnection({
    host: process.env.DB_HOST ||'localhost',
    user: process.env.DB_USER ||'root',
    password: process.env.DB_PASSWORD ||'1234',
    database: process.env.DB_DATABASE ||'quiz'
});

const conectar = () => {
    connector.connect(err => {
        if (err) throw err;
        console.log('FUNCIONA');
    });
}

export{connector}