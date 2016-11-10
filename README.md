# blogpress-sails
A [Sails](http://sailsjs.org) application storing data in MySQL.

Blogpress-sails allows users to view a list of posts by all users, as well as single post pages. To add posts of their own, they must sign up and log in. From there, they will be taken to a dashboard page that will allow them to create drafts that will not be published until they they click the publish button. After they click the publish button and they realize what they said may have not been exactly what they meant, the can unpublish it by clicking the aptly labeled unpublish button and publish it again when they're ready. They can also delete posts as they wish.

### To run the app, run the following in the terminal inside the cloned repo directory:
If you have a Mac or Linux, you may need to add sudo before installing Sails globally,
if you have Windows, though, you shouldn't need to worry about it.
```text
git clone https://github.com/johnazre/blogpress-sails.git
cd blogpress-sails
npm install -g sails
npm install
sails lift
```
TODO:
- [x] Add Post editing capability
- [x] Everything Else...that I can think of at the moment.
