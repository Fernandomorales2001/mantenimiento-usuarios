const pg = require('../../../configuration/ps_connection')

exports.getMunicipios = async function(req, res, next) {

  let respuesta = {
    error:false,
    mensaje:'',
    data:null
  }

  let resp = await pg.db_func('accounts.ft_view_get_ciudades_de_estado', [req.body.p_id_departamento])

  if(resp.error==true){
    respuesta.error=true
    respuesta.mensaje = resp.mensaje
  }
  else{
    respuesta.data=resp[0].ft_view_get_ciudades_de_estado
  }

  res.json(respuesta)

}