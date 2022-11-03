import * as  dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import {connector} from './src/mysql-conector.js'


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

let bdatos;

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json({
    type: "*/*"
}));

app.use(cors());

app.get('/', (req, res) => {
     connector.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
    

// INSERTAR DATOS EN LA BASE DE DATOS

app.post('/prueba', (req, res) => {
    bdatos = req.body;
    const insert = `INSERT INTO users (id, usuario) VALUES (NULL, '${JSON.stringify(bdatos)}')`;
    connector.query(insert, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify('Datos guardados'));
        console.log(result);
    });

});


app.listen(port, () => {
    console.log(`Estoy ejecutándome en http://localhost:${port}`);
});