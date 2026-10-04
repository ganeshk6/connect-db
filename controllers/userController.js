const userModel = require('../models/users');
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


module.exports = {
    addNewUser,
    getAllUsers
};