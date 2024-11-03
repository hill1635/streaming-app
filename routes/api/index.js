const router = require('express').Router();
const userRoutes = require('./users');
const streamRoutes = require('./stream');

router.use('/users', userRoutes);
router.use('/stream', streamRoutes);

module.exports = router;
