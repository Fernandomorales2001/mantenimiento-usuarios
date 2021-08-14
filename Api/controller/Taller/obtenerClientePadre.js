const pg = require('../../configuration/ps_connection')

exports.obtenerClientePadre = async function(req, res, next) {
  let respuesta = {
    error:false,
    mensaje:'',
    data:null
  }

  let resp= await pg.db_func('accounts.ft_proc_devuelve_data_cliente_padre', [req.body.p_id_cliente]  )

  if(resp.error==true){
    respuesta.error=true
    respuesta.mensaje = resp.mensaje
  }
  else{
    respuesta.data=resp[0].ft_proc_devuelve_data_cliente_padre
  }

  res.json(respuesta)

}
