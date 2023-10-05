var express = require('express');
var router = express.Router();

let authenticationCtrl = require('./../controllers/web/authentication_ctrl');

router.post('/signIn', authenticationCtrl.signIn);
router.post('/signUp', authenticationCtrl.signUp);

module.exports = router;
