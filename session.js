// Middleware function to check for logged-in users
var sessionCheckerLoginFridas = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        if (req.session.user.type == 'fridas')
            res.redirect('modulos');
    } else {
        next();
    }    
};

// Middleware function to check for logged-in Fridas users
var sessionCheckerFridas = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        if (req.session.user.type == 'fridas') {
            // global.targetUrl = null;
            next();
        }
    } else {
        global.targetUrl = `${global.baseUrl}/fridas${req.url}`;
        res.redirect(`${global.baseUrl}/fridas/inicio-sesion`);
    }    
};

module.exports = {sessionCheckerLoginFridas, sessionCheckerFridas};