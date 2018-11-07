var express = require('express');
var router = express.Router();
var apiUrl = 'http://127.0.0.1:5000/api/';
router.get('/modulos', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Lideres - Módulos',
    section: 'modulos',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/fridas', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Lideres - Fridas',
    section: 'fridas',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/equipos', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Lideres - Equipos',
    section: 'equipos',
    headerFile: 'header',
    cssFiles: ['equipos/equipos'],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/mi-perfil', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Lideres - Perfil',
    section: 'mi-perfil',
    headerFile: 'header',
    cssFiles: ['mi-perfil/perfil'],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/registro', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Lideres - registro',
    section: 'registro',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/contenido-adicional', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Líderes - Contenido adicional',
    section: 'contenido-adicional',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/iniciar-sesion', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Líderes - Login',
    section: 'iniciar-sesion',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/equipos/:equipo/modulos/:id', function(req, res, next) {
  const { equipo, id } = req.params;
  const options = {
    apiUrl: 'http://' + req.get('host'),
    baseUrl: 'http://' + req.get('host'),
    title: 'Líderes - Módulo',
    section: 'equipos',
    subsection: 'modulo',
    idEquipo: equipo,
    idModulo: id,
    headerFile: 'header',
    cssFiles: ['modulo/modulo'],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/equipos/:equipo', function(req, res, next) {
  const { equipo, id } = req.params;
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Líderes - Equipo N',
    section: 'equipos',
    subsection: 'equipo',
    idEquipo: equipo,
    headerFile: 'header',
    cssFiles: ['equipos/equipos'],
    jsFiles: ['lideres/equipo/index']
  }
  res.render('lideres/default-view', options);
});

router.get('/modulos/:id', function(req, res, next) {
  const { id } = req.params;
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Módulo - Contenido',
    section: 'modulos',
    subsection: 'modulo-contenido',
    idModulo: id,
    headerFile: 'header',
    cssFiles: ['modulo/modulo'],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

module.exports = router;
