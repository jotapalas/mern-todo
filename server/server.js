const express = require('express');
const cors = require('cors');
const db = require('./db/connection');

let port = process.env.SERVER_PORT || 5000;
if (process.env.NODE_ENV === 'testing') {
    port = process.env.SERVER_PORT_TEST || 8000;
}
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', require('./api/routes/todo.routes'));
app.listen(port);
console.log(`Server started at port ${port}`);

module.exports = app;
