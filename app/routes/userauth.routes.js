module.exports = app => {
    const users = require('../controllers/users.js') ;
  
    var router = require("express").Router();
  
    router.post("/register", (users.registerNew));
  
    router.post("/login", (users.login));
  
    app.use('/auth', router);
  };