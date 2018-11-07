var express = require('express');
var router = express.Router();

/* GET Mentores listing. */
router.get('/registro', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Registro',
    section: 'registro',
    headerFile: 'headerLogin',
    cssFiles: ['login/login'],
    jsFiles: ['bootstrap/bootstrap-filestyle.min']
  }
  res.render('mentores/default-view', options);
});

router.get('/inicio-sesion', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Inicio de sesión',
    section: 'inicio-sesion',
    headerFile: 'headerLogin',
    cssFiles: [],
    jsFiles: []
  }
  res.render('mentores/default-view', options);
});

router.get('/mis-equipos', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Mis equipos',
    section: 'mis-equipos',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('mentores/default-view', options);
});

router.get('/mis-equipos/:equipo', function(req, res, next) {
  const { equipo } = req.params;
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Mis equipos',
    section: 'mis-equipos',
    subsection: 'equipo',
    idEquipo: equipo,
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('mentores/default-view', options);
});

router.get('/mis-equipos/:equipo/modulos/:id', function(req, res, next) {
  const { equipo, id } = req.params;
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Módulo',
    section: 'mis-equipos',
    subsection: 'modulo',
    idEquipo: equipo,
    idModulo: id,
    headerFile: 'header',
    cssFiles: ['modulo/modulo'],
    jsFiles: []
  }
  res.render('mentores/default-view', options);
});

router.get('/contenido-adicional', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Contenido adicional',
    section: 'contenido-adicional',
    headerFile: 'header',
    cssFiles: [],
    jsFiles: []
  }
  res.render('mentores/default-view', options);
});

router.get('/mi-perfil', function(req, res, next) {
  const options = {
    baseUrl: 'http://' + req.get('host'),
    title: 'Mentores - Mi perfil',
    section: 'mi-perfil',
    headerFile: 'header',
    cssFiles: ['mi-perfil/perfil'],
    jsFiles: []
  }
  res.render('mentores/default-view', options);
});

module.exports = router;
