module.exports = function(sequelize, DataTypes) {
  var Budgets = sequelize.define("Budget", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2)
    },
    createdOn: {
      type: DataTypes.DATE
    }
  });

  Budgets.associate = function(models) {
    Budgets.belongsToMany(models.Accounts, {
      foreignKey: {
        allowNull: false
      }
    });

    Budgets.belongsTo(models.Categories, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Budgets;
};
