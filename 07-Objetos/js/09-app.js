/*
Seal - Nos permite sellar un objeto eitando agregar
nuevas propiedades pero si nos permite editar las
existentes
*/
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
}

Object.seal(producto);

producto.disponible = false;
//producto.image = 'imagen.jpg

//seal no permite eliminar, solo modificar los objetos
delete producto.precio;

console.log(producto.disponible);
console.log(Object.isSealed(producto));
