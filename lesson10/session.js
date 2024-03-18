let visiting = JSON.parse(localStorage.getItem('visiting'));
console.log(visiting);
let mainVisiting = document.createElement('div');
visiting.forEach((value) => {
    let mainDiv = document.createElement('div');
    let h1 = document.createElement('h1');
    let h4 = document.createElement('h4');
    mainDiv.classList.add('main');
    h1.innerText = `${value.hours}: ${value.minutes}: ${value.seconds}`;
    h4.innerText = `${value.date}/ ${value.month + 1}/ ${value.year}`;
    mainDiv.append(h1, h4);
    mainVisiting.appendChild(mainDiv);

});
document.body.appendChild(mainVisiting);