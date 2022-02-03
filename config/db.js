const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');

// most cases when use async or await use try catch to catch if not connected
const connectDB = async () => {
  try {
    // since mongoose.connect() returns a promise hence we want to put await
    await mongoose.connect(db);

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
