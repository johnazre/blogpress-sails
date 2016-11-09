/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var request = require('request');

module.exports = {
	showAllPosts: function(req, res) {
    Post
      .find({})
      .exec( function(err, posts) {
        if (err) {
          return res.serverError(err);
        }
        if (!posts) {
          return res.notFound('Could not find the post you were looking for, sorry.');
        }
        res.view('homepage', { posts: posts});
      });
	},

  showOnePost: function(req, res) {
    Post
      .findOne( { id: req.param('post_id') })
      .exec( function(err, post) {
        if (err) {
          return res.serverError(err);
        }
        if (!post) {
          return res.notFound('Could not find the post you were looking for, sorry.');
        }
        res.view('single-post', { post: post});
      });
  },
  
  create: function(req, res) {
    Post
      .create({
        title: req.body.title,
        body: req.body.body
      })
      .exec( function(err, post) {
        res.redirect('user/dashboard');
      });
  }
};
