const pg = require('../../../configuration/ps_connection')

exports.getDepartamentos = async function(req, res, next) {

  let respuesta = {
    error:false,
    mensaje:'',
    data:null
  }

  let resp = await pg.db_func('accounts.ft_view_get_estados_pais', [ req.body.p_id_pais])

  if(resp.error==true){
    respuesta.error=true
    respuesta.mensaje = resp.mensaje
  }
  else{
    respuesta.data=resp[0].ft_view_get_estados_pais
  }

  res.json(respuesta)

}