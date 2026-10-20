const fenPrueba = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3";
analizarFENVilaAleatoria(fenPrueba)

function analizarFENVilaAleatoria(cadenaFEN){
    let disposicion = cadenaFEN.slice(0, cadenaFEN.indexOf(' '));
    let filas = disposicion.split("/");
    let numeroBlancas = contarBlancas(filas[7]);
    let columna = columnaAleatoria();
    let casilla = numeroLetra(columna) + "1";
    let probabilidadA1 = calcularProbabilidadColumna(filas[7], casilla);
    console.log(probabilidadA1);
}

function contarBlancas(fila) {
    let contarBlancas = 0;
    for (let i = 0; i < fila.length; i++) if(fila[i] >= 'A' && fila[i] <= 'Z') contarBlancas++;
    return contarBlancas;
}

function columnaAleatoria() {
    return Math.floor(Math.random() * 8);
}

function numeroLetra(numero) {
    return String.fromCharCode(97 + numero);
}

function calcularProbabilidadColumna(fila, casilla) {
    let probabilidad = (1 / 8) * 100;
    let probabilidadPorcentaje = probabilidad.toFixed(2) + "%";

    return {
        fila1: fila,
        casillaSeleccionada: casilla,
        probabilidad: probabilidadPorcentaje
    };
}