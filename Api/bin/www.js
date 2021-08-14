var app = require('../app');
var debug = require('debug')('api-allas:server');
var https = require('http');
// var https = require('https');
var config = require('../configuration/config');
const fs = require('fs');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || config.app.port);
app.set('port', port);

/**
 * Create HTTP server.
 */

 // var server = https.createServer({
 //   cert: fs.readFileSync('./certificados/5c7bc56d5491d5db.crt'),
 //   ca: fs.readFileSync('./certificados/gd_bundle-g2-g1.crt'),
 //   key: fs.readFileSync('./certificados/server.key')
 // }, app);
 var server = https.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.setTimeout(999999999);
server.listen(port, config.app.host);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      //  console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      //  console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  debug('Listening on ' + bind);
}
