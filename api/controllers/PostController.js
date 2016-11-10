/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var request = require('request'),
      moment = require('moment');

module.exports = {
	showAllPosts: function(req, res) {
    Post
      .find({})
      .sort('createdAt DESC')
      .populate('author')
      .exec( function(err, posts) {
        if (err) {
          return res.serverError(err);
        }
        if (!posts) {
          return res.notFound('Could not find the post you were looking for, sorry.');
        }
        res.view('homepage', { posts: posts, moment: moment });
      });
	},

  showOnePost: function(req, res) {
    Post
      .findOne( { id: req.param('post_id') })
      .populate('author')
      .exec( function(err, post) {
        if (err) {
          return res.serverError(err);
        }
        if (!post) {
          return res.notFound('Could not find the post you were looking for, sorry.');
        }
        res.view('single-post', { post: post, moment: moment });
      });
  },

  create: function(req, res) {

    Post
      .create({
        title: req.body.title,
        body: req.body.body,
        author: req.user.id
      })
      .exec( function(err, post) {
        res.redirect('user/dashboard');
      });
  },

  publish: function(req, res) {
    Post
    .update({id: req.param('id'), published: false},{
      published: true
    })
    .exec( function(err, post) {
      sails.log.info('post updated: ', post);
      res.redirect('user/dashboard');
    });
  },

  unpublish: function(req, res) {
    Post
    .update({id: req.param('id'), published: true},{
      published: false
    })
    .exec( function(err, post) {
      sails.log.info('post updated: ', post);
      res.redirect('user/dashboard');
    });
  },

  destroy: function(req, res) {
    Post
      .destroy({id: req.param('id')})
      .exec(function(err, post) {
        sails.log.info('post deleted: ', post);
        res.redirect('user/dashboard');
      });
  }
};
