function gender() {
    if('male') {
        div.innerHTML = `<p><img src="img/male.png"></p>`
    }
}

let func = async (characters) => {
    return await fetch(`http://swapi.dev/api/${characters}`)
           .then(result => result.json())
           .then(result => result.characters).then(data => data.forEach(el => fetch(el)
                                   .then(result => result.json())
                                   .then(result => {
                                    const div = document.createElement('div');
                                    div.className = 'list';
                                    function gender() {
                                        return result.gender === 'male' ? `<img id="sex" src="img/male.png">` : `<img id="sex" src="img/female.png">`
                                    }
                                    div.innerHTML = `
                                        <div>
                                            <p>${result.name}</p>
                                            <p>Birth: ${result.birth_year}</p>
                                            <p>${gender()}</p>
                                        </div>
                                    `;
                                        place.append(div);
                                   })));
}

let planets = async (a = 1) => {
    return await fetch(`http://swapi.dev/api/planets/?page=${a}`)
           .then(result => result.json())
           .then(result => {
                result.results.forEach(el => {
                const div1 = document.createElement('div');
                div1.className = 'list1'; 
                    div1.innerHTML = `
                        <div>
                            <p>${el.name}</p>
                        </div>
                    `;
                    place.append(div1);
                });
            });
}

const btn = document.getElementById('submit');
const place = document.getElementById('place');
const btnP = document.getElementById('btnP');
const btnN = document.getElementById('btnN');
btn.addEventListener('click', () => {
    btnP.style.display = 'none';
    btnN.style.display = 'none';
    place.innerHTML = '';
    let characters = document.getElementById('parts').value;
    func(characters);
}); 

a = 1;
const btn1 = document.getElementById('submit1');
btn1.addEventListener('click', () => {
    place.innerHTML = '';
    planets();

    btnP.style.display = 'block';
    btnN.style.display = 'block';

    btnN.addEventListener('click', () => {
        place.innerHTML = '';
        planets(++a);
        if (a === 6) {
            btnN.style.display = 'none'
        } else {
            btnP.style.display = 'block';
            btnN.style.display = 'block';
        }
    });

    btnP.addEventListener('click', () => {
        place.innerHTML = '';
        planets(--a);
        if (a === 1) {
            btnP.style.display = 'none'
        } else {
            btnP.style.display = 'block';
            btnN.style.display = 'block';
        }
    });
}); 


