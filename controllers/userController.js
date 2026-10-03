const db = require('../utils/db_connection');
const {sendSuccessResponse, sendErrorResponse} = require('../utils/response');

const addNewUser = async (req, res) => {

    try {

        const { name, email } = req.body;

        const query = `
            INSERT INTO users (name, email)
            VALUES (?, ?)
        `;

        const [results] = await db.execute(
            query,
            [name, email]
        );

        return sendSuccessResponse(
            res,
            {
                userId: results.insertId,
                affectedRows: results.affectedRows
            },
            "New user added successfully",
            201
        );

    } catch (err) {

        console.error("Add user error:", err);

        return sendErrorResponse(
            res,
            err.message,
            "Failed to add new user",
            500
        );
    }
};


const getAllUsers = async (req, res) => {

    try {

        const query = "SELECT * FROM users";

        const [results] = await db.execute(query);

        return sendSuccessResponse(
            res,
            results,
            "Users fetched successfully",
            200
        );

    } catch (err) {

        console.error("Fetch users error:", err);

        return sendErrorResponse(
            res,
            err.message,
            "Failed to fetch users",
            500
        );
    }
};


module.exports = {
    addNewUser,
    getAllUsers
};