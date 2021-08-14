const pg = require('../../configuration/ps_connection')

exports.obtenerCliente = async function(req, res, next) {
  // console.log('object')
  let data = await pg.db_func('accounts.ft_proc_dash_obtener_cliente', [req.body.id_customer ] ).catch(err => {
                res.status(500).send({
                  status: 500,
                  error: 'error al convertir objeto'
                })
              });

  if (res.statusCode != 200) return

  // console.log(data)

  res.send(data[0].ft_proc_dash_obtener_cliente)

}
