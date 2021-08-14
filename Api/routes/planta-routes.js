let express = require('express')
let router = express.Router()
let planta = require('../controller/Planta/planta-controller')
// let mdAunt = require('../middleware/middleware-authentication')

/* uso de middleware */
// router.use(mdAunt.db_key)
// router.use(mdAunt.api_key)
// router.use(mdAunt.token_validation)


router.post('/getLlamadasLogistica',planta.getLlamadasLogistica)

module.exports = router
