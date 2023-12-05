//Acceder a los Object Methods

"use strict";//Habilitamos el modo escricto

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
}

Object.freeze(producto);//Congelamos el objeto para que no pueda ser modificado

//producto.disponible = false; //Cannot assign to read only property 'disponible'
//producto.img = "imagen.jpg";

console.log(producto)

console.log(Object.isFrozen(producto));//Devuelve valor boleano



