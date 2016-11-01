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
    app.get('/clients', (req, res) => {
        let clients = require('./data/clients');
        res.render('clients', { clients: clients });
    });

};
