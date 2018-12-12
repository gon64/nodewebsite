const express = require('express');
const app = express();


// settings
app.set('port', 4000);
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/')
app.use(express.static(__dirname + '/public/'))
// middlewares

//routes
app.use(require('./routes/index'));


// static files

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})