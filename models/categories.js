module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Categories", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 50]
      }
    }
  });

  Categories.associate = function(models) {
    Categories.hasMany(models.Budgets, {
      onDelete: "cascade"
    });
  };

  return Categories;
};
