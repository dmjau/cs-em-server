const { company, employee, Sequelize } = require('./../models');
const Op = Sequelize.Op;
let self = {};

//GET all employees
self.getAll = async (req, res) => {
  try {
    let data = await employee.findAll({
      attributes: [
        'id',
        'company_id',
        'first_name',
        'last_name',
        'birth_day',
        'employee_type',
        'designer_type',
        'programming_language'
      ],
      include: [
        {
          model: company,
          as: 'company',
          attributes: ['id', 'name']
        }
      ]
    });
    return res.json({
      data: data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    });
  }
};

//GET employee by id
self.getById = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await employee.findOne({
      attributes: [
        'id',
        'company_id',
        'first_name',
        'last_name',
        'birth_day',
        'employee_type',
        'designer_type',
        'programming_language'
      ],
      include: [
        {
          model: company,
          as: 'company',
          attributes: ['id', 'name']
        }
      ],
      where: {
        id: id
      }
    });
    return res.json({
      data: data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    });
  }
};

//POST new employee
self.register = async (req, res) => {
  try {
    let body = req.body;
    let data = await employee.create({
      company_id: body.company_id,
      first_name: body.first_name,
      last_name: body.last_name,
      birth_day: body.birth_day,
      employee_type: body.employee_type,
      designer_type: body.designer_type,
      programming_language: body.programming_language
    });
    return res.json({
      data: data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    });
  }
};

//UPDATE employee by id
self.updateEmp = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await employee.update(body, {
      where: {
        id: id
      }
    });
    return res.json({
      data: data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    });
  }
};

//DELETE employee by id
self.deleteEmp = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await employee.destroy({
      where: {
        id: id
      }
    });
    return res.json({
      data: data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      data: error
    });
  }
};

module.exports = self;
