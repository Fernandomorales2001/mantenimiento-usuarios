const pg = require('../../configuration/ps_connection')

exports.actualizarContacto = async function(req, res, next) {
// [req.body.sucursal], req.body.token 
    // let nombres=req.body.mecanico.nombres.toUpperCase();
    // let apellido1=req.body.mecanico.apellido1.toUpperCase();
    // let apellido2=req.body.mecanico.apellido2.toUpperCase();
    // let cedula=req.body.mecanico.cedula;
    // let fecha_nacimiento=req.body.mecanico.fecha_nacimiento.toUpperCase();
    // let genero=req.body.mecanico.genero;
    // let id_contacto=req.body.mecanico.id_contacto;
    // console.log('Datos del contacto ',req.body)
    let data =
      await pg.db_func('accounts.ft_dash_proc_actualizar_contacto',[req.body.contacto] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_dash_proc_actualizar_contacto)

}