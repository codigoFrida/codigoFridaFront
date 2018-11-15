var createError = require('http-errors');

// Middleware function to check for logged-in users
var sessionCheckerLoginFridas = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        if (req.session.user.type == 'fridas')
            res.redirect('modulos');
        else
            next(createError(403));
    } else {
        next();
    }    
};

// Middleware function to check for logged-in Fridas users
var sessionCheckerFridas = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        if (req.session.user.type == 'fridas')
            next();
        else
            next(createError(403));
    } else {
        if (req.originalUrl.match('fridas'))
            global.targetUrl = `${global.baseUrl}/fridas${req.url}`;
        res.redirect(`${global.baseUrl}/fridas/inicio-sesion`);
    }    
};

// Middleware function to check for logged-in users
var sessionCheckerLoginMentores = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        if (req.session.user.type == 'mentores')
            res.redirect('mis-equipos');
        else
            next(createError(403));
    } else {
        next();
    }    
};

// Middleware function to check for logged-in Mentores users
var sessionCheckerMentores = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        if (req.session.user.type == 'mentores')
            next();
        else
            next(createError(403));
    } else {
        if (req.originalUrl.match('mentores'))
            global.targetUrl = `${global.baseUrl}/mentores${req.url}`;
        res.redirect(`${global.baseUrl}/mentores/inicio-sesion`);
    }    
};

module.exports = {
    sessionCheckerLoginFridas, 
    sessionCheckerFridas, 
    sessionCheckerLoginMentores, 
    sessionCheckerMentores
};