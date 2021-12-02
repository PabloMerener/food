const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      unique: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    dish_overview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {min: 0, max: 100}      
    },
    health_score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {min: 0, max: 100}      
    },
    step_by_step: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
};
