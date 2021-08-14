let express = require('express')
let router = express.Router()
let mantenimientos = require('../controller/mantenimientos/mantenimientos.controller')
let mdAunt = require('../middleware/middleware-authentication')

/* uso de middleware */
router.use(mdAunt.api_key)
router.use(mdAunt.content_type)
    /* uso de middleware */

router.post('/obtenerListaProveedoresTransporte/', mantenimientos.obtenerListaProveedoresTransporte)
router.post('/actualizarListaProveedoresTransporte/', mantenimientos.actualizarListaProveedoresTransporte)
router.post('/getEstadosByPais/', mantenimientos.getEstadosByPais)
router.post('/getCiudadesByEstado/', mantenimientos.getCiudadesByEstado)
router.post('/guardarNuevaTarifaTransporte/', mantenimientos.guardarNuevaTarifaTransporte)
router.post('/guardarNuevoProveedorTransporte/', mantenimientos.guardarNuevoProveedorTransporte)

module.exports = router