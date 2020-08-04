const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.book.get);

router.get('/details/', controllers.book.getOne);

router.post('/', auth(), controllers.book.post);

router.put('/:id', auth(), controllers.book.put);

router.put('/like/:id', auth(), controllers.book.like);

router.delete('/:id', auth(), controllers.book.delete);


module.exports = router;