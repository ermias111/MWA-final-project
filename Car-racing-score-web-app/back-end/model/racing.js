const mongoose = require('mongoose');

const racingSchema = new mongoose.Schema({
    date: Date,
    location: String,
    result:[
        {
            rank: Number,
            finishTime: String,
            driverDetail: {
                name: String,
                country: String,
                profileImage: String,
                car: {
                   image: String,
                   brand: String,
                   plateNumber: String 
                }
            }
        }
    ]
})

module.exports = mongoose.model('Racing', racingSchema);