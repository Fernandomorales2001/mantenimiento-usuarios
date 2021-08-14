const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.ObtenerListaTalleresCreadosAws = async function(req, res, next) {

  // console.log('HOLA MUNOD')
  let data =[]
     data = await pg.db_func('accounts.ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc',[req.body.p_fecha_desde,req.body.p_fecha_hasta])
                .catch(err => {
                  res.status(500).send({
                    status: 500,
                    error: 'error al convertir objeto'
                  })
                });

    if (res.statusCode != 200) return

    console.log(data[0]["ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc"]);

  if(data[0]["ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc"]!=null){
    for(let i=0; i<data[0]["ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc"].length; i++){
      data[0]["ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc"][i]["direcciones"]= 
      JSON.parse(data[0]["ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc"][i]["direcciones"])[0]["direccion"];
    
      
    }
  }
   
    res.send(data[0]["ft_proc_obtener_listado_clientes_tipo_taller_creados_aws_cc"])

}
