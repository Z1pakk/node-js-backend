import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000;
const DB_URL = 'mongodb+srv://z1pakk:123@cluster0.laiqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use('/api', router);
// app.use('/users', userRouter);

async function startApp() {
    try{
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('SERVER HAS BEEN STARTED ON PORT 5000'));
    } catch (e) {
        console.log(e);
    }
}

startApp();
