// contactController.js
// Import contact model
User = require('./usersModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, Users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: Users
        });
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var User = new Users();
    User.name = req.body.name ? req.body.name : User.name;
    //User.gender = req.body.gender;
    User.message = req.body.message;
    //User.phone = req.body.phone;
// save the contact and check for errors
    User.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New contact created!',
            data: User
        });
    });
};
// Handle view contact info
exports.view = function (req, res) {
    User.findById(req.params.contact_id, function (err, User) {
        if (err)
            res.send(err);
        res.json({
            message: 'Contact details loading..',
            data: User
        });
    });
};
// Handle update contact info
exports.update = function (req, res) {
User.findById(req.params.user_id, function (err, User) {
        if (err)
            res.send(err);
User.name = req.body.name ? req.body.name : User.name;
        User.gender = req.body.gender;
        User.message = req.body.message;
        //contact.phone = req.body.phone;
// save the contact and check for errors
        User.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: User
            });
        });
    });
};
// Handle delete contact
exports.delete = function (req, res) {
    User.remove({
        _message: req.params.message
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Message deleted'
        });
    });
};