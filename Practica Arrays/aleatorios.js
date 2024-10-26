let frecuencias = {};

// Inicializar el contador de cada número a 0
for (let i = 1; i <= 10; i++) {
    frecuencias[i] = 0;
}

// Generar 10,000 números aleatorios y contar la frecuencia
for (let i = 0; i < 10000; i++) {
    let numero = Math.floor(Math.random() * 10) + 1;
    frecuencias[numero]++;
}

// Mostrar las frecuencias
console.log("Frecuencias de números aleatorios del 1 al 10:");
for (let i = 1; i <= 10; i++) {
    console.log(`Número ${i}:`, frecuencias[i]);
}
