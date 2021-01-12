const { company, employee, Sequelize } = require('./../models');
const Op = Sequelize.Op;
let self = {};

//GET company data
self.get = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await company.findOne({
      attributes: ['id', 'name'],
      where: {
        id: '1'
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

//UPDATE company data
self.update = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let data = await company.update(body, {
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
