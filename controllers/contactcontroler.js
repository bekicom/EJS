const getcontactPage = async (req, res) => {
    res.render('contact', {
        title: 'Contact page',
        path: '/contact',
    });

}

module.exports = {
    getcontactPage
}
