//Problemas con los objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
}


/*Los objetos aunque esten declarados como const
sus propiedades si pueden ser modificadas*/
producto.disponible = true;

delete producto.precio;

console.log(producto);