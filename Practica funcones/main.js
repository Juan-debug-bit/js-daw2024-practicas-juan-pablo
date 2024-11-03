// Función para recoger palabras
const obtenerPalabras = () => {
    const palabras = [];
    let palabra;

    do {
        palabra = prompt("Introduce una palabra (deja vacío para terminar):");
        if (palabra) palabras.push(palabra.trim().toLowerCase());
    } while (palabra);

    return palabras;
};

// Práctica 1: Eliminar duplicados y ordenar en orden inverso
const practica1 = () => {
    const palabras = obtenerPalabras();
    const palabrasUnicas = [...new Set(palabras)]; // Eliminar duplicados
    palabrasUnicas.sort((a, b) => b.localeCompare(a, 'es')); // Orden inverso en español
    document.getElementById("resultado").textContent = `Resultado: ${palabrasUnicas.join(", ")}`;
};

// Práctica 2: Crear un mapa de conteo
const practica2 = () => {
    const palabras = obtenerPalabras();
    const conteoPalabras = palabras.reduce((mapa, palabra) => {
        mapa[palabra] = (mapa[palabra] || 0) + 1;
        return mapa;
    }, {});
    document.getElementById("resultado").textContent = `Conteo de palabras: ${JSON.stringify(conteoPalabras)}`;
};
