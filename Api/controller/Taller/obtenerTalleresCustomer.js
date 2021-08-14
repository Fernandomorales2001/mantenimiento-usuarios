const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.obtenerTalleresCustomer = async function(req, res, next) {

  // console.log('HOLA MUNOD')
  let  =[]
     data = await pg.db_func('accounts.ft_proc_obtener_listado_clientes_talleres_aws_cc',[req.body.p_id_customer])
                .catch(err => {
                  res.status(500).send({
                    status: 500,
                    error: 'error al convertir objeto'
                  })
                });

    if (res.statusCode != 200) return

    if(data[0]["ft_proc_obtener_listado_clientes_talleres_aws_cc"][0]["contactos"]!=null){
      data[0]["ft_proc_obtener_listado_clientes_talleres_aws_cc"][0]["contactos"].forEach(item=>{
        if(item.telefono==null){
          item.telefono=[{telefono: "SIN TELEFONO", validado: false}]
        }
      })
    }
  

   
    res.send(data[0]["ft_proc_obtener_listado_clientes_talleres_aws_cc"])

}
