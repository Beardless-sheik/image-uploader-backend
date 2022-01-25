const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URL;  
console.log(mongoURI);
const mongoConnectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

const connectToDatabase = async() => {
	try {
		await mongoose.connect(mongoURI, mongoConnectionOptions);
	} catch (error) {
		console.log(error);
    throw new Error("Failed to connect to the database"); 
	}
}
module.exports = {
	connectToDatabase
};