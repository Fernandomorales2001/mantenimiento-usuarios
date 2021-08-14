const pg = require('../../configuration/ps_connection')

exports.obtenerClientesNombreRTN = async function(req, res, next) {

  // console.log('HOLA MUNOD')
    let data = await pg.db_func('accounts.ft_proc_buscar_clientes',[req.body.termino_busqueda])
                .catch(err => {
                  res.status(500).send({
                    status: 500,
                    error: 'error al convertir objeto'
                  })
                });

    if (res.statusCode != 200) return

    // console.log(data)

    res.send(data[0].ft_proc_buscar_clientes)

}
