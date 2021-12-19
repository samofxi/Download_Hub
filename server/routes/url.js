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
  
    // Check base url
    if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json('Invalid base url');
    }
  
    // Create url code

    // Check long url
    if (true) {
      try{
          let url = new Url({
            longUrl,
            FileName,
            date: new Date()
          });
  
          await url.save();
  
        //res.send(data);
        res.send({url: baseUrl+"/api/download?id=" + data._id})
      } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
      }
    } else {
      res.status(401).json('Invalid long url');
    }
  });
  
  module.exports = route;