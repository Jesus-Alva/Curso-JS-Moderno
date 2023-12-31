//Copiar dos objetos

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto)
console.log(medidas)

/*Para unificar dosobjetos podemo usar los siguientes metodos*/
//Metodo assign

const resultado = Object.assign(producto, medidas)

console.log(resultado)
//El metodo assign unifica los objetos, pero los cambios realizados en el resultado alteran al los objetos originales

//Metodo SPREAD OPERATOR o REST OPERATOR

const resultado2 = {...producto, ...medidas}
console.log(resultado2)
//El metodo SPREAD o REST OPERATOR realiza una compia no mutable de los objetos
