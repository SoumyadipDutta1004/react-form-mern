import mongoose from "mongoose";


async function connectToDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/reactform');
    console.log('Connected to MongoDB...');
  } 
  catch (error) {
    console.error('Could not connect to MongoDB...', error.message);
  }
}

export default connectToDB;