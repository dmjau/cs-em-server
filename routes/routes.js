const companyCtrl = require('./../controllers/companyCtrl');

module.exports = function (express) {
  const route = express.Router();

  //Company routes
  route.get('/companies', companyCtrl.get);
  route.put('/companies/:id', companyCtrl.update);

  return route;
};
