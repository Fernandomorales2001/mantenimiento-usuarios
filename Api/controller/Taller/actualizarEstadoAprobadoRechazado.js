const pg = require('../../configuration/ps_connection')

exports.actualizarEstadoAprobadoRechazado = async function(req, res, next) {

    // let data = await pg.db_func('lealtad.ft_proc_aprobar_rechazar_taller', [req.body.tallerId, req.body.estado, req.body.comentario] ).catch(err => {
    let data = await pg.db_func('accounts.ft_proc_aprobar_rechazar_cliente', [req.body.id_customer, req.body.estado, req.body.comentario] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return false


    res.send(data[0].ft_proc_aprobar_rechazar_cliente)

}