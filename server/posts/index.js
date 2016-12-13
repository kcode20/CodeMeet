const posts = require('express').Router()
const Posts = require('../../db/models/post');

posts.use('/offers', require('./offers.route'));
posts.use('/requests', require('./requests.route'));

posts.get('/search', (req, res, next) => {

    Posts.findByTag(req.query.search)
        .then(pages => res.render('index', { pages }))
        .catch(next);

});

module.exports = posts;
