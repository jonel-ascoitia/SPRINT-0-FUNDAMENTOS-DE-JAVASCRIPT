let jugador1 = {
    nombre: "Guerrero Dragón",
    vida: 100,
    fuerza: 25,
    nivel: 1
};

// Estudiante B: Crea objeto jugador 2
let jugador2 = {
    nombre: "Ninja Sombra",
    vida: 80,
    fuerza: 40,
    nivel: 1
};

// Funciones del RPG
function atacar(atacante, defensor) {
    console.log("⚔️ ¡" + atacante.nombre + " ataca a " + defensor.nombre + " con " + atacante.fuerza + " de fuerza!");
    defensor.vida = defensor.vida - atacante.fuerza;
    console.log("A " + defensor.nombre + " le queda " + defensor.vida + " de vida.\n");
}

function curar(jugador) {
    console.log("🧪 " + jugador.nombre + " bebe una poción de curación.");
    jugador.vida = jugador.vida + 20;
    console.log("Su vida sube a " + jugador.vida + ".\n");
}

function subirNivel(jugador) {
    jugador.nivel = jugador.nivel + 1;
    jugador.fuerza = jugador.fuerza + 10;
    jugador.vida = jugador.vida + 20;
    console.log("🌟 ¡" + jugador.nombre + " ha subido al Nivel " + jugador.nivel + "!");
    console.log("Atributos mejorados: Vida (" + jugador.vida + "), Fuerza (" + jugador.fuerza + ")\n");
}

// Simulación de la batalla
console.log("🛡️ MODO RPG: INICIO DE COMBATE 🛡️\n");

atacar(jugador1, jugador2);
curar(jugador2);
subirNivel(jugador1);
atacar(jugador2, jugador1);
