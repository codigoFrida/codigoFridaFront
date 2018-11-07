var express = require('express');
var router = express.Router();
var apiUrl = 'http://127.0.0.1:5000/api/';

/* GET Fridas listing. */
router.get('/registro', function(req, res, next) {
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Registro',
    section: 'registro',
    cssFiles: ['login/login'],
    jsFiles: ['bootstrap/bootstrap-filestyle.min','fridas/registro']
  }
  res.render('fridas/default-view', options);
});

router.get('/inicio-sesion', function(req, res, next) {
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Inicio de sesión',
    section: 'inicio-sesion',
    headerFile: 'headerLogin',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/modulos', function(req, res, next) {
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Módulos',
    section: 'modulos',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/modulos/:id', function(req, res, next) {
  const { id } = req.params;
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Módulo',
    section: 'modulos',
    subsection: 'modulo',
    idModulo: id,
    headerFile: 'header',
    cssFiles: ['modulo/modulo'],
    jsFiles: ['bootstrap/bootstrap-filestyle.min']
  }
  res.render('fridas/default-view', options);
});

router.get('/mi-equipo', function(req, res, next) {
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Mi equipo',
    section: 'mi-equipo',
    headerFile: 'header',
    cssFiles: ['equipos/equipos'],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/contenido-adicional', function(req, res, next) {
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Contenido adicional',
    section: 'contenido-adicional',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/mi-perfil', function(req, res, next) {
  const options = {
    apiUrl: apiUrl,
    baseUrl: 'http://' + req.get('host'),
    title: 'Fridas - Mi perfil',
    section: 'mi-perfil',
    headerFile: 'header',
    cssFiles: ['mi-perfil/perfil'],
    jsFiles: ['bootstrap/bootstrap-filestyle.min']
  }
  res.render('fridas/default-view', options);
});

module.exports = router;
