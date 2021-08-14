const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.obtenerUsuarioApp = async function(req, res, next) {

  // console.log('HOLA MUNOD')
  let data =[]
     data = await pg.db_func('accounts.ft_proc_obtener_listado_usuario_app_cc')
                .catch(err => {
                  res.status(500).send({
                    status: 500,
                    error: 'error al convertir objeto'
                  })
                });

    if (res.statusCode != 200) return

   
    res.send(data[0]["ft_proc_obtener_listado_usuario_app_cc"])

}
