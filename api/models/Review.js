const { Schema } = require('mongoose')

const reviewSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

module.exports = reviewSchema;