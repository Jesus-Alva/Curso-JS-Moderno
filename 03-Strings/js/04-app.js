//ELIMINAR ESPACIOS AL INICIO Y AL FINAL DEL TEXTO

const producto = "              Monitor de 24 pulgadas"                 ;

console.log(producto)
console.log(producto.length)

//Eliminar al inicio
console.log( producto.trimStart() );
//Eliminar al final
console.log( producto.trimEnd() );
//Eliminar al inicio y al final
console.log( producto.trimStart().trimEnd() );