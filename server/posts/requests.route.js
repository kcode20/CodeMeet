const requests = require('express').Router();

const Posts = require('../../db/models/post');

requests.get('/', (req, res, next) => {
  Posts.findAll({
    where: {
      status: 'request'
    }
  })
  .then( requestList => {
    res.send(requestList);
  })
  .catch(next);
});


requests.get('/:requestId', (req, res, next) => {
  Posts.findById(req.params.requestId)
  .then( request => {
    res.send(request);
  })
  .catch(next);
});

requests.put('/:requestId', (req, res, next) => {
  Posts.update(req.body,
  {
    where: {
      id: req.params.requestId
    }
  })
  .then( request => {
    res.status(201).send(request);
  })
  .catch(next);
});

requests.post('/', (req, res, next) => {
  Posts.create(req.body)
  .then( request => {
    res.status(201).send(request);
  })
  .catch(next);
});

requests.get('/tag/:tagName', (req, res, next) => {
  Posts.findByTag(req.params.tagName, 'request')
  .then(requestsList => {
    res.send(requestsList)
  })
  .catch(next)
})

module.exports = requests;
