const pg = require('../../configuration/ps_connection')

exports.validarCedulaMecanico = async function(req, res, next) {

    let data =
      await pg.db_func('lealtad.ft_mant_validar_cedula_cliente_experto',[req.body.clienteid] ).catch(err => {
        res.status(500).send({
          status: 500,
          error: 'error al convertir objeto'
        })
      });

    if (res.statusCode != 200) return


    res.send(data[0].ft_mant_validar_cedula_cliente_experto)

}