const {Router} = require('express');
const express = require('express');
var route = express.Router();

var paintController = require('../controllers/paintController');

route.get('/',paintController.getPaints);
route.get('/:id',paintController.getPaint);
route.post('/',paintController.addPaint);
route.put('/',paintController.putPaint);
route.delete('/',paintController.deletePaint);

module.exports = route;