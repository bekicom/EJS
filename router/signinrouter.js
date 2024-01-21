const expess = require('express');

const router = expess.Router();
const {getsinginPage, getPostpage } = require('../controllers/signincontroller');

router.get('/', getsinginPage);
router.post('/', getPostpage);

exports.router = {
    path: '/signin',
    router
}
