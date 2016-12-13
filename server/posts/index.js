const posts = require('express').Router()


posts.use('/offers', require('./offers.route'));
posts.use('/requests', require('./requests.route'));

module.exports = posts;
