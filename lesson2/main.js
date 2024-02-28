/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let arr = [1, 45, 'number', true, [1, 2, 3], {name: 'Anna', age: 18}, 87, 'boolean', false, -789];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
let book1 = {
    title: 'Love',
    pageCount: 500,
    genre: 'poetry',
}
let book2 = {
    title: 'Horses',
    pageCount: 100,
    genre: 'essay',
}
let book3 = {
    title: '10 angels',
    pageCount: 200,
    genre: 'drama',
}


/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
Кожен автор має поля name та age.*/

let book4 = {
    title: 'About me',
    pageCount: 250,
    genre: 'autobiography',
    authors: [{name: 'Ann Faraway', age: 18,}, {name: 'Jada Red', age: 22,}],
}
let book5 = {
    title: '1001',
    pageCount: 600,
    genre: 'biography',
    authors: [{name: 'Cas Glass', age: 38,}, {name: 'Enn Catty', age: 37,}],
}
let book6 = {
    title: 'Winter',
    pageCount: 50,
    genre: 'poetry',
    authors: [{name: 'Emma San', age: 18,}, {name: 'Jenifer San', age: 22,}, {name: 'Viola San', age: 24,},],
}

/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
Вивести в консоль пароль кожного користувача*/

let users = [
    {name: 'Anna', userName: 'Star', password: 123,},
    {name: 'Vika', userName: 'Viktoria', password: 345,},
    {name: 'Stefania', userName: 'Stefanny', password: 567,},
    {name: 'Anton', userName: 'CoolMen', password: 1234,},
    {name: 'Jaf', userName: 'Jaffy', password: 4567,},
    {name: 'Karolina', userName: 'Lina', password: 7891,},
    {name: 'Vlad', userName: 'Vlad', password: 1023,},
    {name: 'Roman', userName: 'Romeo', password: 10557,},
    {name: 'Ivan', userName: 'Vania', password: 7785,},
    {name: 'Valeria', userName: 'Lera', password: 7895},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/
 let x = +prompt("Введіть 1, 0, або -3");
 if (x !== 0) {
     console.log('Вірно');
} else {
    console.log('Невірно');
 }
/*-----або ще варіант----*/
switch (x){
    case 0:
        console.log('Невірно');
        break;
    default:
        console.log('Вірно');
}


/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = -856;
if (time>=0 && time <= 15) {
    console.log('Час належить до першої четверті години');
} else if (time>15&&time <= 30) {
    console.log('Час належить до другої четверті години');
} else if (time>30 && time <= 45) {
    console.log('Час належить до третьої четверті години');
} else if (time>45 &&time <= 60) {
    console.log('Час належить до четвертої четверті години');
} else {
    console.log('undefined');
}

/*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
(у першу, другу чи третю).*/

let day = -2365;
if (day>=0 && day<= 10) {
    console.log('First decade');
} else if (day>10 && day<= 20) {
    console.log('Second decade');
} else if (day>20 && day<= 31) {
    console.log('Third decade');
} else {
    console.log('undefined');
}

/*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
 інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
let numOfDay = +prompt('Щоб дізнатися розклад, ведіть порядковий номер дня тижня:');
switch (numOfDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('incorrect number')
}

/*- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let firstNum = +prompt('Введіть перше число:');
let secondNum = +prompt('Введіть друге число:');
if (firstNum > secondNum) {
    console.log(firstNum)
} else if (firstNum < secondNum) {
    console.log(secondNum)
} else {
    console.log('Числа однакові')
}

/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
(хибноподібні, тобто приводиться до false)*/

let xx = undefined;
if (xx === null || xx === 0 || xx === '' || xx === undefined || xx === NaN || xx === false) {
    xx = 'default';
    console.log(xx)
} else {
    console.log(xx);
}
/*--або ще варіант розвзку цього завдання:-----*/
let xxx = '' || 'default';
console.log(xxx);


/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4]['monthDuration'] > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5]['monthDuration'] > 5) {
    console.log('Супер');
}  