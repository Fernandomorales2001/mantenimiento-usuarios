const pg = require('../../configuration/ps_connection')

exports.actualizarListaProveedoresTransporte = async function(req, res, next) {

    let data = await pg.db_func('public.ft_proc_actualizar_proveedor_servicio_transporte',[req.body.p_proveedor, req.body.tipo_actualizacion] )
                    .catch(err => {
                      res.status(500).send({
                        status: 500,
                        error: 'error al convertir objeto'
                      })
                    });

    if (res.statusCode != 200) return

    // console.log(data)

    res.json(data[0].ft_proc_actualizar_proveedor_servicio_transporte)

}
