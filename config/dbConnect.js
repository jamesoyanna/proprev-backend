const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected successully: ${conn.connection.host}`);
  } catch (error) {
    console.log(`MognoDB Error: , ${error.message}`);
    process.exit(1);
  }
};

module.exports  =  connectDB;
