//const express = require('express');
const express = require('express'),
app = express(),
 server = require('http').createServer(app);  
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');



var urlencodedParser = bodyParser.urlencoded({ extended: true });


//const app = express();
const port = process.env.PORT || 3000;//
//const port= 3000;




//set template engine
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//define static path to use css files etc
app.use(logger('dev'));
//body parser and cookie parser middleware
app.use(bodyParser.urlencoded({extended: false}));
//parse application json
app.use(bodyParser.json());
//app.use(express.bodyParser({uploadDir:'./uploads'}));

//app.use(cookieParser('secret'));

//define static folders u will use
app.use(express.static(path.join(__dirname, 'node_modules')));
//app.use(express.static(path.join(__dirname +'/node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));



//call all the routes
let  routes= require('./routes/index');
//let pages = require('./routes/pages');


//let imgupload = require('./routes/upload');
app.use('/', routes);
//app.use('/pages', pages);

server.listen(port, ()=>{
    console.log('server started on port'+port);
});