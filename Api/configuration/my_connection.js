var config = require('./config');
var mysql = require('mysql')

exports.db_CON = async function(funcion, parametros = []) {
  return new Promise(async (resolve, reject) => {
    var connection = await mysql.createConnection(config.dbMySql);

    // connection.connect();

    // try {
    //   await connection.query(funcion, async function (error, results, fields) {
    //     if (error) throw error;
    //     resolve(results)
    //   });

    // } catch (e) {

    // } finally {
    //   connection.end();
    // }
  });
}
