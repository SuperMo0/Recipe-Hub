const addNewIngredientButton = document.querySelector('.add-new-ingredient');
const newIngredientInput = document.querySelector('#ingredient_name');
const orderedList = document.querySelector('ol');
const singleIngredientTemplte = document.getElementById('single-ingredient-templte');



addNewIngredientButton.addEventListener('click', () => {

    let value = newIngredientInput.value;
    newIngredientInput.value = '';
    value = value.trim();
    if (value == '') return;
    let node = singleIngredientTemplte.content.children[0].cloneNode(true);

    setName(node, orderedList.children.length, value);
    let remove = node.querySelector('i');

    remove.addEventListener('click', () => {
        node.remove();
        for (let i = 0; i < orderedList.children.length; i++) {
            if (i == 0) continue;
            setName(orderedList.children[i], i, null);
        }
    })

    orderedList.appendChild(node);
})

function setName(node, num, value) {
    let input = node.querySelector('input');
    let order = node.querySelector('.order');
    if (!value) value = input.value;
    order.textContent = num + ".";
    input.style.width = `${value.length}ch`;
    input.setAttribute('value', value);
}

function fixHeight(element) {
    if (element.value == '') element.style.height = '200px';
    if (element.style.height.slice(0, -2) > element.scrollHeight) return;
    element.style.height = element.scrollHeight + 'px';
}




const createCategory = document.querySelector('.new-category-container');
const selectCategory = document.querySelector('.category-container');
function showNewCategory(element) {
    selectCategory.style.display = 'none'
    let select = selectCategory.querySelector('select')
    select.setAttribute('disabled', 'true');
    createCategory.style.display = 'block';
    let newInput = createCategory.querySelector('input');
    newInput.removeAttribute('disabled');
}

function hideNewCategory(element) {
    createCategory.style.display = 'none';
    selectCategory.style.display = 'block';
    let select = selectCategory.querySelector('select')
    select.removeAttribute('disabled');
    let newInput = createCategory.querySelector('input');
    newInput.setAttribute('disabled', 'true');
}

uploadName = document.querySelector('.uploaded-file-name');

function validateUpload(input) {
    let file = input.files[0];
    if (file.size > 1000 * 1000 * 2) {
        alert('file size is more than 2M please choose smaller');
        input.value = '';
    }
    else if (file.type != 'image/png' && file.type != 'image/jpeg' && file.type != 'image/jpg') {
        alert('wrong file format');
        input.value = '';
    }
    else {
        let image = new Image();
        image.src = URL.createObjectURL(input.files[0]);
        image.onload = () => {
            if (image.width < 900 || image.height < 300) {
                input.value = '';
                alert('image should be at least 900px and height 300px');
            }
            uploadName.textContent = input.files[0].name;
        }
    }
}

const form = document.querySelector('.create-recipe-grid');
const submit = document.querySelector('.submit-button');
const loading = document.querySelector('.loading-page')
form.addEventListener('submit', (e) => {
    submit.setAttribute('disabled', 'true');
    loading.setAttribute('hide', 'false');
    // e.preventDefault();
})
