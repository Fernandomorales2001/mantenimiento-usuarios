// Imports de funciones
let getFillRateDocumentos = require('./JefeBodega/getFillRateDocumentos')
let getFillRateGuardado = require('./JefeBodega/getFillRateGuardado')
let getFillRateRequisiciones = require('./JefeBodega/getFillRateRequisiciones')
let getFillRateRequisicionesFiltros = require('./JefeBodega/getFillRateRequisicionesFiltros')
let getFillRateDocumentosFiltros = require('./JefeBodega/getFillRateDocumentosFiltros')

let GetOperacionesAlmuerzo = require('./Operacion/GetOperacionesAlmuerzo')
let GetOperacionesCount = require('./Operacion/GetOperacionesCount')
let GetOperacionesGuardado = require('./Operacion/GetOperacionesGuardado')
let GetOperacionesPendientes = require('./Operacion/GetOperacionesPendientes')
let GetOperacionesSolicitudes = require('./Operacion/GetOperacionesSolicitudes')

//Exports encabezado de funciones
exports.getFillRateDocumentos = getFillRateDocumentos.getFillRateDocumentos
exports.getFillRateGuardado = getFillRateGuardado.getFillRateGuardado
exports.getFillRateRequisiciones = getFillRateRequisiciones.getFillRateRequisiciones
exports.getFillRateRequisicionesFiltros = getFillRateRequisicionesFiltros.getFillRateRequisicionesFiltros
exports.getFillRateDocumentosFiltros = getFillRateDocumentosFiltros.getFillRateDocumentosFiltros

exports.GetOperacionesAlmuerzo = GetOperacionesAlmuerzo.GetOperacionesAlmuerzo
exports.GetOperacionesCount = GetOperacionesCount.GetOperacionesCount
exports.GetOperacionesGuardado = GetOperacionesGuardado.GetOperacionesGuardado
exports.GetOperacionesPendientes = GetOperacionesPendientes.GetOperacionesPendientes
exports.GetOperacionesSolicitudes = GetOperacionesSolicitudes.GetOperacionesSolicitudes
