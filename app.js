const express = require('express');
const app = express();
const mongoose = require('mongoose');

const testRoutes = require('./api/routes/test');
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CONNECT_URL}`,
    {
        auth: {
            user: process.env.MONGO_DB_USER,
            password: process.env.MONGO_DB_PASS
        },
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    function(err, client) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Connected to Mongo DB');
        }
    }
)

app.use('/test', testRoutes);


module.exports = app;
