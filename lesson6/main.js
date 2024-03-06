/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
/*ну або ще можна присвоїти змінним ці стрінгові значення і звертатися до змінних*/
let helloWorld = 'hello world';
let lorem = 'lorem ipsum';
let jsCool = 'javascript is cool';
console.log(helloWorld.length);
console.log(lorem.length);
console.log(jsCool.length);


/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'*/
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
/*можна присвоїти змінним ці стрінгові значення і звертатися до змінних*/
let upHelloWorld = helloWorld.toUpperCase();
let upLorem = lorem.toUpperCase();
let upJsCool = jsCool.toUpperCase();
console.log(upHelloWorld, upLorem, upJsCool);


/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
/*Або можна звернутися до змінних*/
console.log(upHelloWorld.toLowerCase());
console.log(upLorem.toLowerCase());
console.log(upJsCool.toLowerCase());


/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
let str = ' dirty string   ';
let newStr = str.replaceAll(' ', '');
console.log(newStr, newStr.length);


/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
let str1 = 'Ревуть воли як ясла повні';
let strToArr = (str) => str.split(' ');
let str2 = strToArr(str1);
console.log(str2);


/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/
let nums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
nums2 = nums.map(num => num + '');
console.log( nums2);


/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
let sortNum = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((el1, el2) => el1 - el2);
    }
    if (direction === 'descending') {
        return arr.sort((el1, el2) => el2 - el1);
    }
}
let nums1 = [11, 21, 3];
console.log(sortNum(nums1, 'descending'));


/*==========================
- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 -- відсортувати його за спаданням за monthDuration
 -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
/*-- відсортувати його за спаданням за monthDuration*/
coursesAndDurationArray.sort((el1, el2) => el2.monthDuration - el1.monthDuration);
console.log(coursesAndDurationArray);

/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/
let filterCoursesAndDurationArray = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterCoursesAndDurationArray);

/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/
let mappedCoursesAndDurationArray = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
});
console.log(mappedCoursesAndDurationArray);



/*=========================
описати колоду карт (від 6 до туза без джокерів)
- знайти піковий туз
- всі шістки
- всі червоні карти
- всі буби
- всі трефи від 9 та більше

{
   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
   value: '', // '6'-'10', 'ace','jack','queen','king','joker'
   color:'', // 'red','black'
}*/

let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
let valueCard = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

let card = ()=> {
    let cards = [];
    for (let suit of cardSuit) {
        for (let value of valueCard) {
            if (suit === 'spade' || suit === 'clubs') {
                cards.push({
                    suit: suit,
                    value: value,
                    color: 'black'
                })
            } else {
                cards.push({
                    suit: suit,
                    value: value,
                    color: 'red'
                })
            }
        }
    }
    return cards;
}
let cards = card();
console.log(cards);

/*- знайти піковий туз*/
let spadeAce = cards.find(value => value.value === 'ace' && value.suit === 'spade');
console.log(spadeAce);


/* - всі шістки*/
let sixes = cards.filter(value => value.value === '6');
console.log(sixes);


/*- всі червоні карти*/
let redCards = cards.filter(value => value.color === 'red');
console.log(redCards);


/*- всі буби*/
let diamondCards = cards.filter(value => value.suit === 'diamond');
console.log(diamondCards);


/*- всі трефи від 9 та більше*/
let clubsCards = cards.filter(value => (value.suit === 'clubs' && value.value > '9') || (value.suit === 'clubs' && value.value === '10'));
console.log(clubsCards);


/*=========================

Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/
let reduceCards = cards.reduce((previousValue, currentValue) => {
    if (currentValue.suit === 'spade') {
        previousValue.spades.push(currentValue);
    }
    if (currentValue.suit === 'diamond') {
        previousValue.diamonds.push(currentValue);
    }
    if (currentValue.suit === 'heart') {
        previousValue.hearts.push(currentValue);
    }
    if (currentValue.suit === 'clubs') {
        previousValue.clubs.push(currentValue)
    }
    return previousValue;
}, { spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduceCards);



/*=========================
взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

/*--написати пошук всіх об'єктів, в який в modules є sass*/

let findSass = coursesArray.filter(value => value.modules.includes('sass'));
console.log(findSass);



/*--написати пошук всіх об'єктів, в який в modules є docker*/
let findDocker = coursesArray.filter(value => value.modules.includes('docker'));
console.log(findDocker);