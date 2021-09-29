const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose
        .connect('mongodb://localhost:27017/mongo_db')
        .then(() => console.log('Connected Successfully'))
        .catch((err) => console.error('Not Connected'));
}

module.exports = connectDB;