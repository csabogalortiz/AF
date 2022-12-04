const express = require('express');
const router = express.Router();
const Post = require('../models/Post.model')
const User = require('../models/User.model')
const Comment = require('../models/Comment.model')
// const { isLoggedIn } = require('./../middleware/route-guard');
// Falta todo lo de auth

router.post('/comment/create/:post_id', (req, res, next) => {
  const { description } = req.body
  const { _id: owner } = req.session.currentUser
  const { place_id } = req.params

  console.log({ owner, description })

  Comment
    .create({ owner, description })
    .then(comment => {
      console.log(comment)

      Post
        .findByIdAndUpdate(post_id, { "$push": { "comment": comment._id } })
        .then(() => res.redirect(`/places/details/${place_id}`))
    })
    .catch((err) => {
      console.log(err);

    })

})

module.exports = router;

