var express = require('express');
var router = express.Router();

let authenticationCtrl = require('./../controllers/app/authentication_ctrl');

router.post('/signIn', authenticationCtrl.signIn);
router.post('/signUp', authenticationCtrl.signUp);

module.exports = router;
