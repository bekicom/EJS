const expess = require('express');

const router = expess.Router();
const { getcontactPage } = require('../controllers/contactcontroler');

router.get('/', getcontactPage);

exports.router = {
    path: '/contact',
    router
}
