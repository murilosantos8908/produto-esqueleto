const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRoutes = require('./routes/usersRoutes');
const corredoresRoutes = require('./routes/corredoresRoutes');
const voltasRoutes = require('./routes/voltasRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/corredores', corredoresRoutes);
app.use('/voltas', voltasRoutes);

module.exports = app;