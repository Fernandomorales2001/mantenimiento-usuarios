const pg = require('../../../configuration/ps_connection')

exports.getPaises = async function(req, res, next) {

  let respuesta = {
    error:false,
    mensaje:'',
    data:null
  }

  let resp = await pg.db_func('accounts.ft_devuelve_paises_accounts', [])

  if(resp.error==true){
    respuesta.error=true
    respuesta.mensaje = resp.mensaje
  }
  else{
    respuesta.data=resp[0].ft_devuelve_paises_accounts
  }

  res.json(respuesta)

}
