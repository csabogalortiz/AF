const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feelingSchema = new Schema({


    title: {
        type: String,
    },

    description: {
        type: String,
    },

    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
    },



},
    {
        timestamps: true
    }
);

const Feeling = mongoose.model('Feeling', feelingSchema)

module.exports = Feeling;
