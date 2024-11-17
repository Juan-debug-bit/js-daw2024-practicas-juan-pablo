// Añadir método al prototipo de Array
Array.prototype.calcularMedia = function () {
    if (this.length === 0) return 0;
    const suma = this.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / this.length;
};

// Validación del método
const numeros = [10, 20, 30, 40];
console.log('Array:', numeros);
console.log('Media del Array:', numeros.calcularMedia());

const vacio = [];
console.log('Array vacío:', vacio);
console.log('Media del Array vacío:', vacio.calcularMedia());
