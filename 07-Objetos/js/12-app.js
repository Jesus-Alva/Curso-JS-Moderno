//Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 1200,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}


//Object constructor - forma de funciones
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this,disponible = true;
}

const producto2 = new Producto('Moniotor de 24 pulgadas', 1500);
console.log(producto2);
