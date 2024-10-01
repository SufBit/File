const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const URL = process.env.MONGO_URI;
        console.log("Mongo URI:", URL);
        const conn = await mongoose.connect(URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        mongoose.connection.on('connected', () => {
            console.log('Mongoose successfully connected to MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.log('Mongoose connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB; // Export the function