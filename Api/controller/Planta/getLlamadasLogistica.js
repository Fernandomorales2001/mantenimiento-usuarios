const mysql = require('../../configuration/my_connection')

exports.getLlamadasLogistica = async function(req, res, next) {

  let llamadas =
    await mysql.db_CON(`call asterisk.ft_proc_llamadas_logistica("${req.body.fechaDesde}", "${req.body.fechaHasta}");`, []).catch(err=>{
      console.log(err);
    })

  let counter =
    await mysql.db_CON(`call asterisk.ft_proc_get_llamadas_logistica_count("${req.body.fechaDesde}", "${req.body.fechaHasta}");`, []).catch(err=>{
      console.log(err);
    })


    let respond = {
      count : counter[0][0].count,
      llamadas : llamadas[0]
    }

  res.send(respond)
}
