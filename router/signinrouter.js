const expess = require('express');

const router = expess.Router();
const {getsinginPage } = require('../controllers/signincontroller');

router.get('/', getsinginPage);

exports.router = {
    path: '/signin',
    router
}
