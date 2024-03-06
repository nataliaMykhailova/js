/*1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.*/
let mas = [];
for (let i = 0; i < 200; i++) {
    if (i % 2 === 0 && mas.length < 50) {
        mas.push(i);
    }
}
console.log(mas);


/*b. заповнити його 50 непарними числами за допомоги циклу.*/
let mas2 = [];
for (let i = 0; i < 200; i++) {
    if (i % 2 !== 0 && mas2.length < 50) {
        mas2.push(i);
    }
}
console.log(mas2);


/*c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)*/
let mas3 = [];
for (let i = 0; mas3.length < 20; i++) {
    i = Math.floor(Math.random() * 1000000);
    mas3.push(i);
}
console.log(mas3)


/* d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)*/
let mas4 = [];
for (let i = 0; mas4.length < 20; i++) {
    i = Math.floor(Math.random() * 732) + 8;
    mas4.push(i);
}
console.log(mas4);


/* 2. Вивести за допомогою console.log кожен третій елемен*/
for (let i = 0; i < mas4.length; i = i + 3) {
    const mas4Element = mas4[i];
    console.log(mas4Element);
}


/*3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
for (let i = 0; i < mas4.length; i = i + 3) {
    const mas4Element = mas4[i];
    if (mas4Element % 2 === 0) {
        console.log(mas4Element);
    }
}


/* 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив*/
let newMas = [];
for (let i = 0; i < mas4.length; i = i + 3) {
    const mas4Element  = mas4[i];
    if (mas4Element % 2 === 0) {
        newMas.push(mas4Element);
    }
}
console.log(newMas);





/* 5. Вивести кожен елемент масиву, сусід справа якого є парним*/
for (let i = 0; i < mas4.length; i++) {
    let newMa = mas4[i];
    if (newMa%2===0&&i!==0){
        console.log(mas4[i-1]);
    }
}




/*6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.*/
let mas5 = [100,250,50,168,120,345,188];
let  sum = 0;
for (let i = 0; i < mas5.length; i++) {
    const mas5Element = mas5[i];
    sum +=mas5Element;
}
console.log(sum/mas5.length);




/*7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/
let massRandom = [];
for (let i = 0; massRandom.length<10; i++){
    i = Math.floor(Math.random()*20);
    massRandom.push(i);
}
console.log(massRandom);

let newMassRandom = [];
for (let element of massRandom) {
    element *=5;
    newMassRandom.push(element);
}
console.log(newMassRandom);








 /*8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент
 є числом - додати його в інший масив.*/
let massNumber = [];
let massMix = ['ola', 7, true, 'noa', 89, false, 56, 'chita'];
for (const element of massMix) {
    if (typeof element==="number"){
        massNumber.push(element);
    }
}
console.log(massNumber);



/*- Дано 2 масиви з рівною кількістю об'єктів.
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



/*- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/

/*- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
значення одного масиву в інший.
 */


/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.*/
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/