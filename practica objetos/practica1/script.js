// Función constructora de Puntos
function Punto(x, y) {
    this.x = typeof x === 'number' ? x : 0;
    this.y = typeof y === 'number' ? y : 0;

    this.cambiar = function (nuevoX, nuevoY) {
        this.x = typeof nuevoX === 'number' ? nuevoX : this.x;
        this.y = typeof nuevoY === 'number' ? nuevoY : this.y;
    };

    this.copia = function () {
        return new Punto(this.x, this.y);
    };

    this.suma = function (otroPunto) {
        return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
    };
}

// Validación de los métodos
const punto1 = new Punto(3, 4);
console.log('Punto 1:', punto1);

punto1.cambiar(10, 15);
console.log('Punto 1 tras cambiar coordenadas:', punto1);

const copiaPunto = punto1.copia();
console.log('Copia de Punto 1:', copiaPunto);

const punto2 = new Punto(5, 7);
const sumaPuntos = punto1.suma(punto2);
console.log('Suma de Punto 1 y Punto 2:', sumaPuntos);
