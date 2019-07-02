const express = require("express");
const app = express();
const db = require('./models/index');
const port = 3269;

app.use(express.json());

app.listen(port, (req, resp) => { console.log() });

app.use('/users', require('./routes/users'));

// app.use('/users/:id', require('./routes/users'));

db.sequelize.sync();