var config = require('./config');
var promise = require('bluebird');
var options = {
  promiseLib: promise
};
var pgp = require('pg-promise')(options);
var jwt = require('jwt-simple');

exports.db_func = async function(funcion, parametros = [], p_token = config.app.token_login) {
  return new Promise(async (resolve, reject) => {
    //Deciframos el token
    let auth = await jwt.decode(p_token, config.app.secret, 'HS384')
    config.db.user = auth.db_config.user
    config.db.password = auth.db_config.clave

    var db = await pgp(config.db);
    
    var respuesta = await db.func(funcion, parametros).catch(err => {
      console.log(err)
      resolve({
        error:true,
        mensaje:err.message
      })
    }).finally(
      pgp.end()
    )
    resolve(respuesta)
  });
}
