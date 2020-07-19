const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.city.getAll);
router.get('/:city', ctrl.city.getCityById);

module.exports = router;