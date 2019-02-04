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
var User = module.exports = mongoose.model('user', usersSchema);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}