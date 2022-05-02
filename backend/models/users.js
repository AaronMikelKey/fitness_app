const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	local: {
		email: String,
		password: String
	}
},
	{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)