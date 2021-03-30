// REQUIRES
//server
const express = require('express');//package
const MyAp = express(); //using express server
const fs = require("fs");//package //import the fs 
const bodyParser = require('body-parser');

// custom require ... a file of ours! data folder
const menu = require('./profile/data/lists');

// GENERAL CONSTANTS, if error
const msg404 = 'Page/File/Server not Found.';

// STATIC DIRECTORIES
MyAp.use('/js', express.static('profile/js'));
MyAp.use('/images', express.static('profile/images'));
MyAp.use('/css', express.static('profile/css'));
// APP GETS
MyAp.get('/', function (req, res) {

    // just being silly but you can change the header response so that it
    // doesn't say Node.js, but some custom info about your app
    res.set('Server', 'Wazubi Engine');
    res.set('X-Powered-By', 'Magical Pixies');

    fs.readFile("./profile/html/index.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });

});

MyAp.get('/latte-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'application/json');
    let d = new Date();

    res.send({ msg: d });

});

MyAp.get('/coffee-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let CoffeeMenuResponse = req.query['format'];
    let dataList = null;

    if(CoffeeMenuResponse == 'coffee-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = menu.getCoffee();
        res.send(dataList);

    } else if(CoffeeMenuResponse == 'ingred-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = menu.getIngredients();
        res.send(dataList);

    } else if(CoffeeMenuResponse == 'nutr-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = menu.getNutrition();
        res.send(dataList);

    } else if(CoffeeMenuResponse == 'breakf-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = menu.getsomeBreakfast();
        res.send(dataList);

    } else if(CoffeeMenuResponse == 'hottea-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = menu.getHotTeas();
        res.send(dataList);

    } else if(CoffeeMenuResponse == 'favor-list') {

        res.setHeader('Content-Type', 'text/html');
        dataList = menu.getflavor();
        res.send(dataList);

    } else if(CoffeeMenuResponse == 'getLatteJSON') {
        res.setHeader('Content-Type', 'application/json');
        dataList = menu.getsomeLatteJSON();
        res.send(dataList);

    }else if(CoffeeMenuResponse == 'getloafJSON') {
        res.setHeader('Content-Type', 'application/json');
        dataList = menu.getloafJSON();
        res.send(dataList);

    }else if(CoffeeMenuResponse == 'getpopJSON') {
        res.setHeader('Content-Type', 'application/json');
        dataList = menu.getpopJSON();
        res.send(dataList);

    }else if(CoffeeMenuResponse == 'getsomeCoJSON') {
        res.setHeader('Content-Type', 'application/json');
        dataList = menu.getsomeCoJSON();
        res.send(dataList);

    }else if(CoffeeMenuResponse == 'getpepperJSON') {
        res.setHeader('Content-Type', 'application/json');
        dataList = menu.getpepperJSON();
        res.send(dataList);

    
    }else {
        res.send({msg: 'Wrong format!'});
    }
});

// APP POSTS, need
MyAp.use(bodyParser.urlencoded({ extended: false }));

// parse application/json, need
MyAp.use(bodyParser.json());

// Notice that this is a 'POST', send write into, no need
MyAp.post('/post-form', function (req, res) {
      res.setHeader('Content-Type', 'application/json');

      console.log("Stuff sent to server", req.body);

      res.send(["You sent me:", req.body]);

});
//url no exist, no need, get information
MyAp.use(function (req, res, next) {
  res.status(404).send(msg404);
});

// RUN SERVER
let port = 8000; //range withi
MyAp.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
