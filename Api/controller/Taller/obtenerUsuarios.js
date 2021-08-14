const pg = require('../../configuration/ps_connection')

exports.obtenerUsuarios = async function(req, res, next) {
    let resp = await pg.db_func('accounts.ft_proc_obtener_usuarios_taller')

    resp= resp[0].ft_proc_obtener_usuarios_taller
    
    res.json(resp)

}
