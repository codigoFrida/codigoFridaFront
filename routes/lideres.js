var express = require('express');
var router = express.Router();

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

router.get('/mis-equipos', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Lideres - Equipos',
    section: 'mis-equipos',
    headerFile: 'header',
    cssFiles: [],
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
    cssFiles: [],
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
    title: 'Lideres - Contenido adicional',
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
    title: 'Lideres - Login',
    section: 'iniciar-sesion',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

router.get('/modulos/:id', function(req, res, next) {
  const { id } = req.params;
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Módulo',
    section: 'modulos',
    subsection: 'modulo',
    idModulo: id,
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('lideres/default-view', options);
});

module.exports = router;
