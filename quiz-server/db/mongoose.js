const mongoose = require('mongoose');

//In mongoose we are providing database name alsng with connection URL
const connectionURL = 'mongodb://127.0.0.1:27017/quiz-api';
mongoose.connect(connectionURL, {});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connection established');
});

db.on('error', () => {
    console.log('Unable to establish connection');
});