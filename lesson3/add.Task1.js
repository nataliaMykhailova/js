/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

let numMas = [1, 22, 333, 44, 5];
let stringMas = ['one', 'two', 'three', 'four', 'five'];
let mixMas = ['string', 5, 8, true, 'one more string'];
console.log(mixMas);





/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль*/

let ranMas = [];
ranMas[0]= 1;
ranMas[1]='second';
ranMas[2]=true;
ranMas[3]=8;
ranMas[4]= 10;
console.log(ranMas);


/*- є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

let ourMas = [2,17,13,6,22,31,45,66,100,-18];



/*1. перебрати його циклом while
* 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/
let i = 0;
while (i<ourMas.length){
    let item = ourMas[i];
    console.log(item);
    i++;
}

let i1 = ourMas.length-1;
while (i1>=0){
    let item = ourMas[i1];
    console.log(item);
    i1--;
}



/*2. перебрати його циклом for
* * 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/
for (let i = 0; i<ourMas.length; i++){
    let  item = ourMas[i];
    console.log(item);
}

for(let i = ourMas.length-1; i>=0; i--){
    let item = ourMas[i];
    console.log(item);
}



/*3. перебрати циклом while та вивести  числа тільки з непарним індексом
* 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

let i2 = 0;
while(i2<ourMas.length){
    if (i2%2!==0){
        console.log(ourMas[i2]);
    }
    i2++;
}

let i3 = ourMas.length-1;
while(i3>=0){
    if (i3%2!==0) {
        console.log(ourMas[i3]);
    }
    i3--;
}



/*4. перебрати циклом for та вивести  числа тільки з непарним індексом
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

for (let i = 0; i<ourMas.length; i++){
    if (i%2!==0){
        console.log(ourMas[i]);
    }
}

for(let i = ourMas.length-1; i>=0; i--){
    if(i%2!==0){
        console.log(ourMas[i]);
    }
}




/*5. перебрати циклом while та вивести  числа тільки парні  значення
* 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

let i4=0;
while (i4<ourMas.length){
    let item = ourMas[i4];
    if (item%2===0){
        console.log(item)
    }
    i4++;
}


let i5 = ourMas.length-1;
while (i5>=0){
    let item = ourMas[i5];
    if (item%2===0){
        console.log(item);
    }
    i5--;
}





/*6. перебрати циклом for та вивести  числа тільки парні  значення
* * 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)*/

for (let i = 0; i<ourMas.length; i++){
    let item = ourMas[i];
    if (item%2===0){
        console.log(item);
    }
}

for (let i = ourMas.length-1; i>=0; i--){
    let item = ourMas[i];
    if (item%2===0) {
        console.log(item);
    }
}



/*7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в зворотньому порядку.*/

let i6 = 0;
while (i6<ourMas.length){
    let item = ourMas[i6];
    if (item%3===0){
        ourMas[i6]='okten';
    }
    i6++;
}
console.log(ourMas);

for (i = ourMas.length-1; i>=0;i--){
    let item = ourMas[i];
    if (item%3===0){
        ourMas[i]='okten';
    }
}
console.log(ourMas.reverse());



/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

let massNum = [1,15,45,88,889,332,445,668,88,632];
for (const mass1 of massNum) {
    console.log(mass1);
}










/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
let massString = ['ddfdf','fsdfdf','frfgwq', 'fggfgfg', 'dd', 'ewe', 'ee', 'ev', 're', 'poi'];
for (const string of massString) {
    console.log(string);
}

/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
let massMix = [true, 1, 8, 896, false, 'qwe', 'asd', 8924, 'cvb', 7332];
for (const massMix1 of massMix) {
    console.log(massMix1);
}



/*- Створити масив з 10 елементів числового, стірчкового і булевого типу.
 За допомогою if та typeof вивести тільки булеві елементи*/
for (const massMix1 of massMix) {
    if (typeof massMix1==="boolean"){
        console.log(massMix1);
    }
}





/*- Створити масив з 10 елементів числового, стірчкового і булевого типу.
За допомогою if та typeof вивести тільки числові елементи*/
for (const massMix1 of massMix) {
    if (typeof massMix1==="number"){
        console.log(massMix1);
    }
}



/*- Створити масив з 10 елементів числового, стрічкового і булевого типу.
 За допомогою if та typeof вивести тільки рядкові елементи*/
for (const massMix1 of massMix) {
    if (typeof massMix1==="string"){
        console.log(massMix1);
    }
}



/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
Вивести в консоль всі його елементи в циклі.*/

let emptyMass = [];
emptyMass[0] = true;
emptyMass[1]=25;
emptyMass[2]='oreo';
emptyMass[3]=47;
emptyMass[4]=false;
emptyMass[5]=88;
emptyMass[6]='lolita';
emptyMass[7]='chita';
emptyMass[8]='pes';
emptyMass[9]=true;






/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
let numOfIter = 0;
for(i=0; i<10; i++){
     numOfIter += 1;
}
console.log(numOfIter);
document.write(`<p>${numOfIter}</p>`);





/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
let numOfIter1 = 0;
for (i=0; i<100; i++){
    numOfIter1 +=1;
}
console.log(numOfIter1);
document.write(`<p>${numOfIter1}</p>`);





/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
let numOfIter2 = 0;
for (i=0; i<100; i=i+2){
    numOfIter2 +=1;
}
console.log(numOfIter2);
document.write(`<p>${numOfIter2}</p>`);




/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
for (i=0; i<100; i++){
    if (i%2===0&&i!==0){
        console.log(i);
        document.write(`<p>${i}</p>`)
    }
}

/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
*/
for (i=0; i<100; i++){
    if(i%2!==0){
        console.log(i);
        document.write(`${i}`);
    }
}




/*стоврити масив книжок (назва, кількість сторінок, автори , жанри).*/
let books = [
    {name: 'Solar', countOfShits: 800, outers: ['Rio Pio', 'Mao Dao'], genre: ['drama', 'comedy']},
    {name: 'Love', countOfShits: 120, outers: ['Rey Gans'], genre: ['drama', 'biography']},
    {name: 'Lolita', countOfShits: 90, outers: ['Max Liter', 'Sem More'], genre: ['poem']},
    {name: 'Space inside me', countOfShits: 420, outers: ['Mario Ameba'], genre: ['fantasy', 'comedy']},
    {name: 'Animal', countOfShits: 304, outers: ['Cris Po', 'Samanta Lenin'], genre: ['scientific']}
]
/*-знайти наібльшу книжку.*/
let element = books[0].countOfShits;
for (const book of books) {
    if (element<book.countOfShits){
        element=book;
    }
}
console.log(element);



/*- знайти книжку/ки з найбільшою кількістю жанрів*/
let element1 = books[0].genre.length;
for (const book of books) {
    if (element1<= book.genre.length){
        console.log(book);
    }
}





/*- знайти книжку/ки з найдовшою назвою*/
let element2 = books[0].name;
for (const book of books) {
    if (element2<book.name){
        element2 = book;
    }
}
console.log(element2);



/*- знайти книжку/ки які писали 2 автори*/
for (const book of books) {
    if(book.outers.length===2){
        console.log(book);
    }
}
/* знайти книжку/ки які писав 1 автор*/
for (const book of books) {
    if (book.outers.length===1){
        console.log(book);
    }

}


