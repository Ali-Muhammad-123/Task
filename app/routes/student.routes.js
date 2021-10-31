module.exports = app => {
    const students = require('../controllers/students.js') ;
    const auth = require("../middleware/auth");

  
    var router = require("express").Router();
  
    router.post("/", auth ,  students.create);
  
  
    router.get("/:id/info", auth , students.findOne);
  
    router.put("/:id/update",auth ,  students.update);
  
    router.delete("/:id/remove",auth ,  students.delete);
  
    app.use('/students', router);
  };