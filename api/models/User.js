/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 var bcrypt = require('bcrypt-nodejs');

 module.exports = {
     attributes: {
         name: {
             type: 'string',
             required: true
         },
         email: {
             type: 'email',
             required: true,
             unique: true
         },
         password: {
             type: 'string',
             minLength: 6,
             required: true
         },
         toJSON: function() {
             var obj = this.toObject();
             delete obj.password;
             return obj;
         }
     },
     beforeCreate: function(user, cb) {
       bcrypt.hash(user.password, null, null, function(err, hash) {
          if (err) {
              console.log(err);
              cb(err);
          } else {
              user.password = hash;
              cb();
          }
       });
     }
 };
