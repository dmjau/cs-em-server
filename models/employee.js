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
  employee.associate = function (models) {
    employee.belongsTo(models.company, {
      as: 'company',
      foreignKey: 'company_id'
    });
  };
  return employee;
};
