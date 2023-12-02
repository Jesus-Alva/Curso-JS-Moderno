

const producto = "Monitor de 24 pulgadas";

console.log(producto);
console.log(producto.replace('pulgadas','"'));

//SLICE corta texto de las posiciones ingresadas
//El primer valor no puede ser mayor al segundo
console.log(producto.slice(0, 10));

//SUBSTRING corta texto de las posiciones ingresadas
//Es mas intuitivo, el primer valor puede ser mayor al segundo
console.log(producto.substring(2,1));