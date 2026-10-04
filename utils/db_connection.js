const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_project', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.");
    }catch(err){
        console.error("Database connection failed:", err);
    }
})();

module.exports = sequelize;
/*

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

async function setupDatabase() {

    try {

        console.log("Database setup started");

        for (const query of queries) {
            await connection.execute(query);
            console.log("Table created");
        }

        console.log("Database setup completed");

    } catch (err) {

        console.error("Table creation failed:", err.message);

    }
}

setupDatabase();

module.exports = connection;
*/