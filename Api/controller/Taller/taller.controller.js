let obtenerUsuarios = require('./obtenerUsuarios')
let obtenerListaClientes = require('./obtenerListaClientes')
let actualizarContacto = require('./actualizarContacto')
let validarCedulaContacto = require('./validarCedulaContacto')
let perfilarContacto = require('./perfilarContacto')
let ObtenerListaTalleresCreadosAws = require('./ObtenerListaTalleresCreadosAws')
let generarActualizacionClienteCreadoAws = require('./generarActualizacionClienteCreadoAws')
let obtenerListaContactos = require('./obtenerListaContactos')
let obtenerContacto = require('./obtenerContacto')
let obtenerCliente = require('./obtenerCliente')
let actualizarCliente = require('./actualizarCliente')
let obtenerCiudadesClientesRegistrados = require('./obtenerCiudadesClientesRegistrados')
let obtenerSucursalesClientesRegistrados = require('./obtenerSucursalesClientesRegistrados')
let obtenerClientesNombreRTN = require('./obtenerClientesNombreRTN')
let obtenerClientePadre = require('./obtenerClientePadre')
// let getSucursalesListadotiendas = require('./getSucursalesListadotiendas')



let GetEstadisticasTalleres = require('./GetEstadisticasTalleres')
let GetEstadisticasTalleres_v2 = require('./GetEstadisticasTalleres_v2')
let GetEntregaTarjetasPendientes = require('./GetEntregaTarjetasPendientes')
let GetTarjetasEntregadas = require('./GetTarjetasEntregadas')
let GetListaTalleresVerificacion = require('./GetListaTalleresVerificacion')
let mandarActualizarTalleres = require('./mandarActualizarTalleres')
let GetListaCiudades = require('./GetListaCiudades')

let IndicadoresTallerLlenarFiltros = require('./IndicadoresTallerLlenarFiltros')
let IndicadoresTallerSucursalesMetaDevuelve = require('./IndicadoresTallerSucursalesMetaDevuelve')
let IndicadoresTallerSucursalesMetaActualiza = require('./IndicadoresTallerSucursalesMetaActualiza')
let IndicadoresTallerIndicadoresInicio = require('./IndicadoresTallerIndicadoresInicio')
let IndicadoresTallerFacturacionTotal = require('./IndicadoresTallerFacturacionTotal')
let IndicadoresTallerVehiculosTrabajados = require('./IndicadoresTallerVehiculosTrabajados')
let IndicadoresTallerVehiculosTrabajadosDiario = require('./IndicadoresTallerVehiculosTrabajadosDiario')
let IndicadoresTallerFacturacionTotalHoras = require('./IndicadoresTallerFacturacionTotalHoras')
let IndicadoresTallerReclamos = require('./IndicadoresTallerReclamos')
let IndicadoresTallerReclamosSistema = require('./IndicadoresTallerReclamosSistema')
let IndicadoresTallerReprocesosTecnico = require('./IndicadoresTallerReprocesosTecnico')
let IndicadoresTallerReprocesosAsesor = require('./IndicadoresTallerReprocesosAsesor')
let IndicadoresTallerCumplimientoTareasDiarias = require('./IndicadoresTallerCumplimientoTareasDiarias')
let IndicadoresTallerConfResumenDevuelve = require('./IndicadoresTallerConfResumenDevuelve')
let IndicadoresTallerConfResumenActualiza = require('./IndicadoresTallerConfResumenActualiza')
let IndicadoresTallerEmpleadosSucursal = require('./IndicadoresTallerEmpleadosSucursal')
let actualizarEstadoAprobadoRechazado = require('./actualizarEstadoAprobadoRechazado')
let actualizarMecanico = require('./actualizarMecanico')
let validarCedulaMecanico = require('./validarCedulaMecanico')
let eliminarTaller = require('./eliminarTaller')
let obtenerTalleresCustomer = require('./obtenerTalleresCustomer')
let obtenerUsuarioApp = require('./obtenerUsuarioApp')
let getPaises = require('./Ubicacion_talleres/getPaises')
let getDepartamentos = require('./Ubicacion_talleres/getDepartamentos')
let getMunicipios = require('./Ubicacion_talleres/getMunicipios')

// Mantenimiento Usuario
let getUsuario = require('./usuarios-app/getUsuario')
let getUsuarioById = require('./usuarios-app/getUsuariosById')
let createUsuario = require('./usuarios-app/createUsuario')
let updateUsuario = require('./usuarios-app/updateUsuario')
let getPaginas = require('./usuarios-app/getPaginas')

exports.obtenerUsuarios = obtenerUsuarios.obtenerUsuarios
exports.obtenerListaClientes = obtenerListaClientes.obtenerListaClientes
exports.actualizarContacto = actualizarContacto.actualizarContacto
exports.validarCedulaContacto = validarCedulaContacto.validarCedulaContacto
exports.perfilarContacto = perfilarContacto.perfilarContacto
exports.ObtenerListaTalleresCreadosAws = ObtenerListaTalleresCreadosAws.ObtenerListaTalleresCreadosAws
exports.generarActualizacionClienteCreadoAws = generarActualizacionClienteCreadoAws.generarActualizacionClienteCreadoAws
exports.obtenerListaContactos = obtenerListaContactos.obtenerListaContactos
exports.obtenerContacto = obtenerContacto.obtenerContacto
exports.obtenerCliente = obtenerCliente.obtenerCliente
exports.actualizarCliente = actualizarCliente.actualizarCliente
exports.obtenerCiudadesClientesRegistrados = obtenerCiudadesClientesRegistrados.obtenerCiudadesClientesRegistrados
exports.obtenerSucursalesClientesRegistrados = obtenerSucursalesClientesRegistrados.obtenerSucursalesClientesRegistrados
exports.getPaises = getPaises.getPaises
exports.getDepartamentos = getDepartamentos.getDepartamentos
exports.getMunicipios = getMunicipios.getMunicipios
exports.obtenerClientesNombreRTN = obtenerClientesNombreRTN.obtenerClientesNombreRTN
exports.obtenerClientePadre = obtenerClientePadre.obtenerClientePadre
// exports.getSucursalesListadotiendas = getSucursalesListadotiendas.getSucursalesListadoTiendas


exports.GetEstadisticasTalleres = GetEstadisticasTalleres.GetEstadisticasTalleres
exports.GetEstadisticasTalleres_v2 = GetEstadisticasTalleres_v2.GetEstadisticasTalleres
exports.GetEntregaTarjetasPendientes = GetEntregaTarjetasPendientes.GetEntregaTarjetasPendientes
exports.GetTarjetasEntregadas = GetTarjetasEntregadas.GetTarjetasEntregadas
exports.GetListaTalleresVerificacion = GetListaTalleresVerificacion.GetListaTalleresVerificacion
exports.mandarActualizarTalleres = mandarActualizarTalleres.mandarActualizarTalleres
exports.GetListaCiudades = GetListaCiudades.GetListaCiudades

exports.IndicadoresTallerLlenarFiltros = IndicadoresTallerLlenarFiltros.IndicadoresTallerLlenarFiltros
exports.IndicadoresTallerSucursalesMetaActualiza = IndicadoresTallerSucursalesMetaActualiza.IndicadoresTallerSucursalesMetaActualiza
exports.IndicadoresTallerSucursalesMetaDevuelve = IndicadoresTallerSucursalesMetaDevuelve.IndicadoresTallerSucursalesMetaDevuelve
exports.IndicadoresTallerIndicadoresInicio = IndicadoresTallerIndicadoresInicio.IndicadoresTallerIndicadoresInicio
exports.IndicadoresTallerFacturacionTotal = IndicadoresTallerFacturacionTotal.IndicadoresTallerFacturacionTotal
exports.IndicadoresTallerVehiculosTrabajados = IndicadoresTallerVehiculosTrabajados.IndicadoresTallerVehiculosTrabajados
exports.IndicadoresTallerVehiculosTrabajadosDiario = IndicadoresTallerVehiculosTrabajadosDiario.IndicadoresTallerVehiculosTrabajadosDiario
exports.IndicadoresTallerFacturacionTotalHoras = IndicadoresTallerFacturacionTotalHoras.IndicadoresTallerFacturacionTotalHoras
exports.IndicadoresTallerReclamos = IndicadoresTallerReclamos.IndicadoresTallerReclamos
exports.IndicadoresTallerReclamosSistema = IndicadoresTallerReclamosSistema.IndicadoresTallerReclamosSistema
exports.IndicadoresTallerReprocesosTecnico = IndicadoresTallerReprocesosTecnico.IndicadoresTallerReprocesosTecnico
exports.IndicadoresTallerReprocesosAsesor = IndicadoresTallerReprocesosAsesor.IndicadoresTallerReprocesosAsesor
exports.IndicadoresTallerCumplimientoTareasDiarias = IndicadoresTallerCumplimientoTareasDiarias.IndicadoresTallerCumplimientoTareasDiarias
exports.IndicadoresTallerConfResumenDevuelve = IndicadoresTallerConfResumenDevuelve.IndicadoresTallerConfResumenDevuelve
exports.IndicadoresTallerConfResumenActualiza = IndicadoresTallerConfResumenActualiza.IndicadoresTallerConfResumenActualiza
exports.IndicadoresTallerEmpleadosSucursal = IndicadoresTallerEmpleadosSucursal.IndicadoresTallerEmpleadosSucursal
exports.actualizarEstadoAprobadoRechazado = actualizarEstadoAprobadoRechazado.actualizarEstadoAprobadoRechazado
exports.actualizarMecanico = actualizarMecanico.actualizarMecanico
exports.validarCedulaMecanico = validarCedulaMecanico.validarCedulaMecanico
exports.eliminarTaller = eliminarTaller.eliminarTaller
exports.obtenerTalleresCustomer = obtenerTalleresCustomer.obtenerTalleresCustomer
exports.obtenerUsuarioApp = obtenerUsuarioApp.obtenerUsuarioApp

// Mantenimiento de Usuario
exports.getUsuario = getUsuario.getUsuario
exports.getUsuarioById = getUsuarioById.getUsuarioById
exports.createUsuario = createUsuario.createUsuario
exports.updateUsuario = updateUsuario.updateUsuario
exports.getPaginas = getPaginas.getPaginas