const router = require('express').Router();
const streamController = require('../../controllers/streamController');

router.route('/sources').get(streamController.getSources);
router.route('/genres').get(streamController.getGenres);
router.route('/title/:id').get(streamController.getTitle);
router.route('/titles').get(streamController.getTitles);

module.exports = router;
