var express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path')
const mongoose = require('mongoose');

const favicon = require('serve-favicon');
const fs = require('fs');
const fileRouter = require('./routes/files')


const app = express();
mongoose.connect("")


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


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

app.listen(3000, () => console.log('listening to 3000'));
