const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.GetEntregaTarjetasPendientes = async function(req, res, next) {
// [req.body.sucursal], req.body.token
    let data =
      await pg.db_func('accounts.ft_proc_dash_obtener_tarjetas_pendientes').catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_proc_dash_obtener_tarjetas_pendientes)

}
