function generarCombinacion() {
    let numeros = new Set();
    while (numeros.size < 6) {
        numeros.add(Math.floor(Math.random() * 49) + 1);
    }
    return Array.from(numeros).sort((a, b) => a - b);
}

console.log("50 combinaciones de la lotería primitiva:");
for (let i = 1; i <= 50; i++) {
    console.log(`Combinación ${i}:`, generarCombinacion());
}
