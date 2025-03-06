const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB connected");
    } catch (err) { // Catch the error explicitly
        console.error("Error while connecting to MongoDB:", err);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
