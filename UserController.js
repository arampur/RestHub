// contactController.js
// Import contact model
User = require('./usersModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    //User.gender = req.body.gender;
    user.message = req.body.message;
    //User.phone = req.body.phone;
// save the contact and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New User created!',
            data: user
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
user.name = req.body.name ? req.body.name : user.name;
        //User.gender = req.body.gender;
        user.message = req.body.message;
        //contact.phone = req.body.phone;
// save the contact and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete User message
exports.delete = function (req, res) {
    User.remove({
        _message: req.params.message
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Message deleted'
        });
    });
};