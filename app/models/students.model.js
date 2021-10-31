module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      Name: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      RegisterDate: {
        type: Sequelize.DATE 
      }
    });
  
    return Student;
  };