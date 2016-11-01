module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index');
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.get('/system', (req, res) => {
        res.render('system');
    });

};
