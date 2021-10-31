module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      Email: {
        type: Sequelize.STRING,
        primaryKey: true 
      },
      Password: {
        type: Sequelize.STRING
      },
      Name: {
        type: Sequelize.STRING
      },
      Phonenumber: {
        type: Sequelize.BIGINT
      }
    });
  
    return User;
  };