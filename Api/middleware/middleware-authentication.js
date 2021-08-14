let config = require('../configuration/config')
let pg = require('../configuration/ps_connection')

module.exports.content_type = function(req, res, next) {
  if (req.get('content-type') == 'application/json') {
    next()
  } else {
    res.status(403).send('Error de headers mal enviadas')
  }
}

module.exports.api_key = function(req, res, next) {
    if (req.get('Authorization') == config.app.api_key) {
      next()
    } else {
      res.status(401).send('Error de autentificacion')
    }
}
