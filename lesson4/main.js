/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

function areaOfRectangle(a, b) {
    return a * b;
}

let areaOfRec = areaOfRectangle(10, 5);
console.log(areaOfRec);








/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/
function areaOfCircle(r) {
    return Math.PI * r ** 2;
}

let areaOfCir = areaOfCircle(2);
console.log(areaOfCir);








/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/
function areaOfCylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

let areaOfCyl = areaOfCylinder(5, 6);
console.log(areaOfCyl);








/*- створити функцію яка приймає масив та виводить кожен його елемент*/

let arr = [1, 2, 3, 4, 5];

function iterArr(Arr) {
    for (const arrElement of Arr) {
        console.log(arrElement);
    }
}

iterArr(arr);









/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

function newP(text) {
    document.write(`<p>${text}</p>`)
}

newP('створити функцію яка створює параграф з текстом. Текст задати через аргумент')









/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
function listLi(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}

listLi('створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий');









/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/
function listLiDyn(text, count = 3) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);
}

listLiDyn('abracadabra', 5);






/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
function listArr(arr) {
    document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

listArr(arr);


/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
Для кожного об'єкту окремий блок.*/

let users = [
    {id: 1, name: 'vasya', age: 31,},
    {id: 2, name: 'petya', age: 30,},
    {id: 3, name: 'kolya', age: 29,},
    {id: 4, name: 'olya', age: 28,},
    {id: 5, name: 'max', age: 30,},
    {id: 6, name: 'anya', age: 31,},
    {id: 7, name: 'oleg', age: 28,},
    {id: 8, name: 'andrey', age: 29,},
    {id: 9, name: 'masha', age: 30,},
    {id: 10, name: 'olya', age: 31,},
    {id: 11, name: 'max', age: 31,}
];


function arrObj(arr) {
    for (const arrElement of arr) {
        document.write(`<div>
                                <h2>User Id - ${arrElement.id}
                                    User name - ${arrElement.name}
                                    User age - ${arrElement.age}</h2>
            </div>`);
    }
}

arrObj(users);


/*- створити функцію яка повертає найменьше число з масиву*/
function minValue(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (minNum > arr[i]) {
            minNum = arr[i];
        }
    }
    return minNum;
}

let myArr = [33, 2, 3, 6, 8885]
let x = minValue(myArr);
console.log(x);


/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
Приклад sum([1,2,10]) //->13*/
function sumArr(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = sum + arrElement;
    }
    return sum;
}

let sum = sumArr(myArr);
console.log(sum)


/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
function swap(arr, index1, index2) {
    let a = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = a;
    // [arr [index1], arr[index2]]=[arr[index2], arr[index1]]; ще один спосіб
}

swap(myArr, 4, 1);
console.log(myArr);


/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

let currencyValues = [
    {currency: 'USD', value: 38},
    {currency: 'EUR', value: 41},
    {currency: 'PLN', value: 9.5},
    {currency: 'GBP', value: 48},
    {currency: 'CHF', value: 43},
];

function exchange(sumUAH, exchangeCurrency) {
    let res = 0;
    for (const element of currencyValues) {
        if (exchangeCurrency === element.currency) {
            res = sumUAH / element.value;
        }
    }
    return res + exchangeCurrency;
}

let p = exchange(5000, 'GBP');
console.log(p);