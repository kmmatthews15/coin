module.exports = function(sequelize, DataTypes) {

  var Budget = sequelize.define("Budget", {
    income: DataTypes.FLOAT,
    category: DataTypes.TEXT,
    food: DataTypes.FLOAT,
    rent: DataTypes.FLOAT,
    transportation: DataTypes.FLOAT,
    utilities: DataTypes.FLOAT,
    phone: DataTypes.FLOAT,
    subscriptions: DataTypes.FLOAT,
    debt: DataTypes.FLOAT,
    entertainment: DataTypes.FLOAT
  });

  return Budget;
};