const mongoose= require('mongoose');


const connectDB = async () => {
    try {
        //mongodb connection Sting 
      await mongoose.connect(process.env.mongoUri, {
        useNewUrlParser: true
      });
  
      console.log('MongoDB Connected...');
      
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
