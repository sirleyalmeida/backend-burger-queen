const express = require("express");
const app = express();
const db = require('./models/index');
const port = process.env.PORT || '8080';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, (req, resp) => {
    console.log('Burger Queen API')
});

app.use('/', (req, resp) => {
    resp.send('Burger Queen API');
});
app.use('/users', require('./routes/users'));
app.use('/menu', require('./routes/menu'));
app.use('/ordersmenu', require('./routes/ordersmenu'));
app.use('/orders', require('./routes/orders'));

db.sequelize.sync();