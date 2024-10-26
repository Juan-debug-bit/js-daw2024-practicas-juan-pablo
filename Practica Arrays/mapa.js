let edades = new Map();

// Agregar nombres y edades
edades.set("Carlos", 28);
edades.set("Ana", 34);
edades.set("Luis", 40);
edades.set("Maria", 22);

// Actualizar la edad de uno de los nombres
edades.set("Ana", 35);

// Imprimir los nombres con sus edades
console.log("Nombres y edades:");
edades.forEach((edad, nombre) => console.log(nombre + ":", edad));
