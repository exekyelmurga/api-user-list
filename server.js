import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'
import router from './routes/users.cjs'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());


app.use(express.json());
app.use('/', router)

//MongoDB connection

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Mongo Atlas connection sucess'))
.catch((error) => console.error(error))

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
