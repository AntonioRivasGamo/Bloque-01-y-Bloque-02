const entrada = " TORNEO: FIDE Madrid Masters 2026 | PUNTOS: 4.5/6 | ELO_MEDIO: 2150.80 ";
procesarResumenTorneo(entrada)

function procesarResumenTorneo(entrada) {
    const PARTES = entrada.split("|");
    const NOMBRE_TORNEO = PARTES[0].replace("TORNEO: ","").trim().toUpperCase();
    const PUNTOS = PARTES[1].replace("PUNTOS: ","").trim().split("/");
    const PUNTOS_GANADOS = parseFloat(PUNTOS[0]);
    const TOTAL_PARTIDAS = parseFloat(PUNTOS[1]);
    let eloMedio = parseFloat(PARTES[2].replace("ELO_MEDIO: ","").trim());
    if(isNaN(eloMedio) && !isFinite(eloMedio)) eloMedio = 0;

    let p = calcularTasaDeVictoria(PUNTOS_GANADOS,TOTAL_PARTIDAS)
    let dp = calcularAjusteRating(p);
    let pf = calcularPerformanceFinal(dp,eloMedio);

    console.log(`TORNEO: ${NOMBRE_TORNEO} | Rendimiento: ${(p * 100).toFixed(1)}% | Performance Rating: ${pf} ELO`)
}

function calcularTasaDeVictoria(puntosGanados, totalPartidas) {
    return puntosGanados / totalPartidas;
}

function calcularAjusteRating(p) {
    return Math.round(400 * Math.log10(p / (1 - p)));
}

function calcularPerformanceFinal(dp, eloMedio) {
    return Math.round(eloMedio + dp);
}