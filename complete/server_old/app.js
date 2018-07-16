const express     = require('express'),
      bodyParser  = require('body-parser')
      controllers = require('./controllers'),
    //    cors = require('cors'),
      db          = require('./helpers/database')


     

      // use it before all route definitions

      
 const app = express()
//      // Add headers
//      app.use(function (req, res, next) {

//         // Website you wish to allow to connect
//         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3006');
    
//         // Request methods you wish to allow
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
//         // Request headers you wish to allow
//         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
//         // Set to true if you need the website to include cookies in the requests sent
//         // to the API (e.g. in case you use sessions)
//         res.setHeader('Access-Control-Allow-Credentials', true);
    
//         // Pass to next layer of middleware
//         next();
//     });
// app.use(cors({origin: 'http://localhost:3006'}));
app.use(bodyParser.json())
app.use(controllers)
app.get('/', (req, res) => {
    res.send('hello')
})
app.listen(3000)
