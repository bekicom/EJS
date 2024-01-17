const getaboutPage  = async (req, res) => {

    res.render('about', {
        title: 'about page',
        path: '/',
    });
}



module.exports = {
    getaboutPage
}
