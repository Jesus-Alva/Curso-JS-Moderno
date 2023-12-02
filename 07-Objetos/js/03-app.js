//Agregar propiedades al objeto
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
}

//Agregar nuevas propiedades al objeto
producto.img = 'imagen.jpg'
console.log(producto)

//Eliminar propiedades del objeto
delete producto.disponible
console.log(producto)