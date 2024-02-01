import express from 'express'
import dotenv from 'dotenv'
import { authRoute } from './routes/authRoute.js';

dotenv.config();
const app = express();
app.use(express.json());

app.use("/auth",authRoute)

app.listen(process.env.PORT,() => {
    console.log(`Server Started at PORT ${process.env.PORT}`);
})

