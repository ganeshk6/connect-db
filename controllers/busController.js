const db = require('../utils/db_connection');
const {sendSuccessResponse, sendErrorResponse} = require('../utils/response');

const addNewBus = async (req, res) => {

    try {

        const { busNumber, totalSeats } = req.body;

        const query = `
            INSERT INTO buses (busNumber, totalSeats)
            VALUES (?, ?)
        `;

        const [result] = await db.execute(
            query,
            [busNumber, totalSeats]
        );

        if (result.affectedRows === 0) {
            return sendErrorResponse(
                res,
                null,
                "Bus could not be added",
                500
            );
        }

        return sendSuccessResponse(
            res,
            {
                busId: result.insertId,
                affectedRows: result.affectedRows
            },
            "New bus added successfully",
            201
        );

    } catch (err) {

        console.error("Add bus error:", err);

        return sendErrorResponse(
            res,
            err.message,
            "Failed to add new bus",
            500
        );
    }
};


const getAllBuses = async (req, res) => {

    try {

        const { seats } = req.params;

        const query = `
            SELECT *
            FROM buses
            WHERE totalSeats >= ?
        `;

        const [rows] = await db.execute(
            query,
            [seats]
        );

        if (rows.length === 0) {
            return sendErrorResponse(
                res,
                [],
                "No buses found with the specified number of seats",
                404
            );
        }

        return sendSuccessResponse(
            res,
            rows,
            "Fetched all buses successfully",
            200
        );

    } catch (err) {

        console.error("Fetch buses error:", err);

        return sendErrorResponse(
            res,
            err.message,
            "Failed to fetch buses",
            500
        );
    }
};


module.exports = {
    addNewBus,
    getAllBuses
};