module.exports = function(sequelize, DataTypes) {
  var Budgets = sequelize.define("Budgets", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2)
    },
    isActual: {
      type: DataTypes.BOOLEAN
    }
  });

  Budgets.associate = function(models) {
    Budgets.belongsTo(models.Accounts, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Budgets;
};
