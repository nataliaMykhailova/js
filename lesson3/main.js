/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/

for (let i = 1; i <= 10; i++) {
    document.write(`<div class="task1">
Okten school is cool!!!
</div>`);
}


/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
for (let i = 1; i <= 10; i++) {
    document.write(`<div class="task2">
${i} Okten school is cool!!!
</div>`);
}


/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

let i = 1;
while (i <= 20) {
    document.write(`<h1 class="task3">Okten school is cool!!!</h1>`);
    i++;
}

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
let w = 1;
while (w <= 20) {
    document.write(`<h1 class="task4"> ${w} Okten school is cool!!!</h1>`);
    w++;
}


/*- Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

ШАБЛОН:
 <ul>
    <li>ITEM OF ARRAY</li>
    <!--
        і тд інші об'єкти масиву
         ...
         ...
         ...
    -->
</ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
*/

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul class="colorGray">`)
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`);


/* те саме за допомогою while*/
let e = 0;
document.write(`<ul class="colorPurple">`)
while (e < listOfItems.length) {
    let item = listOfItems[e];
    document.write(`<li>${item}</li>`);
    e++;
}
document.write(` </ul>`);








/*Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

			let products = [
				{
					title: 'milk',
					price: 22,
					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
				},
				{
					title: 'juice',
					price: 27,
					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
				},
				{
					title: 'tomato',
					price: 47,
					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
				},
				{
					title: 'tea',
					price: 15,
					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
				},
			];

ШАБЛОН
 <div class="product-card">
        <h3 class="product-title">TITLE. Price - PRICE</h3>
        <img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


*/


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];


for (const productsKey of products) {
    document.write(`<div class="product-card">
        <h3 class="product-title">${productsKey.title} price - ${productsKey.price}</h3>
        <img src="${productsKey.image}" alt="" class="product-image"/>
    </div>`)
}

/* те саме за допомогою while*/
let y = 0;
while (y < products.length) {
    let product = products[y];
    document.write(`<div class="product-card">
<h3 class="product-title">${product.title} price - ${product.price}</h3>
        <img src="${product.image}" alt="" class="product-image"/>
    </div>`);
    y++;
}


/*є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
 за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років*/

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.status === true) {
        document.write(`<h3 class="true">Name: ${user.name} Age: ${user.age} Status: ${user.status}</h3>`);
    }
}
for (const user of users) {
    if (user.status === false) {
        document.write(`<h3 class="false">Name: ${user.name} Age: ${user.age} Status: ${user.status}</h3>`);
    }
}
for (const user of users) {
    if (user.age > 30) {
        document.write(`<h3 class="age">Name: ${user.name} Age: ${user.age}</h3>`);
    }
}

/*те саме за допомогою while*/
let o = 0;
while (o < users.length) {
    let user = users[o];
    if (user.status === true) {
        document.write(`<h3 class="true">Name: ${user.name} Age: ${user.age} Status: ${user.status}</h3>`);
    }
    o++;
}

let r = 0;
while (r < users.length) {
    let user = users[r];
    if (user.status === false) {
        document.write(`<h3 class="false">Name: ${user.name} Age: ${user.age} Status: ${user.status}</h3>`);
    }
    r++;
}

let c = 0;
while (c < users.length) {
    let user = users[c];
    if (user.age > 30) {
        document.write(`<h3 class="age">Name: ${user.name} Age: ${user.age}</h3>`);
    }
    c++;
}