// batalla.js

// Variables iniciales de los peleadores
let nombreHeroe = "Batman";
let enemigo = "Duende Verde";

let energiaHeroe = 100;
let energiaEnemigo = 100;

console.log("¡COMIENZA LA BATALLA ÉPICA!");
console.log(nombreHeroe + " vs " + enemigo);
console.log("--------------------------------");

// Funciones Básicas (A completar o modificar)

function ataque() {
    energiaEnemigo = energiaEnemigo - 10;
    console.log(nombreHeroe + " ataca con un golpe estándar!");
    console.log("La energía de " + enemigo + " baja a " + energiaEnemigo + ".");
}

function defender() {
    console.log(nombreHeroe + " se cubre, reduciendo el daño del próximo ataque.");
}

function recargarEnergia() {
    energiaHeroe = energiaHeroe + 15;
    console.log(nombreHeroe + " toma un respiro y recupera energía. Energía actual: " + energiaHeroe);
}

// Zona de simulación:
ataque();
recargarEnergia();

// ============================================
// ESPACIO PARA EL EJERCICIO DE PAIR PROGRAMMING
// ============================================

// Estudiante A: Crear la función superAtaque() aquí abajo


// Estudiante B: Crear la función escudoMagico() aquí abajo
