'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Employees',
      [
        {
          company_id: '1',
          first_name: 'Pedro',
          last_name: 'Gonzales',
          birth_day: '2000-01-12',
          employee_type: 'programmer',
          designer_type: null,
          programming_language: 'PHP'
        },
        {
          company_id: '1',
          first_name: 'Ana',
          last_name: 'Suarez',
          birth_day: '1998-02-22',
          employee_type: 'programmer',
          designer_type: null,
          programming_language: 'Java'
        },
        {
          company_id: '1',
          first_name: 'Matias',
          last_name: 'Kruk',
          birth_day: '1995-09-24',
          employee_type: 'Designer',
          designer_type: 'Web',
          programming_language: null
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
