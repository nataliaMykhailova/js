/*-------------------------------------------------------- part 1----------------------------------------------------*/
/*- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
Вивести кожну змінну за допомогою: console.log*/

let hello = 'hello';
console.log(hello);
let owu = 'owu';
console.log(owu);
let com = 'com';
console.log(com);
let ua = 'ua';
console.log(ua);
let m = 1;
console.log(m);
let n = 10;
console.log(n);
let v = -999;
console.log(v);
let d = 123;
console.log(d);
const PI = 3.14;
console.log(PI);
let e = 2.7;
console.log(e);
let f = 16;
console.log(f);
let g = true;
console.log(g);
let h = false;
console.log(h);
/*-------------------------------------------------------part 2------------------------------------------------------*/
/*- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)*/

let firstName = "Natalia";
let middleName = "Mykolayivna";
let lastName = "Mykhailova";
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);

/*-----------------------------------------------------part 3---------------------------------------------------------*/
/*- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;*/

let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

/*----------------------------------------------------part 4---------------------------------------------------------*/
/*Додаткове для тих хто цікавився prompt`oм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let name = prompt("Enter your name:");
let middle = prompt("Enter your middle name:");
let age = prompt("Enter your age:");
console.log("Name:" + " " + name +" "+"Middle name:" + " " + middle +" " +"Age:"+" " + age);