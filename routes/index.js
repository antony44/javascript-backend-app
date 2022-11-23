const express = require('express'),
    router = express.Router(),
    usersRoutes = require('./user.route')

router.use('/user', usersRoutes)

module.exports = router