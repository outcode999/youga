import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js';
import Pay from './routes/pay.route.js';

import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('is connected');
})
.catch((err) => {
    console.log(err);
})
const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})



app.use('/api/auth', authRoutes);
app.use('/api/sheet', Pay);



app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 