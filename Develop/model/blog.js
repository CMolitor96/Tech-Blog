const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Blog extends Model { }

//blogs when created
//blogs have id, title name, author that references user logged in id, body, time created, comments referenced elsewhere, 

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_date_created: {
            type: DataTypes.DATE,
        },
        blog_author: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name',
            },
        },
        blog_comments: {
            type: DataTypes.STRING,
            references: {
                model: 'comment',
                key: 'comment_body',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
)

module.exports = Blog;