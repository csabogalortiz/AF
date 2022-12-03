const mongoose = require('mongoose')
const Schema = mongoose.Schema
const feelingSchema = new Schema({


    title: {
        type: String,
    },

    description: {
        type: String,
    },


},
    {
        timestamps: true
    }
);

const Feeling = mongoose.model('Feeling', feelingSchema)

module.exports = Feeling;
