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

let usersTrue = users.filter(value => value.status);
let usersFalse = users.filter(value => !value.status);
let usersAge = users.filter(value => value.age > 30);
console.log(usersTrue, usersFalse, usersAge);

/*
стоврити масив книжок (назва, кількість сторінок, автори , жанри).
-знайти наібльшу книжку.
-знайти книжку/ки з найбільшою к-тю жанрів
- знайти книжку/ки з найдовшою назвою
- знайти книжку/ки які писали 2 автори
- знайти книжку/ки які писав 1 автор*/

let books = [
    {name: 'Solar', countOfShits: 800, outers: ['Rio Pio', 'Mao Dao'], genre: ['drama', 'comedy']},
    {name: 'Love', countOfShits: 1120, outers: ['Rey Gans'], genre: ['drama', 'biography']},
    {name: 'Lolita', countOfShits: 90, outers: ['Max Liter', 'Sem More'], genre: ['poem']},
    {name: 'Space inside me', countOfShits: 420, outers: ['Mario Ameba'], genre: ['fantasy', 'comedy']},
    {name: 'Animal', countOfShits: 304, outers: ['Cris Po', 'Samanta Lenin'], genre: ['scientific']}
]
let bigBook = books.reduce((previousValue, currentValue) => {
    return previousValue.countOfShits > currentValue.countOfShits ? previousValue : currentValue
});
let biggerName = books.reduce((previousValue, currentValue) => {
    return previousValue.name > currentValue.name ? previousValue : currentValue
});
let twoOutersBook = books.filter(value => value.outers.length >= 2);
let oneOuterBook = books.filter(value => value.outers.length === 1);
console.log(bigBook);
console.log(biggerName);
console.log(twoOutersBook);
console.log(oneOuterBook);


/*
- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]
*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (const user of usersWithId) {
    user.address = [];
    for (const address of citiesWithId) {
        if (user.id === address.user_id) {
            user.address.push(address);
        }
    }
}
console.log(usersWithId);

