var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var cors = require('cors')
//Importacion de las controles
var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario-routes');
var bodegaRouter = require('./routes/bodega-routes');
var logisticaRouter = require('./routes/logistica-routes');
var allasaRouter = require('./routes/allas-routes');
var tallerRouter = require('./routes/taller-routes');
var mantenimientosRouter = require('./routes/mantenimientos-routes');

var plantaRouter = require('./routes/planta-routes');

var fs = require('fs');
var sizeOf = require('image-size');

var app = express();

//Definicion de la session
app.use(session({
  secret: 'app nodejs'
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var op = {
  origin: true,
  methods: ['POST', 'GET'],
  credentials: true,
  maxAge: 3600
}

app.use(cors(op));

//Definicion de las rutas
app.use('/api/', cors(op), indexRouter);
app.use('/', cors(op), indexRouter);
app.use('/api/usuario/', cors(op), usuarioRouter);
app.use('/api/planta/', cors(op), plantaRouter);
app.use('/api/bodega/', cors(op), bodegaRouter);
app.use('/api/logistica/', cors(op), logisticaRouter);
app.use('/api/allas/', cors(op), allasaRouter);
app.use('/api/taller/', cors(op), tallerRouter);
app.use('/api/mantenimientos/', cors(op), mantenimientosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
  var f = new Date();
  let aa = f.getFullYear()
  let anio = `© ${aa}`
  res.render('error', {
    copyr: anio,
    title: "ALLAS REPUESTOS",
    message: "La pagina solicitada no existe"
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
