const pg = require('../../configuration/ps_connection')

exports.validarCedulaContacto = async function(req, res, next) {

  console.log('id_contacto ', req.body)

    let data =
      await pg.db_func('accounts.ft_mant_validar_identificacion_contacto',[req.body.id_contacto] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_mant_validar_identificacion_contacto)

}