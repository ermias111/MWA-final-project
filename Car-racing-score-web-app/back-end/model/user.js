const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
	lastName: String,
	email: String,
	userName: String,
	password: String,
	profileImage: String, 
	role: String
})

module.exports = mongoose.model('User', userSchema);