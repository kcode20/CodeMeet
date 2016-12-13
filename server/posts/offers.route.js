const offers = require('express').Router();

const Posts = require('../../db/models/post');

offers.get('/', (req, res, next) => {
  Posts.findAll({
    where: {
      status: 'offer'
    }
  })
  .then( offers => {
    res.send(offers);
  })
  .catch(next);
});


offers.get('/:offerId', (req, res, next) => {
  Posts.findById(req.params.offerId)
  .then( offer => {
    res.send(offer);
  })
  .catch(next);
});

offers.put('/:offerId', (req, res, next) => {
  Posts.update(req.body,
  {
    where: {
      id: req.params.offerId
    }
  })
  .then( offer => {
    res.status(201).send(offer);
  })
  .catch(next);
});

offers.post('/', (req, res, next) => {
  Posts.create(req.body)
  .then( offer => {
    res.status(201).send(offer);
  })
  .catch(next);
});

module.exports = offers;
