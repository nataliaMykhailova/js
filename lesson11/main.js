/*- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(carts => {
        let info = document.createElement('div');
        info.classList.add('info');
        //хотіла поюзати різні способи роботи з апі, тому тут деструктуризація))
        for (const {id, products, total, discountedTotal, userId, totalProducts, totalQuantity} of carts.carts) {
            let infoCart = document.createElement('p');
            let divProducts = document.createElement('div');
            let hr = document.createElement('hr');
            divProducts.classList.add('mainProducts');
            infoCart.innerText = `Cart: 
            id: ${id} total: ${total} discountedTotal: ${discountedTotal} userId: ${userId} totalProducts: ${totalProducts} totalQuantity: ${totalQuantity}`;
            for (const {id, title, price, quantity, total, discountPercentage, discountedPrice, thumbnail} of products) {
                let product = document.createElement('div');
                let productsInfo = document.createElement('p');
                let productImg = document.createElement('img');
                product.append(productsInfo, productImg);
                productImg.src = thumbnail;
                productsInfo.innerText =
                    `Product: 
                    id: ${id} 
                title: ${title} 
                price: ${price} 
                quantity: ${quantity} 
                total: ${total} 
                discountPercentage: ${discountPercentage} 
                discountedPrice: ${discountedPrice}`;
                divProducts.appendChild(product);
            }
            info.append(infoCart, divProducts, hr);

        }
        document.getElementsByClassName('carts')[0].appendChild(info);
    })


/*- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
Інгредієнти повинні бути список під час відображення.
 */
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipes => {
        for (const {name, ingredients, image} of recipes.recipes){
            let recipe = document.createElement('div');
            recipe.classList.add('recipe');
            let text = document.createElement('div');
            let p = document.createElement('p');
            let h3 = document.createElement('h3');
            let ul = document.createElement('ul');
            let img = document.createElement('img');
            p.innerText = 'ingredients:'
            h3.innerText = name;
            img.src = image;
            for (const ingredient of ingredients){
                let li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }
            text.append(h3,p, ul);
            recipe.append(img, text);
            let main = document.getElementsByClassName('recipes')[0];
            main.appendChild(recipe);
        }
    })
/*- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)*/