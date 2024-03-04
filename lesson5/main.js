/*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!*/
/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

const areaOfRectangle = (a, b) => a * b;
console.log(areaOfRectangle(10, 20));






/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
const areaOfCircle = r => Math.PI * r ** 2;
console.log(areaOfCircle(10));





/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
const areaOfCylinder = (h, r) => 2 * Math.PI * r * (h + r);
console.log(areaOfCylinder(10,5));







/*- створити функцію яка приймає масив та виводить кожен його елемент*/

let arr1 = [1, 2, 3, 4, 5];

const iterArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
iterArr(arr1);




/*Створила ф-цію щоб розділяти завдання при видведенні))*/
const divider = (weight, color) => document.write(`<hr style="border: ${weight}px solid ${color}">`);








/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

const newP = (text) => document.write(`<p>${text}</p>`);
newP('створити функцію яка створює параграф з текстом. Текст задати через аргумент');
divider(2, 'red');






/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
const listLi = (text) => {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
listLi('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');
divider(7, 'blue');







/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
const listLiDyn = (text, count = 3) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listLiDyn('abracadabra', 5);
divider(3, 'pink');






/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
const listArr = (arr) => {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

listArr(arr1);
divider(5, 'red');


/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.*/
let users = [
    {id:1, name: 'Anton', age: 20},
    {id:2, name: 'Viktor', age: 27},
    {id:3, name: 'Amina', age: 30},
    {id:4, name: 'Chita', age: 31},
    {id:5, name: 'Lily', age: 22},
    {id:6, name: 'Ross', age: 24},
    {id:7, name: 'Piter', age: 28},
    {id:8, name: 'Nazar', age: 27},
    {id:9, name: 'Mango', age: 21},
    {id:10, name: 'Fedir', age: 20},
    {id:11, name: 'Slava', age: 29},
    {id:12, name: 'Rio', age: 34},
    {id:13, name: 'Pluto', age: 35},
    {id:14, name: 'Gigi', age: 38},
    {id:15, name: 'Anna', age: 21}
]


const arrObj = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>
                                <h2>User Id - ${arrElement.id} 
                                    User name - ${arrElement.name} 
                                    User age - ${arrElement.age}</h2>
                                   
            </div>`);
        divider(1, 'gray');
    }
}
arrObj(users);







/*- створити функцію яка повертає найменьше число з масиву*/
const minValue = (arr) => {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    return minNum;
}
let myArr = [33, 2, 3, 6, 8885];
console.log(minValue(myArr));








/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
Приклад sum([1,2,10]) //->13*/
const sumArr = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sumArr(myArr));








/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
const swap = (arr, index1, index2) => {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    // [arr [index1], arr[index2]]=[arr[index2], arr[index1]]; ще один спосіб
    return arr;
}

console.log(swap(myArr, 2,4));







/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

let currencyValues = [
    {currency: 'USD', value: 38},
    {currency: 'EUR', value: 41},
    {currency: 'PLN', value: 9.5},
    {currency: 'GBP', value: 48},
    {currency: 'CHF', value: 43},
];

const exchange = (sumUAH, exchangeCurrency) => {
    let res = 0;
    for (const element of currencyValues) {
        if (exchangeCurrency === element.currency) {
            res = sumUAH / element.value;
        }
    }
    return res + exchangeCurrency;
}
console.log(exchange(5000, 'USD'));