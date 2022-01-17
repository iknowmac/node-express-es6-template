
module.exports = function(app) { app
  .get('/api', function (req, res, next) {
    res.render('index', { title: 'Express' });
  });
};
