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
var contactController = require('./UserController');
// Contact routes
router.route('/Users')
    .get(contactController.index)
    .post(contactController.new);
router.route('/Users/:user_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;