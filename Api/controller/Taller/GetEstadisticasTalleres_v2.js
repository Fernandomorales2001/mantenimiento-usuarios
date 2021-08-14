const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.GetEstadisticasTalleres = async function(req, res, next) {
// [req.body.sucursal], req.body.token

console.log(req.body.fecha_desde, req.body.fecha_hasta, req.body.id_usuario);
  console.log('estado',req.body.estado)
    let data =
      await pg.db_func('lealtad.ft_view_proc_estadisticas_talleres_registrados_v2', [req.body.fecha_desde, req.body.fecha_hasta, req.body.id_usuario, req.body.estado ] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_view_proc_estadisticas_talleres_registrados_v2)

}
