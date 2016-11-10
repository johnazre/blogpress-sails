/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	dashboard: function(req, res) {
		Post
			.find({ published: 1 })
			.populate('author')
			.exec( function(err, posts) {
        if (err) {
          return res.serverError(err);
        }
        if (!posts) {
          return res.notFound('Could not find the posts you were looking for, sorry.');
        }
				var publishedPosts = posts;

				Post
					.find({ published: 0 })
					.populate('author')
					.exec( function(err, posts) {
		        if (err) {
		          return res.serverError(err);
		        }
		        if (!posts) {
		          return res.notFound('Could not find the posts you were looking for, sorry.');
		        }
						var unpublishedPosts = posts;

						res.view({
							unpublished: unpublishedPosts,
							published: publishedPosts
						})
		      })
      })
	},
	create: function(req, res) {
		User
			.create({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			})
			.exec(function(err, user) {
				res.redirect('/login');
			})
	}

};
