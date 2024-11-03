const router = require('express').Router();
const streamController = require('../../controllers/streamController');

router.route('/sources').get(streamController.getSources);
router.route('/genres').get(streamController.getGenres);

module.exports = router;
