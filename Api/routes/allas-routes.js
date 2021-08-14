let express = require('express')
let router = express.Router()
let allas = require('../controller/Allas/allas-controller')
let mdAunt = require('../middleware/middleware-authentication')

/* uso de middleware */
router.use(mdAunt.api_key)
router.use(mdAunt.content_type)
/* uso de middleware */

router.post('/getSucursales/', allas.getSucursales)
router.post('/getSucursalesListadoTiendas/', allas.getSucursalesListadoTiendas)

module.exports = router
