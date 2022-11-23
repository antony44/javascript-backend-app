const express = require('express'),
    router = express.Router(),
    UserController = require('../controllers/user.controller'),
    UsersService = require('../services/user.service')

router.use(async (req, res, next) => {
    let data = await UsersService.getUsers()

    if (data) {
        req.users = data
        next()
    } else
        return res
            .status(500)
            .send({ message: 'Error while getting users' })
})

router
    .route('/')
    .get(UserController.getUsers)
    .post(UserController.createUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)

module.exports = router
