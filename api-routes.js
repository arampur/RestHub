// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'RestfulAPI',
        message: 'Qlik Test!!',
    });
});
// Import contact controller
var UserController = require('./UserController');
// Contact routes
router.route('/users')
    .get(UserController.index)
    .post(UserController.new);
router.route('/users/:user_id')
    .get(UserController.view)
    .patch(UserController.update)
    .put(UserController.update)
    .delete(UserController.delete);
// Export API routes
module.exports = router;