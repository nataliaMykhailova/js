let userId = new URL(location.href).searchParams.get('id')
let userURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
fetch(userURL)
    .then(res => res.json())
    .then((components) => {
        let mainUl = document.createElement('ul');
        for (const component in components) {
            let mainLi = document.createElement('li');
            mainLi.innerText = `${component}: ${components[component]}`;
            if (component === "address"|| component === "company") {
                mainLi.innerText = `${component}:`
                let elUl = document.createElement('ul');
                for (const element in components[component]) {
                    let elLi = document.createElement('li');
                    elLi.innerText = `${element}: ${components[component][element]}`;
                    if ( element === "geo"){
                        elLi.innerText = `${element}`;
                        let geoUl = document.createElement('ul');
                        for (const geo in  components[component][element]){
                            let geoLi = document.createElement('li');
                            geoLi.innerText = `${geo}: ${components[component][element][geo]}`;
                            geoUl.appendChild(geoLi);
                        }
                        elLi.appendChild(geoUl);
                    }
                    elUl.appendChild(elLi);
                }
            mainLi.appendChild(elUl);
            }
            mainUl.appendChild(mainLi);
        }
        document.body.appendChild(mainUl);

    });