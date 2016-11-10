/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

 var loginCounter = 0;

 module.exports = {

     _config: {
         actions: false,
         shortcuts: false,
         rest: false
     },

     login: function(req, res) {

         passport.authenticate('local', function(err, user, info) {
           sails.log.info('loginCounter: ', loginCounter);
             if(loginCounter > 2) {
               res.forbidden();
             } else {
               if ((err) || (!user)) {
                 loginCounter++;
                   return res.redirect('/');
               }
               req.logIn(user, function(err) {
                  loginCounter = 0;
                  if (err) res.send(err);
                  req.user = user;
                  return res.redirect('/user/dashboard');
               });
             }

         })(req, res);

     },

     logout: function(req, res) {
         req.logout();
         res.redirect('/');
     }
 };
