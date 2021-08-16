export interface Cliente {
    nombre_comercial:          string;
    nombre_legal:              string;
    nombre_legal_comercial:    string;
    estado_aprobado:           boolean;
    fecha_hora_creado:         String;
    id_taller:                 number;
    id_contacto_experto:       number;
    contacto_experto:          string;
    rtn:                       string;
    longitud:                  number;
    latitud:                   number;
    id_direccion:              number;
    barrio_colonia_zona:       string;
    direccion_calle_avenida:   string;
    direccion_referencia:      string;
    nombre_usuario:            string;
    ciudad:                    string;
    departamento:              string;
    pais:                      string;
    id_usuario:                number;
    correo:                    string;
    horario_semanal_inicio:    string;
    horario_semanal_fin:       string;
    horario_fin_semana_inicio: string;
    horario_fin_semana_fin:    string;
    seleccionado:              Boolean;
    comentario_rechazado:      string;
    telefonos:                 Telefono[];
    horarios:                  Horario[];
    empleados:                 Empleado[];
    mecanicos:                 Mecanico[];
    galeria:                   Galeria[];
    sucursal_asignada:         string;
    id_estado:                 number;
    id_pais:                   number;
    id_ciudad:                 number;
}

export interface Empleado {
    id_atributo: number;
    valor:       string;
    descripcion: string;
}

export interface Galeria {
    url_foto: string;
}

export interface Horario {
    dia:     string;
    abierto: boolean;
}

export interface Mecanico {
    id_contacto:              number;
    id_customer_asociado?:    number;
    clienteid:                number;
    nombres:                  string;
    apellido1:                string;
    apellido2:                string;
    cedula:                   string;
    fecha_nacimiento:         Date;
    genero:                   string;
    enrolado:                 boolean;
    desea_tarjeta:            boolean;
    id_rol:                   Number;
    rol_nombre:               string;
    pais:                     string;
    sucursal:                 string;
    nombre_genero:            string;
    url_imagen:               string;
    url_foto_documento_app:   string;
    telefonos:                Telefono[];
    correo_electronico:       string;
    barrio_colonia_digitado:  string;
    ciudad:                   string;
    departamento:             string;
    tipo_cliente:             number;
    tarjetaid:                number;
    identificacion_escaneada: boolean;
    identificacion_validada:  boolean;
    tarjeta_entregada:        boolean;
    roles:                    Rol[];
}

export interface Rol {
    id_rol:     string;
    rol_nombre: string;
}

export interface Telefono {
    telefono: string;
    area:     string;
    validado?: boolean;
}

export interface Sucursal{
    descripcion:                  string;
    descripcion_sucursal_corta:   string;
    sucursal:                     string;
}

export interface Pais {
    icon_flag:    string;
    nombre_pais:  string;
    id_pais:      number;
}

export interface Departamento {
    estado_nombre:        string;
    id_estado:            number;
    id_estado_google:     string;
    id_pais:              number;
}

export interface Municipio{
    ciudad_nombre:  string;
    id_estado:      number;
    id_ciudad:      number;
}

/*************INTERFACES CLIENTES PADRES E HIJOS ********************/


export interface BusquedaCLiente{
  id_customer:            number;
  identificacion:         string;
  nombre_comercial:       string;
  nombre_legal:           string;
  nombre_identificacion:  string;
  nombre_completo:        string;
}

export interface ClientePadreHijo {
  identificacion_tipo_dato: string;
  identificacion:           string;
  nombre_comercial:         string;
  nombre_legal:             string;
  id_pais_cliente:          number;
  es_customer_clonado:      boolean;
  id_pais_direccion:        number;
  id_ciudad:                number;
  id_ciudad_new:            number;
  id_estado:                number;
  id_direccion:             number;
  sucursal:                 string;
  calle_avenidad:           string;
  direccion_referencia:     string;
  barrio_colonia_zona:      string;
  id_tipo_negocio:          number;
  forma_pago:               number;
  identificacion_validada:  boolean;
  id_forma_entrega:         number;
  id_customer_parent:       number;
  validada:                 boolean;
  direccion_calle_avenida:  string;
  departamento:             string;
  ciudad:                   string;
  telefonos:                Telefono[];
}

export interface Contacto {
  nombres:                 string;
  apellidos:               string;
  nombre_completo:         string;
  identificacion:          string;
  correo_electronico:      string;
  tipo_cliente:            number;
  url_imagen:              string;
  telefonos:               Telefono[];
  barrio_colonia_digitado: string;
  ciudad:                  string;
  departamento:            string;
  identificacion_validada: boolean;
}

export interface Usuario {
    id_app_usuario?:  number,
    usuario:         string;
    password:        string;
    password2:       string;
    celular:         string;
    nombre:          string;
    activo:          boolean;
    token?:           string;
    fecha_creacion?:  Date;
    fecha_caduca?:    Date;
    codigoempleado?:  string;
    es_supervisor:   boolean;
}

export interface UsuarioResponse {
    data:            Usuario[];
    error:         boolean;
    mensaje:        string;
}

export interface Paginas {
    id_app_paginas:  number;
    descripcion:     string;
    key:             string;
}