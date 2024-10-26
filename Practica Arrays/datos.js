let data = [
    { name: "Nacho", telephone: "966112233", age: 40 },
    { name: "Ana", telephone: "911223344", age: 35 },
    { name: "Mario", telephone: "611998877", age: 15 },
    { name: "Laura", telephone: "633663366", age: 17 }
];

// a) Añadir dos elementos al final
data.push(
    { name: "Pedro", telephone: "611944444", age: 25 },
    { name: "Julia", telephone: "633232323", age: 37 }
);

// b) Comprobar con console.log que se han añadido
console.log("Array después de añadir elementos:", data);

// c) Ordenar por edad y mostrar
data.sort((a, b) => a.age - b.age);
console.log("\nArray ordenado por edad:", data);

// d) Ordenar por nombre y mostrar
data.sort((a, b) => a.name.localeCompare(b.name));
console.log("\nArray ordenado por nombre:", data);

// e) Crear y mostrar nuevo array con mayores de 30 años
let mayoresDe30 = data.filter(person => person.age > 30);
console.log("\nMayores de 30 años:", mayoresDe30);
