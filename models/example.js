module.exports = function(sequelize, DataTypes) {
  var Budget = sequelize.define("Budget", {
    username: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Budget;
};