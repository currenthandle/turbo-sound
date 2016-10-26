let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

// set view location
app.set('views', './views');
// set template engine to ejs
app.set('view engine', 'ejs');

// bind routes to app
require('./routes')(app);

// set static assest location
app.use(express.static(__dirname + '/public'));

// listen on PORT
app.listen(PORT, () => console.log('Server running on port', PORT));
