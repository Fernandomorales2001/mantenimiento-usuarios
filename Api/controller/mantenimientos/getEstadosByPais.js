const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.getEstadosByPais = async function(req, res, next) {
  let resp = await pg.db_func('accounts.ft_view_get_estados_pais ', [req.body.id_pais]).catch(err => {
      res.status(500).send({
          error: err,
          status: 500
      })
  })
  resp = resp[0]['ft_view_get_estados_pais']
  res.json(resp)

}
