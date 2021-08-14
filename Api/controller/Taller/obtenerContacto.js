const pg = require('../../configuration/ps_connection')

exports.obtenerContacto = async function(req, res, next) {

  // console.log('HOLA MUNOD')
    let data = await pg.db_func('accounts.ft_proce_obtener_contacto_para_perfilar',[req.body.id_contacto])
                .catch(err => {
                  res.status(500).send({
                    status: 500,
                    error: 'error al convertir objeto'
                  })
                });

    if (res.statusCode != 200) return

    // console.log(data)

    res.send(data[0].ft_proce_obtener_contacto_para_perfilar)

}
