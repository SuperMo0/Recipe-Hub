

const pg = require('pg');

const client = new pg.Client({
    connectionString: process.argv[2]
});

const sql1 = `INSERT INTO public.category (category_name, category_image)
VALUES
    ('Pasta', 'https://prolicious.com/cdn/shop/articles/Tangy_Tomato_Red_Sauce_Pasta.jpg?v=1705585316'),
    ('Chicken & Meat', 'https://as1.ftcdn.net/v2/jpg/02/30/37/80/1000_F_230378034_rW34nKR0XoXUbAugQaU3JIbKnKjydIYL.jpg'),
    ('Desserts', 'https://juliemarieeats.com/wp-content/uploads/2024/06/Easy-Mixed-Berry-Cake-13-1-scaled.jpg'),
    ('Indian & Curry', 'https://as1.ftcdn.net/v2/jpg/02/46/24/82/1000_F_246248262_u46ftJ7qtTRsh0FuCwopsSrcYnjUinaS.jpg');
`


const sql2 = `-- 1. Fresh Tomato Pasta  (category_id = 1)
INSERT INTO public.recipes
(recipe_name, recipe_ingredients, recipe_instructions, minuts, hours, recipe_image, user_id, category_id, public_id)
VALUES
(
'Fresh Tomato Pasta',
'Tomatoes-Olive Oil-Garlic-Pasta-Basil-Salt',
'Heat olive oil in a pan over medium heat and sauté minced garlic until fragrant. 
Add chopped fresh tomatoes and cook until they soften and release their juices. 
Season with salt and simmer for 10–15 minutes until the sauce thickens. 
Meanwhile, boil pasta according to package instructions until al dente, then drain it. 
Add the cooked pasta directly into the tomato sauce and toss until well combined. 
Finish with fresh basil leaves and an optional drizzle of olive oil before serving warm.',
20, 0,
'https://prolicious.com/cdn/shop/articles/Tangy_Tomato_Red_Sauce_Pasta.jpg?v=1705585316',
1, 1, 'web'
);
 
INSERT INTO public.recipes
(recipe_name, recipe_ingredients, recipe_instructions, minuts, hours, recipe_image, user_id, category_id, public_id)
VALUES
(
'Roasted Chicken',
'Chicken-Spices-Olive Oil-Lemon-Salt',
'Preheat your oven to 200°C (400°F). 
Pat the chicken dry with paper towels and place it on a baking tray. 
In a small bowl, mix olive oil, salt, black pepper, paprika, garlic powder, and lemon juice. 
Rub this mixture generously all over the chicken, including under the skin for extra flavor. 
Let the chicken rest for 10 minutes to absorb the seasoning. 
Roast in the oven for 50–60 minutes, or until the skin is golden and crispy and the juices run clear. 
Allow the chicken to rest for 5 minutes before slicing and serving.',
60, 1,
'https://as1.ftcdn.net/v2/jpg/02/30/37/80/1000_F_230378034_rW34nKR0XoXUbAugQaU3JIbKnKjydIYL.jpg',
1, 2, 'web'
);
 
INSERT INTO public.recipes
(recipe_name, recipe_ingredients, recipe_instructions, minuts, hours, recipe_image, user_id, category_id, public_id)
VALUES
(
'Berry Berries Cake Tart',
'Flour-Eggs-Sugar-Butter-Strawberries-Blueberries',
'Preheat your oven to 180°C (350°F). 
In a mixing bowl, whisk together softened butter and sugar until smooth. 
Add eggs one at a time, then fold in flour to create a thick batter. 
Gently mix in chopped strawberries and whole blueberries. 
Pour the batter into a greased tart pan and spread it evenly. 
Top with extra berries for decoration. 
Bake for 35–45 minutes or until the top is golden and a toothpick inserted comes out clean. 
Let the tart cool for 15 minutes before slicing and serving.',
40, 1,
'https://juliemarieeats.com/wp-content/uploads/2024/06/Easy-Mixed-Berry-Cake-13-1-scaled.jpg',
1, 3, 'web'
);
 
INSERT INTO public.recipes
(recipe_name, recipe_ingredients, recipe_instructions, minuts, hours, recipe_image, user_id, category_id, public_id)
VALUES
(
'Asian Vegetable Soy Pasta',
'Pasta-Carrots-Bell Peppers-Soy Sauce-Garlic',
'Cook the pasta in boiling salted water until al dente, then drain and set aside. 
Heat a tablespoon of oil in a large pan or wok. 
Add sliced carrots, bell peppers, and other vegetables of your choice and stir-fry for 4–5 minutes. 
Add minced garlic and continue cooking for another minute. 
Pour in soy sauce and a splash of water, letting the vegetables absorb the flavor. 
Add the cooked pasta to the pan and toss everything together until well coated. 
Serve immediately, optionally topped with sesame seeds or green onions.',
25, 0,
'https://www.chocolatesandchai.com/wp-content/uploads/2023/02/Asian-Vegetable-Pasta-3.jpg',
1, 1, 'web'
);
 
INSERT INTO public.recipes
(recipe_name, recipe_ingredients, recipe_instructions, minuts, hours, recipe_image, user_id, category_id, public_id)
VALUES
(
'Dahi Baingan / Eggplant Yogurt Curry',
'Eggplant-Yogurt-Oil-Spices-Garlic',
'Slice the eggplants into medium-sized pieces and lightly salt them. 
Heat oil in a pan and fry the eggplant slices until golden and soft, then set aside. 
In a separate bowl, whisk yogurt with turmeric, salt, and a little water until smooth. 
Heat a small amount of oil in a pot and add mustard seeds, cumin, garlic, and curry leaves. 
When they begin to splutter, lower the heat and slowly pour in the yogurt mixture while stirring continuously. 
Simmer gently for 3–4 minutes, making sure the yogurt does not curdle. 
Add the fried eggplants, mix well, and cook for another 2 minutes. 
Serve warm with rice or flatbread.',
30, 0,
'https://as1.ftcdn.net/v2/jpg/02/46/24/82/1000_F_246248262_u46ftJ7qtTRsh0FuCwopsSrcYnjUinaS.jpg',
1, 4, 'web'
);
`
    ; (async function () {
        await client.connect();
        await client.query(sql1);
        await client.query(sql2);
        client.end();
    })()

