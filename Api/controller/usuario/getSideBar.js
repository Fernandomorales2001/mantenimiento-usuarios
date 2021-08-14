const pg = require('../../configuration/ps_connection')
const config = require('../../configuration/config')
const mysql = require('../../configuration/my_connection')

exports.getSideBar = async function(req, res, next) {
  let error = {
    status: 'MAL'
  }

  let data =
    await pg.db_func('public.ft_proc_web_get_side_menu', [
      req.body.token
    ], req.body.token).catch(err => {
      res.status(500).send({
        status: 500,
        error: 'error al convertir objeto'
      })
    });

  if (res.statusCode != 200) return

  //Asigna el badged de la telefonia
  try {
    if (await data[0].ft_proc_web_get_side_menu['menu'].filter((item) => item.id_grupo_padre == 3 )[0]['subgrupos'].filter((item) => item.id_side_menu == 6)[0]['badge']['text'] == '0') {
      let counter = 3
         // await mysql.db_CON(`call asterisk.ft_proc_get_llamadas_logistica_count_badge();`).catch(err=>{
            
         // })
      await data[0].ft_proc_web_get_side_menu['menu'].filter((item) => item.id_grupo_padre == 3 )[0]['subgrupos'].filter((item) => {
        if (item.id_side_menu == 6) {
           item['badge']['text'] = counter[0][0].count
        }
      })
    }
  } catch (e) {}

  res.send(data[0].ft_proc_web_get_side_menu)

}
