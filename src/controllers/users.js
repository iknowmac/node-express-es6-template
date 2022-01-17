
module.exports = function(app) { app
  .get('/api/user', function (req, res, next) {
    res.send('respond with a resource');
  });
};
