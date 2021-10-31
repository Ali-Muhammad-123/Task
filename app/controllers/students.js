const db = require("../models");
const  Student = db.students;

exports.create=(req, res) => {
    if (!req.body.ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const student = {
    ID: req.body.ID,
    Name: req.body.Name,
    Email: req.body.Email,
    RegisterDate: req.body.RegisterDate
  };

  Student.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the student."
      });
    });
  
}

exports.findOne=(req, res) => {    
    const id = req.params.id;

    Student.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Tutorial with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });


};

exports.update =(req, res) => {

    const id = req.params.id;

    Student.update(req.body, {
      where: { ID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Student was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Student with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Student with id=" + id
        });
      });
  
};


exports.delete=(req, res) =>{

    const id = req.params.id;

    Student.destroy({
      where: { ID: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete student with id=" + id
        });
      });

};
