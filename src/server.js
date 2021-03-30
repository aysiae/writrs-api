'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const oneLinerRoutes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(oneLinerRoutes);


module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log('Server is listening on ', port);
        })
    }
}