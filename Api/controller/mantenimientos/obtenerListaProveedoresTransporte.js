const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.obtenerListaProveedoresTransporte = async function(req, res, next) {

    let data = await pg.db_func('public.ft_proc_obtener_lista_proveedores_servicio_transporte' ).catch(err => {
                  res.status(500).send({
                    status: 500,
                    error: 'error al convertir objeto'
                  })
                });

    if (res.statusCode != 200) return

    // console.log(data)

    res.json(data[0].ft_proc_obtener_lista_proveedores_servicio_transporte)

}
