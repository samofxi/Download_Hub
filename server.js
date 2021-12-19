const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');


const app = express();
//dotenv to import sittings in Config.env
dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080;

//log Requests on the console (morgan)
app.use(morgan('tiny'));

app.use(express.json());
//connect to mongodb
connectDB();
//pass a request to body parser 
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
//app.set("Views", path.resolve(__dirname,'','')); just for learning

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/api/url', require('./server/routes/url'))
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {console.log(`Server running on Port ${PORT}`)});
