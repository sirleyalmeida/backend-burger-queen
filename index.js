const express = require("express");
const app = express();
const db = require('./models/index');
const port = 3269;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (req, resp) => {
    console.log('Funciona')
});

app.use('/users', require('./routes/users'));
app.use('/menu', require('./routes/menu'));
app.use('/ordersmenu', require('./routes/ordersmenu'));
app.use('/orders', require('./routes/orders'));

db.sequelize.sync();