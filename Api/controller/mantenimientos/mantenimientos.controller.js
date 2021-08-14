let obtenerListaProveedoresTransporte = require('./obtenerListaProveedoresTransporte')
let actualizarListaProveedoresTransporte = require('./actualizarListaProveedoresTransporte')
let getEstadosByPais = require('./getEstadosByPais')
let getCiudadesByEstado = require('./getCiudadesByEstado')
let guardarNuevaTarifaTransporte = require('./guardarNuevaTarifaTransporte')
let guardarNuevoProveedorTransporte = require('./guardarNuevoProveedorTransporte')

exports.obtenerListaProveedoresTransporte = obtenerListaProveedoresTransporte.obtenerListaProveedoresTransporte
exports.actualizarListaProveedoresTransporte = actualizarListaProveedoresTransporte.actualizarListaProveedoresTransporte
exports.getEstadosByPais = getEstadosByPais.getEstadosByPais
exports.getCiudadesByEstado = getCiudadesByEstado.getCiudadesByEstado
exports.guardarNuevaTarifaTransporte = guardarNuevaTarifaTransporte.guardarNuevaTarifaTransporte
exports.guardarNuevoProveedorTransporte = guardarNuevoProveedorTransporte.guardarNuevoProveedorTransporte
