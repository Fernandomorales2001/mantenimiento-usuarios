const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.perfilarContacto = async function(req, res, next) {
// [req.body.sucursal], req.body.token
  console.log('PERFILAR CONTACTO: ',JSON.stringify([req.body.contacto]))

  let respuesta = {
    error:false,
    mensaje:'',
    data:null
  }

  let resp= await pg.db_func('accounts.ft_proc_dash_perfilar_contacto', [JSON.stringify([req.body.contacto])]  )

  if(resp.error==true){
    respuesta.error=true
    respuesta.mensaje = resp.mensaje
  }
  else{
    respuesta.data=resp[0].ft_proc_dash_perfilar_contacto
  }

  res.json(respuesta)

}
