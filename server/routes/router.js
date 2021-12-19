const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller');
/**
 * @description Root Route
 * @method GET 
 */
 route.get('/api/download', services.Url);
route.get('/', services.homeRoutes);

route.get('/api/download', services.Url);

//create Method
route.get('/api/d', controller.findURL);


module.exports = route