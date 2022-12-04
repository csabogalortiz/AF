const router = require("express").Router();
const User = require('../models/User.model')


router.get('/users-list', (req, res, next) => {

    User
        .find()
        .then(users => {
            res.render('user/users-list', { users })
        })
        .catch(error => { next(error) })
})

module.exports = router;