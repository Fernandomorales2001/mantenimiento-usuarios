const pg = require('../../../configuration/ps_connection')
const config = require('../../../configuration/config')

exports.getFillRateRequisicionesFiltros = async function(req, res, next) {

  let data =
    await pg.db_func('public.ft_proc_web_fill_rate_requisiciones_filter', [
      req.body.token,
      req.body.mes,
      req.body.sucursal,
      JSON.stringify(req.body.filtros)
    ], req.body.token).catch(err => {
      res.status(500).send({
        status: 500,
        error: 'error al convertir objeto'
      })
    });

  if (res.statusCode != 200) return

  res.send(data[0].ft_proc_web_fill_rate_requisiciones_filter)
}
