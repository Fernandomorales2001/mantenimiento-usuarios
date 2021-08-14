const pg = require('../../configuration/ps_connection')

exports.guardarNuevoProveedorTransporte = async function(req, res, next) {

    let data = await pg.db_func('public.ft_proc_insertar_nuevo_proveedor_transporte',[req.body.nuevoProveedorTransporte] )
                    .catch(err => {
                      res.status(500).send({
                        status: 500,
                        error: 'error al convertir objeto'
                      })
                    });

    if (res.statusCode != 200) return

    res.json(data[0].ft_proc_insertar_nuevo_proveedor_transporte)

}
