const validUrl = require('valid-url');
var userDB = require('../model/model');
const Url = require('../model/url');

//create and save new User



//find and return one or all Users

//update a user by User id


//delete a user by User id


exports.shortlink = async (req,res) => {
    const { longUrl }  = req.body;
    const { FileName }  = req.body;
    console.log(req.body);
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
        res.send({url: baseUrl+"/api/d?id=" + data._id})
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
        
}

exports.findURL = (req,res) => {
    if(req.query.id){
        const id = req.query.id;
        console.log(id);
        Url.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: "User was not fund"});
            } else{
                res.send(data);
            }
        });
    }

};