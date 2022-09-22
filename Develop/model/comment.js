//comments when created have id, author that references user logged in,
//time created
//comment body
//blogs have many comments
//users have many comments

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment_date_created: {
            type: DataTypes.DATE,
        },
        comment_author: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'name',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
)

module.exports = Comment;