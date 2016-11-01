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
      })
		// request('http://beta.json-generator.com/api/json/get/EJTH4OllM', function (error, response, body) {
		//   if (!error && response.statusCode == 200) {
		// 		var postData = JSON.parse(response.body);
		// 		res.view('homepage', {posts: postData});
		//   }
		// })
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
      })
  }
};
