const pg = require('../configuration/ps_connection')
let request = require('request')
let config = require('../configuration/config')
var _ = require('lodash');
async function catalogador() {

  var db = await {
    user: 'usuario_servidor',
    clave: 'server_user_#$%.1234567890'
  }
  var id_notificacion = []
  let compra = await pg.db_CON(db, 'app_gerencia.ft_proc_notificaciones')
  if (compra != 'ERROR') {
    id_notificacion = compra
  }

  for (let i = 0; i < id_notificacion.length; i++) {

    var body = {
      id_pagina: id_notificacion[i].pagina,
      id_fac_orden: id_notificacion[i].id,
      descripcion: id_notificacion[i].nombre
    }

    var options = {
      method: 'POST',
      url: `http://www.allasexpress.com:${config.app.port}/api/noti/noti`,
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json'
      },
      body: body,
      json: true
    };

    request(options, function(error, response, body) {
      if (error) throw new Error(error);
      let update = pg.db_CON(db, 'app_gerencia.ft_proc_actualiza_estado_notificacion', [id_notificacion[i].id, id_notificacion[i].pagina])
    });

  }
}

setInterval(function() {
  catalogador()
}, 3000);
