const busModel = require('./buses');
const userModel = require('./users');
const bookingModel = require('./booking');

// user and booking relation
userModel.hasMany(bookingModel);
bookingModel.belongsTo(userModel);

// Buses and booking relation
busModel.hasMany(bookingModel);
bookingModel.belongsTo(busModel);

module.exports = {
    userModel,
    busModel,
    bookingModel
}
