const mongoose = require('mongoose');
let connectionString = process.env.DB_CONNECTION_STRING;

if (process.env.NODE_ENV === 'testing') {
    connectionString = process.env.DB_CONNECTION_STRING_TEST;
}

mongoose.connect(connectionString);
const database = mongoose.connection;

database.on('error', (err) => {
    console.error(err);
});

database.once('connected', () => {
    console.log('Connected to database.');
});

module.exports = database;
