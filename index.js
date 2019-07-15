const express = require("express");
const app = express();
const db = require('./models/index');
const port = process.env.port || '8080';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (req, resp) => {
    console.log('Burger Queen API')
});

app.use('/users', require('./routes/users'));
app.use('/menu', require('./routes/menu'));
app.use('/ordersmenu', require('./routes/ordersmenu'));
app.use('/orders', require('./routes/orders'));

db.sequelize.sync();