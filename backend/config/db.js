const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(uri); // ✅ Cleaned up
        console.log("✅ MongoDB connection successful!");
    } catch (e) {
        console.error("❌ MongoDB connection error:", e.message);
        process.exit(1);
    }
};

module.exports = connectDB;
