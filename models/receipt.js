module.exports = function (sequelize, DataTypes) {
   var Receipt = sequelize.define("Receipt", {
      
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
      },
      receipt_type: {
         type: DataTypes.STRING
      },
      category: {
         type: DataTypes.STRING
      },
      description: {
         type: DataTypes.STRING
      },
      value: {
         type: DataTypes.INTEGER
      },
      created_at: {
         type: 'TIMESTAMP',
         defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
         allowNull: false
      }
   });

   return Receipt;
};
