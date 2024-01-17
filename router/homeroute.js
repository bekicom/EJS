const express = require('express');
const router = express.Router();

const { gethomePage } = require('../controllers/homecontoller');


router.get('/', gethomePage);


 

exports.router = {
    path: '/',
    router
}