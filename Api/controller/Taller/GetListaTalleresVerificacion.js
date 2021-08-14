const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.GetListaTalleresVerificacion = async function(req, res, next) {
// [req.body.sucursal], req.body.token

console.log('PETICION DE TALLERES', req.body.ciudad);

    let data =
      await pg.db_func('accounts.ft_view_get_estadiscticas_lista_talleres_verificar' ,[req.body.ciudad]).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_view_get_estadiscticas_lista_talleres_verificar)

}
