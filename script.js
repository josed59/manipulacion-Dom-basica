// Acceder a los elementos del DOM

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

// modificar los valores de texto o ingresar html

//h1.innerHTML = 'Ingresa valor <br> y Html';
h1.innerText = 'Ingresa valor <br> sin Html';

//leer un atributo
console.log(h1.getAttribute('atributo'))
// Agregar un atributo
h1.setAttribute('class','rojo');
// agregar a atrubuto existente
h1.classList.add('verde')
//eliminar atributo
h1.classList.remove('rojo')

//agregar valor al input
input.value='jose'

//crear un elemento e incluirlo en un contenedor
const img = document.createElement('img')
img.setAttribute('src','https://lh3.googleusercontent.com/ogw/AOh-ky2Cr26y5luSsA9AsH6q5fBDITOmvHkBJXjDP6GM=s32-c-mo')

pid.innerText ="";
pid.append(img);

// Calucladora escuchar eventos desde el html

const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const calculo = document.querySelector('#calculo');
const resultCal = document.querySelector('#resultCal');

btnCalcularOnClick = () =>{
    let result = Number(calculo1.value) + Number(calculo2.value)
    resultCal.innerHTML = "Resultado: " + result
}

//addEventListener
const btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click',btnCalcularOnClick);


// form prevenir evento 
const calculo1Form = document.querySelector('#calculo1form');
const calculo2Form  = document.querySelector('#calculo2form');
const resultCalForm  = document.querySelector('#resultCalForm');
const form  = document.querySelector('#form');


sumarInputvalues = (event) =>{
    event.preventDefault();
    let result = Number(calculo1Form.value) + Number(calculo2Form.value)
    resultCalForm.innerHTML = "Resultado: " + result
}


form.addEventListener('submit',sumarInputvalues);

