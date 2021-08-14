const pg = require('../../configuration/ps_connection')


exports.getCiudadesByEstado = async function(req, res, next) {
    let resp = await pg.db_func('accounts.ft_view_get_ciudades_de_estado ', [req.body.id_estado]).catch(err => {
        res.status(500).send({
            error: err,
            status: 500
        })
    })
    resp = resp[0]['ft_view_get_ciudades_de_estado']
    res.json(resp)

}