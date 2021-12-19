const express = require('express');
const route = express.Router();
const validUrl = require('valid-url');


const Url = require('../model/url');

// @route     POST /api/url/shorten
// @desc      Create short URL
route.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const { FileName } = req.body;
    const baseUrl = process.env.baseUrl;
    if(!validUrl.isUri){
      res.status(500).send({message: `the current base Url ${baseUrl} is invalid!`})
  };

  try{
      let url = new Url({
        longUrl,
        FileName,
        date: new Date()
      });

      url
  .save(url)
  .then(data => {
      //res.send(data);
      res.send({url: baseUrl+"/api/download?id=" + data._id})
  }) 
  .catch( err => { 
      res.status(500).send({
          message: err.message || "Something went wrong while creating the short Link"
      });
  });
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
  });
  
  module.exports = route;