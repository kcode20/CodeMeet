const requests = require('express').Router();

const Posts = require('../../db/models/post');

requests.get('/', (req, res, next) => {
  Posts.findAll({
    where: {
      status: 'request'
    }
  })
  .then( requests => {
    res.send(requests);
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

module.exports = requests;
