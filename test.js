const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('supertest');
const foodAPI = require('./src/api/food.api');

jest.setTimeout(18000);

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.TEST_PORT || 8084;
const MONGODB_URI = process.env.TEST_DB;

//Making database connection
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

//Opening the connection
mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

//registering the paths
app.use('/food', foodAPI());

//running on the port
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})

let id = '';

test('new food', async () => {
    await request(app).post('/food/create').send({
        code: "F004",
        name: "French Fries",
        amount: 350,
        size: 1
    }).expect(200).then((res) => {
        id = res.body._id;
    });
})