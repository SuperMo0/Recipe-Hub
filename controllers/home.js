function renderHome(req, res) {

    res.render('home.ejs');
}

function renderCatergories(req, res) {
    res.render('categories.ejs');
}

module.exports = { renderHome, renderCatergories }