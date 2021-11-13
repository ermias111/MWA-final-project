var express = require('express');
require('dotenv').config({path: __dirname + '/.env'});
const cors = require('cors');
const logger = require('morgan');
const path = require('path')
const mongoose = require('mongoose');

const favicon = require('serve-favicon');
const fs = require('fs');
const fileRouter = require('./routes/files');
const racingRouter = requrie('./routes/racing');


const app = express();
const database = process.env['DATABASE']
const password = process.env['PASSWORD']

mongoose.connect(`mongodb+srv://ermiyas:${password}@cluster0.wpkag.mongodb.net/${database}?retryWrites=true&w=majority`, { useNewUrlParser : true, 
    useUnifiedTopology: true }, function(error) {
        if (error) {
            console.log("Error!" + error);
        }
});


app.use(favicon(path.join(__dirname
    , 'public/images',
    'favicon.ico')));
app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}))
app.use(logger('dev'))
app.use( express.static(__dirname + '/public/images'))
app.use('/images', express.static(__dirname + '/public/images'));
app.use(express.json());
app.use(cors());


app.use('/file', fileRouter);

app.use('/racing', racingRouter);


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => console.log('listening to 3000'));
