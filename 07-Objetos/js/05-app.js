//Objetos dentro de objetos
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
    informacion: {
        caracteristicas: {
            peso: '5kg',
            medida: {
                alto: '20cm',
                ancho: '40cm'
            }
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

//Accedemos con notacion de punto
console.log(`El ${producto.nombre} tiene un precio de ${producto.precio}`)
console.log(``)