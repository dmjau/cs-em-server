'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define(
    'employee',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      company_id: DataTypes.INTEGER,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      birth_day: DataTypes.DATE,
      employee_type: DataTypes.STRING,
      designer_type: DataTypes.STRING,
      programming_language: DataTypes.STRING
    },
    {
      tableName: 'employees'
    }
  );
  item.associate = function (models) {
    item.belongsTo(models.company, {
      as: 'company',
      foreignKey: 'company_id'
    });
  };
  return item;
};
