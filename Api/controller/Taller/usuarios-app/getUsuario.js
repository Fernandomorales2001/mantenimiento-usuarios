const pg = require('../../../configuration/ps_connection')

exports.getUsuario = async (req,res) => {
    let respuesta = {
        error:false,
        mensaje:'',
        data:null
      }
    
    console.log('OBTENIENDO USUARIOS');
    const resp = await pg.db_func('lealtad.ft_proc_dash_devuelve_usuarios_app', []);
    
    if(resp.error==true){
        respuesta.error=true
        respuesta.mensaje = resp.mensaje
    }
    else{
        respuesta.data=resp[0].ft_proc_dash_devuelve_usuarios_app
    }
    // Response sera la propiedad de la respuesta que me listara los datos
    res.json(respuesta);
};