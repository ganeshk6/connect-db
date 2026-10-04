const { Op } = require('sequelize');
const busModel = require('../models/buses');
const userModel = require('../models/users');
const bookingModel = require('../models/booking');
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

const bookedBus = async(req, res) => {
    try{
        const { id } = req.params;
        const bookedBus = await bookingModel.findAll({
            where:{
                busId:id
            },
            include:userModel
        })
        if(bookedBus == 0){
            return sendErrorResponse(
                res,
                err.message,
                "Booking not found for this bus!",
                404
            );
        }
        return sendSuccessResponse(
            res,
            bookedBus,
            "Fetched booked buses successfully",
            200
        );
    }catch(err){
        return sendErrorResponse(
            res,
            err.message,
            "Failed to fetch bus booking",
            500
        );
    }
}

module.exports = {
    addNewBus,
    getAllBuses,
    bookedBus
};