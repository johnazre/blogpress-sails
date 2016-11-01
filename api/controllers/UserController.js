/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	dashboard: function(req, res) {
		Post
			.find({ published: 'true' })
			.exec( function(err, posts) {
        if (err) {
          return res.serverError(err);
        }
        if (!posts) {
          return res.notFound('Could not find the posts you were looking for, sorry.');
        }
				var publishedPosts = posts;

				Post
					.find({ published: 'false' })
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

	}
};
