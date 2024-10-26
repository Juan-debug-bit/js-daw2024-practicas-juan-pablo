let paises = ["España", "Francia", "Alemania", "Italia"];

// Recorrer el array e imprimir cada país
console.log("Países iniciales:");
paises.forEach(pais => console.log(pais));

// Eliminar el primer país y volver a recorrer
paises.shift();
console.log("\nPaíses después de eliminar el primero:");
paises.forEach(pais => console.log(pais));