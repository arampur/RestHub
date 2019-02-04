// UserController.js
// Import User model
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
// Handle create user actions
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.message = req.body.message;
// save the user and check for errors
    user.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New User created!',
            data: user
        });
    });
};
// Handle view user details info
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
// Handle update message info
exports.update = function (req, res) {
User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
user.name = req.body.name ? req.body.name : user.name;
        user.message = req.body.message;
// save the message and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Message Info updated',
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