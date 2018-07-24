const express     = require('express'),
      bodyParser  = require('body-parser')
      controllers = require('./controllers'),
     
    //    cors = require('cors'),
      db          = require('./helpers/database')

         
 const app = express()


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})


app.use(bodyParser.json({limit: '500mb'}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
// app.use(bodyParser.json())
app.use(controllers)
// app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send('hello');
})



console.log('server listening on port 3000');
app.listen(3000);
