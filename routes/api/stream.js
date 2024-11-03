const router = require('express').Router();
const streamController = require('../../controllers/streamController');

router.route('/sources').get(streamController.getSources);

module.exports = router;
