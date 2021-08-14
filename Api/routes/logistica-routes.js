let express = require('express')
let router = express.Router()
let logistica = require('../controller/Logistica/logistica-controller')
let mdAunt = require('../middleware/middleware-authentication')

/* uso de middleware */
router.use(mdAunt.api_key)
router.use(mdAunt.content_type)
/* uso de middleware */

router.post('/getAportaciones/', logistica.aportaciones)
router.post('/getListasPrecio/', logistica.listasPrecio)
router.post('/getProductos/', logistica.productos)
router.post('/getTelefonia/', logistica.telefonia)

module.exports = router
