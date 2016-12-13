/* GET home page. */
module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Express' });
    });

    app.get('/users', function(req, res, next) {
        res.send('respond with a resource');
    });
};
