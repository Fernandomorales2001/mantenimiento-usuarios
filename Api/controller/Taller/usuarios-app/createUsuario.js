const pg = require('../../../configuration/ps_connection')

exports.createUsuario = async (req, res) => {
    let respuesta = {
        error: false,
        mensaje: '',
        data:null
    }
    
    const resp = await pg.db_func('lealtad.ft_proc_dash_insertar_usuarios', [req.body]);
    
    if (resp.error==true) {
        respuesta.error=true
        respuesta.mensaje = resp.mensaje
    }
    
    else{
        respuesta.data=resp[0].ft_proc_dash_insertar_usuarios
    }
    
    res.json(respuesta);
};

// const pg = require('../../../configuration/ps_connection')

// exports.createUsuario = async (req, res) => {
//     const {p_parametros_json} = req.body;
//       await pg.db_func('select * from ft_view_insert_empleado($1)', [p_parametros_json]);
//      res.json({
//          message: 'Usuario añadido satisfactoriamente',
//          body: {
//              user: {p_parametros_json}
//          }
//     })
// };