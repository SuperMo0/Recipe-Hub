const { log } = require('console');
const stream = require('stream');
const queries = require('./../db/queries');
const upload = require('./../services/cloudinary');


async function renderCreateForm(req, res, next) {
    try {
        const categories = await queries.getCategories();
        res.render('create.ejs', { categories, pag: 'create' });
    }
    catch (e) {
        res.render('error', { error: 'Error please try again later' })
    }
}

async function handleCreateForm(req, res) {

    try {
        uploadResult = await upload.uploadImageBuffer(req.file.buffer);
    } catch (error) {

        res.render('error', { error: 'error on upload please try again after a while' });
        return;
    }

    try {
        req.body.user_id = 1;
        req.body.recipe_image = uploadResult.url;
        req.body.recipe_ingredients = req.body.recipe_ingredients.join('-');
        req.body.public_id = uploadResult.public_id;

        if (req.body.category_name != null) {
            let id = await queries.insertCategory({ category_name: req.body.category_name, public_id: uploadResult.public_id });
            req.body.category_id = id;
        }

        await queries.insertRecipe(req.body);
        res.redirect('/create');
    } catch (err) {
        res.render('error', { error: 'there was a problem please try again later' });
    }
}

module.exports = { renderCreateForm, handleCreateForm }
