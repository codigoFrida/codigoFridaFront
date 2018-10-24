var express = require('express');
var router = express.Router();

/* GET Fridas listing. */
router.get('/modulos', function(req, res, next) {
  const options = {
    title: 'Fridas - Módulos', 
    section: 'modulos',
    cssFiles: ['style'],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/modulos/modulo/:id', function(req, res, next) {
  const options = {
    title: 'Fridas - Módulo', 
    section: 'modulo',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/mi-equipo', function(req, res, next) {
  const options = {
    title: 'Fridas - Mi equipo', 
    section: 'mi-equipo',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/contenido-adicional', function(req, res, next) {
  const options = {
    title: 'Fridas - Contenido adicional', 
    section: 'contenido-adicional',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/mi-perfil', function(req, res, next) {
  const options = {
    title: 'Fridas - Mi perfil', 
    section: 'mi-perfil',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

module.exports = router;
