const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.mandarActualizarTalleres = async function(req, res, next) {
// [req.body.sucursal], req.body.token

console.log(req.body);

    let data =
      await pg.db_func('accounts.ft_proc_app_mandar_actualizar_cliente', JSON.stringify(req.body)  ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_proc_app_mandar_actualizar_cliente)

}
