import express from 'express';
import cors from 'cors';

import connectToDB from './database/connectDB.js';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';

const app = express();

// Connect to database
connectToDB();

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',  // Your React app's URL
  credentials: true,                 // Allow credentials (cookies)
}));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/user', userRouter);

// Listen on port 8000
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});