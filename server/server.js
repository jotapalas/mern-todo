const express = require("express");

app = express();

port = process.env.SERVER_PORT || 5000;
app.listen(port);

console.log("Server started at port " + port);
