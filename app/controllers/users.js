const db = require("../models");
const  User = db.users;
const Config  = require('../config/config.js') ;
const jwt = require('jsonwebtoken')


exports.registerNew= async(req, res) => {
    try {

        if (!(req.body.Email && req.body.Password && req.body.Name && req.body.Phonenumber )) {
          res.status(400).send("All input is required");
        }
        var oldUser;
        await User.findByPk( req.body.Email ).then(data =>{ oldUser= data});
    
        if (oldUser) {
            
          return res.status(409).send("User Already Exist. Please Login");
        }
    
    

        const user = {
            Email: req.body.Email.toLowerCase(),
            Password: req.body.Password,
            Name: req.body.Name,
            Phonenumber: req.body.Phonenumber };

            


        const token = jwt.sign(
            { user_id: req.body.Email },
            Config.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
            );
            
            User.create(user);
            user.token = token;
        

            res.status(201).json(user);
    
      } 
      catch (err) {
        console.log(err);
      }

  
}

exports.login=async(req, res) => {
    
    try {

    
        if (!(req.body.Email && req.body.Password)) {
          res.status(400).send("All input is required");
        }

        
        var user = await User.findByPk(req.body.Email);
    

        if (user && (req.body.Password == user.Password)) {
            
            const token = jwt.sign(
                { user_id: req.body.Email },
                Config.TOKEN_KEY,
                {
                  expiresIn: "2h",
                }
                );
              
                user.dataValues.token = token;
                console.log(user);
                res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
};
