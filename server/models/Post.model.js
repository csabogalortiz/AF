const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({

    title: String,
    content: {
        type: String,
        minlength: 1,
    },

    owner:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],

    favorite_count: {
        type: Number,
        minlength: 1,
    },

    retweet_count: {
        type: Number,
        minlength: 1,
    },

    postImg: {
        type: String,
    },

    canvas: {
        type: String,
    },

    text: {
        type: String,
    },

    url: {
        type: String,
    },

},

    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema)

module.exports = Post;

