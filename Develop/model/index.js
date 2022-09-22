//blogs can have many comments
//users can have many comments
//users can have many blogs
const Comment = require('./comment');
const Blog = require('./blog');
const User = require('./user');

Blog.hasMany(Comment, {
    foreignKey: 'comment_body',
});

User.hasMany(Blog, {
    foreignKey: 'name',
});

User.hasMany(Comment, {
    foreignKey: 'name',
});

module.exports = { Comment, Blog, User };