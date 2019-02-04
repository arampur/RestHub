// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Contact model
var Users = module.exports = mongoose.model('users', usersSchema);
module.exports.get = function (callback, limit) {
    Users.find(callback).limit(limit);
}