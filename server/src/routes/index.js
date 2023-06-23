const getCharById = require('../Controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const postUser = require('../controllers/postUser');
const deleteFav = require('../Controllers/deleteFav');

const router = require('express').Router();

router.get('/login', login );
router.post('/login', postUser);
router.post('/favorites', postFav);
router.delete('/favorites/:id', deleteFav);
router.get('/character/:id', getCharById);

module.exports = router;