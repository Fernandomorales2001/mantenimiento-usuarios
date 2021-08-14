const pg = require('../../../configuration/ps_connection')

exports.updateUsuario = async (req, res) => {
    const id_app_usuario = parseInt(req.params.id);
    const {usuario, password, celular, nombre, activo, fecha_caduca, es_supervisor} = req.body; 
   await pg.db_func('select * from public.ft_views_update_empleados($1, $2, $3, $4, $5, $6, $7, $8)', [
    id_app_usuario,
    usuario,
    password, 
    celular, 
    nombre, 
    activo, 
    fecha_caduca, 
    es_supervisor,
]);
    res.json('Empleado actualizado satisfactoriamente');
};