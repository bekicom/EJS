const gethomePage = async (req, res) => {
    res.render('index', {
        title: 'Home page',
        path: '/',
 
 
 
    });
}



module.exports ={
    gethomePage
}



