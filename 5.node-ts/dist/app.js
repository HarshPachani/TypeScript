import express from 'express';
import userRoute from './routers/user.js';
const app = express();
app.use('/users', userRoute);
app.get('/', (req, res) => {
    res.send("lol...");
});
app.listen(4000, () => console.log('Server is running on port: 4000'));
