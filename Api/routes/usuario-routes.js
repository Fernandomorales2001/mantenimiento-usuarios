let express = require('express')
let router = express.Router()
let usuario = require('../controller/usuario/usuario-controller')
let mdAunt = require('../middleware/middleware-authentication')

/* uso de middleware */
router.use(mdAunt.api_key)
router.use(mdAunt.content_type)
/* uso de middleware */

router.post('/login/', usuario.setLogin)
router.post('/getSideBar/', usuario.getSideBar)
router.post('/checkGuard/', usuario.checkGuard)

module.exports = router
