const express = require('express');
const app = express();

const helmet = require('helmet');

app.use(helmet({
  frameguard: {     // configure
    action: 'deny' 
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'trusted-cdn.com']
    }
  },
  dnsPrefetchControl: false,  // disable
  ieNoOpen: true,              // enable with default options
  noCache: true,                // enable with default options
  hidePoweredBy: true,        // enable with default options
  xssFilter: true,          // enable with default options
  noSniff: true,            // enable with default options
  hsts: {                   // enable and configure
    maxAge: 90*24*60*60, // 90 days in seconds
    force: true
  }

}));














































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
