/*- зробити файл users.html
з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)*/
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
        let ul = document.createElement('ul');
        for (const {id, name, } of users) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                li.innerText = `${id} ${name}`;
                a.innerText ='info';
                a.onclick = function (){
                        location.href = 'user-details.html?id='+id;
                }
                ul.append(li, a);
        }
        document.body.appendChild(ul);
    });