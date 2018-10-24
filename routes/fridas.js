var express = require('express');
var router = express.Router();

/* GET Fridas listing. */
router.get('/modulos', function(req, res, next) {
  const options = {
    baseUrl: req.get('host'),
    title: 'Fridas - Módulos', 
    section: 'modulos',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/modulos/modulo/:id', function(req, res, next) {
  const { id } = req.params;
  const options = {
    baseUrl: req.get('host'),
    title: 'Fridas - Módulo', 
    section: 'modulos',
    subsection: 'modulo',
    idModulo: id,
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/mi-equipo', function(req, res, next) {
  const options = {
    baseUrl: req.get('host'),
    title: 'Fridas - Mi equipo', 
    section: 'mi-equipo',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/contenido-adicional', function(req, res, next) {
  const options = {
    baseUrl: req.get('host'),
    title: 'Fridas - Contenido adicional', 
    section: 'contenido-adicional',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

router.get('/mi-perfil', function(req, res, next) {
  const options = {
    baseUrl: req.get('host'),
    title: 'Fridas - Mi perfil', 
    section: 'mi-perfil',
    cssFiles: [],
    jsFiles: []
  }
  res.render('fridas/default-view', options);
});

module.exports = router;
