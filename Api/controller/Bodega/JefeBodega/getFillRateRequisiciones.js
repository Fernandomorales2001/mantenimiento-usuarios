const pg = require('../../../configuration/ps_connection')
const config = require('../../../configuration/config')

exports.getFillRateRequisiciones = async function(req, res, next) {

  let data =
    await pg.db_func('public.ft_proc_web_fill_rate_requisiciones', [
      req.body.token,
      req.body.mes,
      req.body.sucursal
    ], req.body.token).catch(err => {
      res.status(500).send({
        status: 500,
        error: 'error al convertir objeto'
      })
    });

  if (res.statusCode != 200) return

  res.send(data[0].ft_proc_web_fill_rate_requisiciones)
}
