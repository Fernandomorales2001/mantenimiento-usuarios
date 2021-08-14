const pg = require('../../configuration/ps_connection')

exports.obtenerCiudadesClientesRegistrados = async function(req, res, next) {
    let resp = await pg.db_func('accounts.ft_proc_dash_obtener_ciudades_clientes_registrados_app')

    resp= resp[0].ft_proc_dash_obtener_ciudades_clientes_registrados_app
    
    res.json(resp)

}
