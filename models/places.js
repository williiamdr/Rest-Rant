const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: {
        type: String,
        default: 'https://placekitten.com/200/300'
    },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Invalid date!'],
        max: [new Date().getFullYear(), 'This is an invalid date!']
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


// collection name and collection schema
module.exports = mongoose.model('Place', placeSchema)