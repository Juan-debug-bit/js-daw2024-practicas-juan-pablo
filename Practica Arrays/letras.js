let letras = [];

// Insertar letras al principio y al final
letras.unshift("A", "B", "C");
letras.push("D", "E");

// Eliminar el primer y último elemento e imprimir el array final
letras.shift();
letras.pop();
console.log("Array final de letras:", letras);
