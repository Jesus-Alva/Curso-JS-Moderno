//FORMAS DE CONCATENAR UN TEXTO
const producto = "Monitor de 24 pulgadas";
const precio  = " 30 USD";

//Se puede concatenar usando el metodo CONCAT
console.log(producto.concat(precio));
//Igualmente se puede agregar
console.log(producto + ' Con un precio de: ' + precio);

//BACKTICK
console.log(`El producto ${producto} tiene un precio de $ ${precio}`)