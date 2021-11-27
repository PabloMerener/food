const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('diet', {
    name: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
