import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './utils/config.js';
import { authRoute } from './routes/authRoute.js'

const app = express();
app.use(express.json())
dotenv.config();
dbConnection();

app.use("/auth",authRoute)

app.listen(process.env.PORT,() => {
    console.log(`Server Started at PORT ${process.env.PORT}`)
})