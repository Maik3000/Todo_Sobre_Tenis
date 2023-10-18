// formas de seleccionar contenido html 

//- querySelector

const heading = document.querySelector('#heading') //retorna 0 o 1 elemento (es igual que el selector css) -> se puede por medio de clase o id
heading.textContent = "Contáctanos!"
console.log(heading);

//- querySelectorAll

const enlaces = document.querySelectorAll('.navbar a') //retorna todos los elementos que coincidan con esa clase
console.log(enlaces[0]); //si especificamos la posicion del nodelist nos devulve solo 1

/*algunos ejemplos de propiedades*/

// enlaces[0].textContent = 'Esto modifica el texto';
// enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navbar');
