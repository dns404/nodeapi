const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true,
    limit: '6mb'
}));
app.use(bodyparser.json({ limit: '6mb' }));

//request middleware 
app.use(function (req, res, next) {
    next();
}); 
var api = require('./controllers/api');

app.use('/movies', api);

app.use(function (err, req, res, next) {
    //winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    res.status(err.status || 500);
    
});

// route for handling 404 requests(unavailable routes)
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

app.listen(3000);
