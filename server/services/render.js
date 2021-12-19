
const axios = require('axios');
const { param } = require('express/lib/request');


exports.homeRoutes = (req,res)=>{
    res.render('index')
} 


exports.Url = (req,res)=>{
    axios.get('http://localhost:5000/api/d', {params: {id: req.query.id}})
    .then(function(urldata){
    res.render('Download', {url: urldata.data});
    })
    .catch(err => {
    res.send(err)
    })
    };
    
