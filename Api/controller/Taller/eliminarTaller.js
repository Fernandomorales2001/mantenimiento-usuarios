const pg = require('../../configuration/ps_connection')

exports.eliminarTaller = async function(req, res, next) {

    let data =
      await pg.db_func('accounts.ft_proc_eliminar_cliente',[req.body.id_taller] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_proc_eliminar_cliente)

}
