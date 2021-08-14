const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.getSucursales = async function(req, res, next) {

  // let data =
  //   await pg.db_func('public.ft_proc_web_get_side_menu', [
  //     req.body.token
  //   ], req.body.token).catch(err => {
  //     res.status(500).send({
  //       status: 500,
  //       error: 'error al convertir objeto'
  //     })
  //   });
  //
  // if (res.statusCode != 200) return
  //
  // res.send(data[0].ft_proc_web_get_side_menu)

  res.send([{
    sucursal:"00",
    descripcion:"00 - Bodega Principal"
  },
  {
    sucursal:"04",
    descripcion:"04 - San Pedro Sula"
  },
  {
    sucursal:"06",
    descripcion:"06 - S.P.S 3ra"
  },
  {
    sucursal:"07",
    descripcion:"07 - S.P.S Las Acacias"
  },
  {
    sucursal:"01",
    descripcion:"01 - La Ceiba"
  },
  {
    sucursal:"05",
    descripcion:"05 - Tegucigalpa"
  },
  {
    sucursal:"08",
    descripcion:"08 - Comayaguela"
  }])
}
