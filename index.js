const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'node_project'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Connection has been created');

    const creationQuery = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200) NOT NULL,
            email VARCHAR(200) NOT NULL
        )
    `;

    connection.query(creationQuery, (err) => {
        if (err) {
            console.log(err);
            connection.end();
            return;
        }

        console.log('Table has been created');
        connection.end();
    });
});

app.get('/', (req, res) => {
    res.send('Hello World');  
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});