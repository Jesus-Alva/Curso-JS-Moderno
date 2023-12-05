//Destructuring a objetos dentro de objetos
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

const {nombre, informacion: {fabricacion: {pais}}} = producto 

console.log(nombre)
console.log(pais)