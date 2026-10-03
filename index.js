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

const queries = [
    `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )
    `,

    `
        CREATE TABLE IF NOT EXISTS buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(255) NOT NULL,
            totalSeats INT NULL,
            availableSeats INT NULL
        )
    `,

    `
        CREATE TABLE IF NOT EXISTS bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT NOT NULL
        )
    `,

    `
        CREATE TABLE IF NOT EXISTS payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10, 2) NULL,
            paymentStatus VARCHAR(255) NULL
        )
    `
];

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }

    console.log('Connection has been created');

    let completed = 0;

    queries.forEach((query) => {

        connection.query(query, (err) => {

            if (err) {
                console.error('Table creation failed:', err);
                return;
            }

            completed++;

            console.log(`Table ${completed} created`);

            if (completed === queries.length) {
                connection.end();
                console.log('Database setup completed');
            }
        });

    });
});

app.get('/', (req, res) => {
    res.send('Hello World');  
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});