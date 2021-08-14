const pg = require('../../configuration/ps_connection')

exports.actualizarMecanico = async function(req, res, next) {
// [req.body.sucursal], req.body.token 
    let nombres=req.body.mecanico.nombres.toUpperCase();
    let apellido1=req.body.mecanico.apellido1.toUpperCase();
    let apellido2=req.body.mecanico.apellido2.toUpperCase();
    let cedula=req.body.mecanico.cedula;
    let fecha_nacimiento=req.body.mecanico.fecha_nacimiento.toUpperCase();
    let genero=req.body.mecanico.genero;
    let cliente_id=req.body.mecanico.clienteid;
    let data =
      await pg.db_func('lealtad.ft_mant_editar_datos_cedula_cliente_experto',[nombres,apellido1,apellido2,cedula,fecha_nacimiento,genero,cliente_id] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_mant_editar_datos_cedula_cliente_experto)

}