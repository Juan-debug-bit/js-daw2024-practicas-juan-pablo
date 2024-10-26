let numeros = [12, 45, 78, 34, 89, 23];

// Desestructuración
let [num1, num2, ...resto] = numeros;
console.log("Primer número:", num1);
console.log("Segundo número:", num2);
console.log("Resto de números:", resto);
