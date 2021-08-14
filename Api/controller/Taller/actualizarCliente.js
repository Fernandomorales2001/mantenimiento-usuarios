const pg = require('../../configuration/ps_connection')

exports.actualizarCliente = async function(req, res, next) {

    let data =
      await pg.db_func('accounts.ft_dash_proc_actualizar_cliente',[JSON.stringify([req.body.cliente])] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_dash_proc_actualizar_cliente)

}