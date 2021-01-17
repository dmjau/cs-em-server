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
          employee_type: 'developer',
          designer_type: null,
          programming_language: 'Kotlin'
        },
        {
          company_id: '1',
          first_name: 'Ana',
          last_name: 'Suarez',
          birth_day: '1998-02-22',
          employee_type: 'developer',
          designer_type: null,
          programming_language: 'Java'
        },
        {
          company_id: '1',
          first_name: 'Matias',
          last_name: 'Kruk',
          birth_day: '1995-09-24',
          employee_type: 'designer',
          designer_type: 'Web',
          programming_language: null
        },
        {
          company_id: '1',
          first_name: 'Nicolas',
          last_name: 'Alvarez',
          birth_day: '1991-4-22',
          employee_type: 'designer',
          designer_type: 'Web',
          programming_language: null
        },
        {
          company_id: '1',
          first_name: 'Carolina',
          last_name: 'Truts',
          birth_day: '2001-08-02',
          employee_type: 'designer',
          designer_type: 'Graphic',
          programming_language: null
        },
        {
          company_id: '1',
          first_name: 'Jose',
          last_name: 'Rassin',
          birth_day: '1987-11-24',
          employee_type: 'designer',
          designer_type: 'Web',
          programming_language: null
        },
        {
          company_id: '1',
          first_name: 'Miguel',
          last_name: 'Desamer',
          birth_day: '1996-10-22',
          employee_type: 'developer',
          designer_type: null,
          programming_language: 'JavaScript'
        },
        {
          company_id: '1',
          first_name: 'Ramon',
          last_name: 'Testa',
          birth_day: '1990-06-18',
          employee_type: 'developer',
          designer_type: null,
          programming_language: 'IOs'
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
