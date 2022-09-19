//blogs can have many comments
//users can have many comments
//users can have many blogs
const Comment = require('./comment');
const Blog = require('./blog');
const User = require('./user');

Blog.hasMany(Comment, {
    foreignKey: 'id',
});

User.hasMany(Blog, {
    foreignKey: 'id',
});

User.hasMany(Comment, {
    foreignKey: 'id',
});

module.exports = { Comment, Blog, User };