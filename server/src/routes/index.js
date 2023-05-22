const {login} = require('../controllers/login');
const {getCharById} = require('../Controllers/getCharById');
const {postFav, deleteFav} = require('../Controllers/handleFavorites');

const router = require('express').Router();


router.get('/character/:id', getCharById);

router.get('/login', login );

router.post('/favorites', postFav);

router.delete('/favorites/:id', deleteFav);

module.exports = router;