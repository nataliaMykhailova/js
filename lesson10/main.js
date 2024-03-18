/*Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
під формою з'явився блок з вашим об'єктом
==========================*/
let pText = document.getElementsByClassName('text')[0];
let submit = document.getElementById('saveText');
let button = document.getElementById('button');

submit.onsubmit = function (ev) {
    ev.preventDefault();
    let user = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }
    pText.innerText = `${user.name} ${user.surname} ${user.age}`;
}


/*є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки
буде додавати до неї +1
==========================*/
localStorage.setItem('p', (JSON.parse(localStorage.getItem('p') || 0) + 1));
let numberH1 = document.getElementById('number');
numberH1.innerText = localStorage.getItem('p');


/*Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні
 якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль,
 а побудувати дом структуру під кожну сессію
=========================*/
let newDate = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
}
window.onload = function () {
    let visiting = JSON.parse(localStorage.getItem('visiting')) || [];
    visiting.push(newDate);
    localStorage.setItem('visiting', JSON.stringify(visiting));
};


/*зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/
let butPrev = document.createElement('button');
butPrev.innerText = 'prev';
let butNext = document.createElement('button');
butNext.innerText = 'next';
butNext.classList.add('next');
document.body.append(butPrev, butNext);

let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push({id: i + 1, count: 10 * i + 2})
}
let n = 0;
let div = document.createElement('div');
let tenElements = function () {
    div.innerText = '';
    if (n >= 0 && n < arr.length) {
        for (let i = n; i < n + 10; i++) {
            let p = document.createElement('p');
            const arrElement = arr[i];
            p.innerText = `${arrElement.id} ${arrElement.count}`;
            console.log(arrElement);
            div.appendChild(p);
        }
    }
}
document.body.appendChild(div);

tenElements();
butPrev.onclick = function () {
    n -= 10;
    if (n >= 0) {
        tenElements();
    } else {
        n = 0;
        tenElements()
    }
}
butNext.onclick = function () {
    n += 10;
    if (n < arr.length) {
        tenElements();
    } else {
        n = arr.length - 10;
        tenElements();
    }
}

/*- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні
на кнопку зникав елемент з id="text".
 */
let h1Remove = document.getElementById('h1');
h1Remove.innerText = 'Натисни на кнопку і зітри текст!!!';
let removeButton = document.createElement('button');
removeButton.innerText = 'Стерти текст';
document.body.append(h1Remove, removeButton);
removeButton.onclick = function () {
    h1Remove.remove();
}


/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
 */
let checkForm = document.getElementById('checkAge');
let checkedInput = document.getElementById('ageCheck');
let pInfo = document.getElementsByClassName('divInfo')[0];
checkForm.onsubmit = function (ev) {
    ev.preventDefault();
    if (checkedInput.value < 18) {
        pInfo.innerText = 'Вік менше 18!!!'
    } else {
        pInfo.innerText = 'Вік більше 18!'
    }
}


/* Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.*/
let creator = document.getElementById('creator');
let tableDiv = document.getElementsByClassName('divTable')[0];
let table = document.createElement('table');
let tableButton = document.getElementById('tableButton');
creator.onsubmit = function (ev) {
    ev.preventDefault();
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;
    let content = document.getElementById('contents').value;
    for (let ir = 0; ir < rows; ir++) {
        let tr = document.createElement('tr');
        for (let ic = 0; ic < columns; ic++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
        tableDiv.appendChild(table);
    }
    tableButton.disabled = true;
}

/*(Додатковачастина для завдання)*** (подібне було вище, але...будьте уважні в другій частині)
створити сторінку з довільним блоком, в середині якого є значення "100грн"
при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/
let storageObg = JSON.parse(localStorage.getItem('time')||{});
let storageTime =storageObg.time;
let storageCash =storageObg.cash;
let curTime = new Date().getTime();
let hryvnia = document.getElementById('hryvnia');
hryvnia.innerText = storageCash + ' грн';
let newCash = storageCash + 10;
if (curTime - storageTime >= 10000) {
    hryvnia.innerText = newCash + ' грн';
    localStorage.setItem('time', JSON.stringify({time: curTime, cash: newCash}));
}