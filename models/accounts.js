module.exports = function(sequelize, DataTypes) {

  var Accounts = sequelize.define("Accounts", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 30],
        args: 3,
        msg: "Username must be at least 3 characters"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [5, 140],
        isEmail: {
          msg: "Must be valid email address"
        }
      }
    }
  });

  Accounts.associate = function(models) {

    Accounts.hasMany(models.Budget, {
      onDelete: "cascade"
    });
  }

  return Accounts;
}