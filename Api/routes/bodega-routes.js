let express = require('express')
let router = express.Router()
let bodega = require('../controller/Bodega/bodega-controller')
let mdAunt = require('../middleware/middleware-authentication')

/* uso de middleware */
router.use(mdAunt.api_key)
router.use(mdAunt.content_type)
/* uso de middleware */

router.post('/getFillRateDocumentos/', bodega.getFillRateDocumentos)
router.post('/getFillRateGuardado/', bodega.getFillRateGuardado)
router.post('/getFillRateRequisiciones/', bodega.getFillRateRequisiciones)
router.post('/getFillRateRequisicionesFiltros/', bodega.getFillRateRequisicionesFiltros)
router.post('/getFillRateDocumentosFiltros/', bodega.getFillRateDocumentosFiltros)

router.post('/GetOperacionesSolicitudes/', bodega.GetOperacionesSolicitudes)
router.post('/GetOperacionesPendientes/', bodega.GetOperacionesPendientes)
router.post('/GetOperacionesGuardado/', bodega.GetOperacionesGuardado)
router.post('/GetOperacionesCount/', bodega.GetOperacionesCount)
router.post('/GetOperacionesAlmuerzo/', bodega.GetOperacionesAlmuerzo)
router.post('/getFillRateRequisiciones/', bodega.getFillRateRequisiciones)
router.post('/getFillRateGuardado/', bodega.getFillRateGuardado)

module.exports = router
