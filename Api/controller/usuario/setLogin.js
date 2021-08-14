const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')
var jwt = require('jwt-simple');

exports.setLogin = async function(req, res, next) {
  let error = {
    status: 'MAL'
  }

  let data = await pg.db_func('app_gerencia.ft_prod_get_login', [req.body.user, req.body.pass])

  if (data != 'ERROR') {
    if (data[0]["ft_prod_get_login"][0]["data_empleado"] == null) {
      res.send(error)
    } else {
      let token = await jwt.encode(data[0]["ft_prod_get_login"][0], config.app.secret, 'HS384')

      await pg.db_func('public.ft_proc_web_registrar_token', [
          token,
          data[0]["ft_prod_get_login"][0]['data_empleado']['codigo_empleado']
      ], token)

      let vRespuesta={
        token:token,
        sucursal:data[0]["ft_prod_get_login"][0]['data_empleado']['sucursal'],
        multi_sucursal:data[0]["ft_prod_get_login"][0]['multi_sucursal']
      } 

      res.send(vRespuesta)
    }
    return
  } else {
    res.send(error)
    return
  }

}
