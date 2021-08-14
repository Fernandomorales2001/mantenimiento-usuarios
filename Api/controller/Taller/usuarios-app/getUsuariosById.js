const pg = require('../../../configuration/ps_connection')

exports.getUsuarioById = async (req, res) => {
    const id_app_usuario = parseInt(req.params.id);
    const response = await pg.db_func('SELECT * FROM lealtad.ft_proc_dash_devuelve_usuarios_id($1)', [id_app_usuario]);
    res.json(response.rows[0]);
}
