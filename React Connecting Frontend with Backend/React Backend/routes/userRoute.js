const { Router } = require('express');
const express = require('express');
var route = express.Router();

UserController = require('../controllers/userController');
route.post('/',UserController.addUser);

module.exports = route;