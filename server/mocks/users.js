module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.json({
      users: [
        {
          id: 1,
          name: 'michael',
          role: 'giver'
        }, {
          id: 2,
          name: 'gob',
          role: 'brother'
        }, {
          id: 3,
          name: 'tobias',
          role: 'analyist/therapist'
        }, { 
          id: 4,
          name: 'lindsay',
          role: 'none'
        }, {
          id: 5,
          name: 'george michael',
          role: 'entrepreneur'
        }, {
          id: 6,
          name: 'maeby',
          role: 'executive'
        }, {
          id: 7,
          name: 'lucille',
          role: 'matriarch'
        }, {
          id: 8,
          name: 'oscar',
          role: 'hippie'
        }, {
          id: 9,
          name: 'maggie',
          role: 'liar'
        }, {
          id: 10,
          name: 'george',
          role: 'patriarch'
        }
      ],
      meta: {
        'total_pages': 5
      }
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
