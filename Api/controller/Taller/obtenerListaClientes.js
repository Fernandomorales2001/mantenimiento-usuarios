const pg = require('../../configuration/ps_connection')

exports.obtenerListaClientes = async function(req, res, next) {
// console.log('object')
    let data = await pg.db_func('accounts.ft_proc_dash_obtener_listado_clientes', [req.body.fecha_desde, req.body.fecha_hasta, req.body.id_usuario, req.body.estado,req.body.id_ciudad, req.body.sucursal ] )

    if (res.statusCode != 200) return
    
    res.send(data[0].ft_proc_dash_obtener_listado_clientes)

}
