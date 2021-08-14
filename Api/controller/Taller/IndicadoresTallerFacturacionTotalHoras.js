const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')

exports.IndicadoresTallerFacturacionTotalHoras = async function(req, res, next) {
    // [req.body.sucursal], req.body.token

    console.log(req.body);

    let data =
        await pg.db_func('area_servicio.ft_proc_indicadores_taller_facturacion_total_horas', JSON.stringify(req.body)).catch(err => {
            res.status(500).send({
                status: 500,
                error: 'error al convertir objeto'
            })
        });

    if (res.statusCode != 200) return


    res.send(data[0].ft_proc_indicadores_taller_facturacion_total_horas)

}