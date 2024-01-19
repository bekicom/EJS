const db = require('../db');

const getsingupPage = async (_, res) => {
    try {
        res.render('signup', {
            title: 'signup page',
            path: '/signup',
            error: '',
        });
    } catch (error) {
        res.render('signup', {
            title: 'signup page',
            path: '/signup',
            error: error,
        });
    }
};

const getPostpage = async (req, res) => {
    try {
        const { username, login, password } = req.body;

        if (!(username && login && password)) {
            throw new Error('barcha maydonlarni to\'ldiring');
        }

        const findUser = db.find(user => user.username === username);
        if (findUser) {
            throw new Error('bunday username bazada bor');
        }

        db.push({
            username,
            login,
            password
        });

        if (password.length < 4) {
            throw new Error('parol 4 ta belgidan kam');
        }

        console.log('bazani korish', db); 
//agar registerdan otsa login pagega yuboramiz
        res.redirect('/signin');
    } catch (error) {
        console.error('Error:', error); 
        res.render('signup', {
            title: 'signup page',
            path: '/signup',
            error: error.message || 'xato sms',
        });
    }
};

module.exports = {
    getsingupPage,
    getPostpage
};
