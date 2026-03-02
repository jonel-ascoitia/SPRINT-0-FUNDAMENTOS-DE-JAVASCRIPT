let cliente1 = {
    nombre: "Carlos",
    dinero: 50,
    hambre: 80
};

// Estudiante B: Crea objeto cliente 2
let cliente2 = {
    nombre: "Ana",
    dinero: 100,
    hambre: 50
};

// Funciones del Restaurante
function mostrarEstado(cliente) {
    console.log("--- Estado de " + cliente.nombre + " ---");
    console.log("Dinero: $" + cliente.dinero);
    console.log("Hambre: " + cliente.hambre + "/100");
}

function ordenarComida(cliente, costo, saciedad) {
    console.log(cliente.nombre + " ordenó comida por $" + costo + ".");
    cliente.hambre = cliente.hambre - saciedad;
}

function pagar(cliente, costo) {
    cliente.dinero = cliente.dinero - costo;
    console.log(cliente.nombre + " ha pagado $" + costo + ". Le quedan $" + cliente.dinero + ".");
}

// Simulación
console.log("🍔 SIMULADOR DE RESTAURANTE 🍔\n");

mostrarEstado(cliente1);
ordenarComida(cliente1, 15, 40);
pagar(cliente1, 15);
mostrarEstado(cliente1);

console.log("\n----------------------------\n");

mostrarEstado(cliente2);
ordenarComida(cliente2, 25, 50);
pagar(cliente2, 25);
mostrarEstado(cliente2);