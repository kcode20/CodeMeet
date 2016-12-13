'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')
const User = require('./user')

const Post = db.define('post', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
    	type: Sequelize.ENUM('offer', 'request'),
        allowNull: false
    },
    tags: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
        set: function (tags = []) {
            tags = typeof tags !== 'string' ?
                tags :
                tags.split(',').map(str => str.trim())
            this.setDataValue('tags', tags);
        }
    }
}, {
    getterMethods: {
        route: function () {
        	//not implemented, could be different later
            return '/posts/' + this.urlTitle;
        },
        //requires marked, might use later
        // renderedContent: function () {
        //     return marked(this.content);
        // }
    },
    classMethods: {
        findByTag: function (tag, postType) {
            return this.findAll({
                where: {
                    tags: {
                        $contains: [tag]
                    },
                    status: postType
                }
            });
        }
    },
    instanceMethods: {
        findSimilar: function () {
            return Post.findAll({
                where: {
                    id: {
                        $ne: this.id
                    },
                    tags: {
                        $overlap: this.tags
                    }
                }
            });
        }
    },
    //this is something that will happen on every query to this table
    defaultScope: {
        //include means to populate the foreignKey with the information associated to it from another table (e.g. populate authorId with the entire author object)
        include: [{model: User, as: 'author'}]
    }
});

Post.belongsTo(User, {
	as: 'author'
})

module.exports = Post
