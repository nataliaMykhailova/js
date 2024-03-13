/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Ivan', 'Kozar', 'kozar@gmail.com', 380563214458),
    new User(2, 'Viktoria', 'Martyniv', 'martyniv@gmail.com', 380786523314),
    new User(3, 'Lilia', 'Kovaliv', 'kovaliv@gmail.com', 380691211336),
    new User(4, 'Taras', 'Kelbis', 'kelbis@gmail.com', 380987745632),
    new User(5, 'Chita', 'Pronto', 'pronto@gmail.com', 380569987744),
    new User(6, 'Petro', 'Kozel', 'kozel@gmail.com', 380643322111),
    new User(7, 'Andre', 'Apostol', 'apostol@gmail.com', 380963215487),
    new User(8, 'Ulia', 'Fil', 'fil@gmail.com', 380695632214),
    new User(9, 'Ivanna', 'Dobosh', 'dobosh@gmail.com', 380742324289),
    new User(10, 'Zahar', 'Zefir', 'zefir@gmail.com', 3809877466321)
]
console.log(users);


/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
let evenIdUsers = users.filter(value => value.id % 2 === 0);
console.log(evenIdUsers);


/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
/*масив по ід вже відсортований по зростанню, тому я зробила по спаданню*/
let sortUsers = users.sort((a, b) => b.id - a.id);
console.log(sortUsers);


/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Valeriy', 'Kobza', 'kobza@gmail.com', 380966532148, ['coffee', 'juice', 'lemon']),
    new Client(2, 'Viktoria', 'Martyniv', 'martyniv@gmail.com', 380786523314, ['pear', 'apple']),
    new Client(3, 'Lilia', 'Kovaliv', 'kovaliv@gmail.com', 380691211336, ['fish']),
    new Client(4, 'Taras', 'Kelbis', 'kelbis@gmail.com', 380987745632, ['meat', 'fish', 'bread']),
    new Client(5, 'Chita', 'Pronto', 'pronto@gmail.com', 380569987744, ['sausage']),
    new Client(6, 'Petro', 'Kozel', 'kozel@gmail.com', 380643322111, ['orange', 'meat']),
    new Client(7, 'Andre', 'Apostol', 'apostol@gmail.com', 380963215487, ['vine', 'cheese', 'cookies']),
    new Client(8, 'Ulia', 'Fil', 'fil@gmail.com', 380695632214, ['orange', 'plums']),
    new Client(9, 'Ivanna', 'Dobosh', 'dobosh@gmail.com', 380742324289, ['juice']),
    new Client(10, 'Zahar', 'Zefir', 'zefir@gmail.com', 3809877466321, ['fish', 'salt'])
]
console.log(clients);


/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
let sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);


/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
function Car(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    };
    this.info = function () {
        for(const element in this){
            if(typeof this[element]==="function") continue;
                console.log(element.toUpperCase() + ': ', this[element]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        if (newSpeed > this.maxSpeed&& newSpeed<=1000) {
            this.maxSpeed = newSpeed;
            console.log(car);
        } else if (newSpeed>1000) {
            console.log('Введена швидкість занадто велика, спробуйте інше значення!');
        } else {
            console.log(`
            Максимальна швидкість вища ніж введене значення!!! (max speed = ${this.maxSpeed})
            Введіть значенняя вище max speed!!!
            `);
        }
    }
    this.changeYear = function (newValue) {
        let currentYear = new Date();
        if (newValue >= 1930 && newValue <= currentYear.getFullYear()) {
            this.yearOfManufacture = newValue;
            console.log(car);
        } else {
            console.log('Рік випуску автомобіля повинен бути в діапазоні 1930 - поточний рік.')
        }
    }
    this.addDriver = function (driver) {
       return this.driver = driver;
    }

}


function Driver(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let driver = new Driver('Anton', 'Valter', 35);
let driver2 = new Driver('Stepan', 'Giga', 55);

let car = new Car('Audi', 'Audi corporation', 2008, 240, 5.2);
let carWithoutDriver = new Car('Volvo', 'Volvo', 2006, 200, 2.8);
car.drive();
car.info();
car.increaseMaxSpeed(600);
car.changeYear(2024);
car.addDriver(driver);
console.log(car.driver);
car.info();
carWithoutDriver.info();


/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class Car1 {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`)
    }

    info() {
      for (const element in this){
          if(typeof this[element]==="function") continue;
          console.log(element.toUpperCase()+ ': ', this[element]);
      }
    }

    increaseMaxSpeed(newSpeed) {
        if (newSpeed > this.maxSpeed&&newSpeed<1000) {
            this.maxSpeed = newSpeed;
            console.log(car1);
        } else if (newSpeed > 1000) {
            console.log('Введена швидкість занадто велика, спробуйте інше значення!')
        } else {
            console.log(`
            Максимальна швидкість вища ніж введене значення!!! (max speed = ${this.maxSpeed})
            Введіть значенняя вище max speed!!!
            `);
        }
    }


    changeYear(newValue) {
        let currentYear = new Date();
        if (newValue >= 1930 && newValue <= currentYear.getFullYear()) {
            this.yearOfManufacture = newValue;
            console.log(car1);
        } else {
            console.log('Рік випуску автомобіля повинен бути в діапазоні 1930 - поточний рік.')
        }
    }

    addDriver(driver) {
       return this.driver = driver;

    }
}

car1 = new Car1('Tesla', 'tesla company', 2021, 250, 4.4);
car1.drive();
car1.info();
car1.increaseMaxSpeed(500);
car1.changeYear(2022);
car1.addDriver(driver2);
car1.info();


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella('Anna', 18, 42),
    new Cinderella('Alisa', 21, 38),
    new Cinderella('Lola', 28, 37),
    new Cinderella('Merry', 19, 40),
    new Cinderella('Stella', 21, 41),
    new Cinderella('Sofia', 17, 39),
    new Cinderella('Maryna', 23, 37),
    new Cinderella('Fiona', 25, 35),
    new Cinderella('Jennyfer', 28, 39),
    new Cinderella('Amanda', 24, 37)
]
let prince = new Prince('Artur', 28, 35);
for (const element of cinderellas) {
    if (element.footSize === prince.shoeSize) {
        console.log(element);
    }
}
console.log(cinderellas.find(value => value.footSize === prince.shoeSize));