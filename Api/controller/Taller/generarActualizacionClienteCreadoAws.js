const pg = require('../../configuration/ps_connection')

exports.generarActualizacionClienteCreadoAws = async function(req, res, next) {
  let id_customer;

  if(req.body.seleccionados){
    id_customer=req.body.id_customer.id_customer
  }else{
    id_customer=req.body.id_customer
  }
  console.log('id_customer ',id_customer)
    // let data = await pg.db_func('lealtad.ft_proc_aprobar_rechazar_taller', [req.body.tallerId, req.body.estado, req.body.comentario] ).catch(err => {
    // let data = await pg.db_func('accounts.ft_proc_agregar_cliente_campania_actualizacion', [req.body.id_customer] ).catch(err => {
    let data ;
    // if(req.body.seleccionarTodos){

    //   data = await pg.db_func('accounts.ft_proc_agregar_cliente_campania_actualizacion', [req.body.id_customer, req.body.id_usuario_app] ).catch(err => {
    //     res.status(500).send({
    //       status: 500,
    //       error: 'error al convertir objeto'
    //     })
    //   });
    // if (res.statusCode != 200) return false
    // res.send(data[0].ft_proc_agregar_cliente_campania_actualizacion_cc)
    // }else{

      data = await pg.db_func('accounts.ft_proc_agregar_cliente_campania_actualizacion_cc', [id_customer, req.body.id_usuario_app] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });
    if (res.statusCode != 200) return false
    res.send(data[0].ft_proc_agregar_cliente_campania_actualizacion_cc)
    // }
   

   

}