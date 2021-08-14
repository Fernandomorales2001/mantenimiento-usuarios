const pg = require('../../configuration/ps_connection')

exports.getSucursalesListadoTiendas = async function(req, res, next) {

  let respuesta = {
    error:false,
    mensaje:'',
    data:null
  }

  let resp = await pg.db_func('api_facturacion.ft_get_sucursal_listado_tienda', [ req.body.v_sucursal])

  if(resp.error==true){
    respuesta.error=true
    respuesta.mensaje = resp.mensaje
  }
  else{
    respuesta.data=resp[0].ft_get_sucursal_listado_tienda
  }

  res.json(respuesta)

}
