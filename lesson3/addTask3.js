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
for (let i = 1; i < mas4.length; i++) {
    let newMa = mas4[i];
    if (newMa%2===0){
        console.log();
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

