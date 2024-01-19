const expess = require('express');

const router = expess.Router();
const {getsingupPage , getPostpage } = require('../controllers/singupcontorller');

router.get('/', getsingupPage);
router.post('/', getPostpage);

exports.router = {
    path: '/signup',
    router,
}
