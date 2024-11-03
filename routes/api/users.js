const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/').post(userController.create);

router.route('/').get(userController.get);

router.route('/:id').put(userController.update);

router.route('/:id').delete(userController.remove);

router.route('/login').post(userController.login);

router.route('/logout').post(userController.logout);

module.exports = router;
