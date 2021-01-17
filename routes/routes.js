const companyCtrl = require('./../controllers/companyCtrl');
const employeeCtrl = require('./../controllers/employeeCtrl');

module.exports = function (express) {
  const route = express.Router();

  //Company routes
  /* GET all companies */
  route.get('/companies', companyCtrl.get);
  /* UPDATE company by id */
  route.patch('/companies/:id', companyCtrl.update);

  //Employees routes
  /* GET all employees */
  route.get('/employees', employeeCtrl.getAll);
  /* GET one employee by id */
  route.get('/employees/:id', employeeCtrl.getById);
  /* POST a new employee */
  route.post('/employees', employeeCtrl.register);
  /* UPDATE employee by id */
  route.patch('/employees/:id', employeeCtrl.updateEmp);
  /* DELETE employee by id */
  route.delete('/employees/:id', employeeCtrl.deleteEmp);

  return route;
};
