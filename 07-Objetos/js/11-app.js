//Uso de la palabra reservada THIS

//this hace referencia al objeto en el que se instancia
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();