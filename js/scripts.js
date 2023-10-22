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



/*Agregar contenido HTML desde JS*/
//Agregamos un nuevo enlace
const nuevoEnlace = document.createElement('A') // Aca colocamos el nombre de la etiqueta pero en mayusculas. Ej: IMG, H1,H2,H3,H4,P

//agregar href
nuevoEnlace.href = 'https://www.instagram.com/maycocastellanos89/';

//agregar texto
nuevoEnlace.textContent = 'Instagram';

//agregar la clase
nuevoEnlace.classList.add('navbar__item'); //aca la clase se agrega sin punto al principio 

//agregarlo al documento
const navbar = document.querySelector('.navbar');
navbar.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



//Eventos
// Hay muchos eventos ocurriendo en tus sitios y aplicaciones web, cuando un usuario da click, cuando dan scroll, al presionar en un botón, enviar un formulario, pero uno de los más comunes es esperar a que el documento este listo...

console.log('1');
window.addEventListener('load', function() { // Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML y las imagenes...
    console.log('2');
});

window.onload = function() {
    console.log('3')
};

document.addEventListener('DOMContentLoaded', function() { // Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes... Este es el que se usa
    console.log('4');
});

console.log('5');

// Estos closures también pueden ser con una función aparte...


// // Eventos Scroll...
// window.onscroll = function(e) {
//     console.log('scrolling...');

//     console.log(this.scrollY);
// }





// Seleccionar elementos y asociarles un evento (esto es un ejemplo para agregar un evento a cualquier elemento solo al dar clic, imagenes, botones, textos, etc.)

/*const btnEnviar = document.querySelector('.boton-formulario');
  btnEnviar.addEventListener('click', function(evento){  //registramos el evento || Callback: si hace click habilita la funcion 
     console.log(evento); //da informacion como coordenadas, target
     evento.preventDefault(); //esto se usa en los formularios para que al dar submit no recargue la pagina 
     console.log('Enviando formulario...');
 }); */



//Eventos de los imputs y text area

const datos = { //aca guardaremos la informacion que escribe el usuario
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre'); //id del input del formulario html
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input', leerTexto) //registramos eventos
emailInput.addEventListener('input', leerTexto)
mensajeInput.addEventListener('input', leerTexto)


//evento del submit
formulario.addEventListener('submit', function(evento){  //registramos el evento || Callback: si hace click habilita la funcion 
    evento.preventDefault(); //esto se usa en los formularios para que al dar submit no recargue la pagina 
    
    //validar formulario
    const {nombre,email,mensaje} = datos; //destructuring usa extrae valores de un objeto y los declara en una misma accion

    if (nombre === '' || email==='' || mensaje===''){
        mostrarAlerta('Todos los campos son obligatorios*', true); //le paso el parametro del error 
        return; //corta la ejecucion del codigo 
    }else{
        mostrarAlerta('Mensaje enviado correctamente');
    }
    
});

//mensaje de error o correctamente enviado para verificar formulario

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('mensaje-error')
    }else{
        alerta.classList.add('mensaje-correcto')
    }
    formulario.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove();
    }, 5000); // 5 segundos despues desaparece
    
    console.log(alerta);
}

function leerTexto(evento){
    datos[evento.target.id] = evento.target.value; //value es lo que escribe el usuario ; target es cada input
    console.log(datos);
}


//Mensaje de error en campos vacios
//function mostrarError(mensaje){
    //const alerta = document.createElement('P'); // crea un elemento de parrafo HTML
    //alerta.textContent = mensaje;
    //alerta.classList.add('mensaje-error');
    //formulario.appendChild(alerta);

//     setTimeout(() => {
//         alerta.remove();
//     }, 5000); // 5 segundos despues desaparece
    
//     console.log(alerta);
// }

//mensaje enviado correctamente
//function mostrarMensaje(mensaje){
    //const mensajeCorrecto = document.createElement('P'); // crea un elemento de parrafo HTML
    //mensajeCorrecto.textContent = mensaje;
    //mensajeCorrecto.classList.add('mensaje-correcto');
    //formulario.appendChild(mensajeCorrecto);

//     setTimeout(() => {
//         mensajeCorrecto.remove();
//     }, 5000); // 5 segundos despues desaparece
    
//     console.log(mensajeCorrecto);
// }



//refactoring: hacer mas compacto tu codigo al finalizar de programar, asi como este ejemplo: Se fucionaron 2 funciones para que solo sea una

