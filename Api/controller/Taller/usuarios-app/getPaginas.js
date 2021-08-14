const pg = require('../../../configuration/ps_connection')

exports.getPaginas = async (req,res) => {
    let respuesta = {
        error:false,
        mensaje:'',
        data:null
      }

    const resp = await pg.db_func('lealtad.ft_view_dash_devuelve_paginas', []);
    
    if(resp.error==true){
        respuesta.error=true
        respuesta.mensaje = resp.mensaje
    }
    else{
        respuesta.data=resp[0].ft_view_dash_devuelve_paginas
    }
    res.json(respuesta);
};