module.exports = function(sequelize, DataTypes) {
  var Budgets = sequelize.define("Budgets", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    isActual: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
