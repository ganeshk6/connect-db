const { Op } = require('sequelize');
const busModel = require('../models/buses');
const {sendSuccessResponse, sendErrorResponse} = require('../utils/response');

const addNewBus = async (req, res) => {

    try {

        const { busNumber, totalSeats, availableSeats } = req.body;
        const buses = await busModel.create({
            busNumber:busNumber,
            totalSeats:totalSeats,
            availableSeats:availableSeats
        })

        return sendSuccessResponse(
            res,
            buses,
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
        const buses = await busModel.findAll({
            where:{
                availableSeats: {
                    [Op.gte]: seats
                }
            }
        })

        if(buses.length === 0){
            return sendErrorResponse(res, null, "User not found", 404);
        }

        return sendSuccessResponse(
            res,
            buses,
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