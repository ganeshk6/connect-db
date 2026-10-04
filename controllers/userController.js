const userModel = require('../models/users');
const bookingModel = require('../models/booking');
const busModel = require('../models/buses');
const {sendSuccessResponse, sendErrorResponse} = require('../utils/response');

const addNewUser = async (req, res) => {

    try {

        const { name, email, age } = req.body;

        const user = await userModel.create({
            name:name,
            email:email,
            age:age
        })

        return sendSuccessResponse(
            res,
            user,
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
        const users = await userModel.findAll()

        return sendSuccessResponse(
            res,
            users,
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

const userBooking = async (req, res) => {
    try{
        const { userId, busId, seatNumber } = req.body;
        const alreadyBooked = await bookingModel.findOne({
            where: {
                busId: busId,
                seatNumber: seatNumber
            }
        });

        if (alreadyBooked) {
            return sendErrorResponse(res,[], "Seat is already booked", 300);
        }
        const booking = await bookingModel.create({
            userId: userId,
            busId: busId,
            seatNumber: seatNumber
        });

        sendSuccessResponse(
            res,
            booking,
            "Booking successful",
            201
        );

    }catch(err){
        return sendErrorResponse(
            res,
            err.message,
            "Failed to add booking",
            500
        );
    }
}

const userBooked = async (req, res) => {
    try{
        const { id } = req.params;
        const userBooking = await bookingModel.findAll({
            where:{
                userId: id
            },
            include:busModel
            
        })
        if(userBooking == 0){
            return sendErrorResponse(
                res,
                err.message,
                "Booking not found for this user!",
                404
            );
        }

        sendSuccessResponse(
            res,
            userBooking,
            "User booking fetch successfully",
            201
        );
    }catch(err){
        return sendErrorResponse(
            res,
            err.message,
            "Failed to fetch user booking",
            500
        );   
    }
}

module.exports = {
    addNewUser,
    getAllUsers,
    userBooking,
    userBooked
};