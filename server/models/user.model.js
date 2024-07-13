
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [3, 35],
      },
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      isEmail: true,
    },
    role: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};