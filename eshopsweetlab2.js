// Definición de productos
const tartas = [
    { id: 1, nombre: "Tarta de chocolate", precio: 45, alergenos: "gluten, frutos secos" },
    { id: 2, nombre: "Tarta de vainilla", precio: 25, alergenos: "gluten, lacteos" },
    { id: 3, nombre: "Tarta de fresa", precio: 35, alergenos: "gluten" },
    { id: 4, nombre: "Tartaleta hojaldre", precio: 20, alergenos: "huevo" },
    { id: 5, nombre: "Lemon pie", precio: 20, alergenos: "huevo" },
    { id: 6, nombre: "Tarta de gianduja", precio: 40, alergenos: "frutos secos, lacteos" },
    { id: 7, nombre: "Brioche", precio: 15, alergenos: "gluten" },
    { id: 8, nombre: "Bizcocho genovés", precio: 10, alergenos: "gluten, huevo" },
    { id: 9, nombre: "Brazo de nata", precio: 18, alergenos: "huevo, lacteos" },
    { id: 10, nombre: "Profiterol nata", precio: 12, alergenos: "huevo, lacteos" }
];

let carrito = [];

// Añadir una tarta al Carrito
function agregarAlCarrito(idTarta) {
    const tartaSeleccionada = tartas.find((tarta) => tarta.id === idTarta);

    if (tartaSeleccionada) {
        carrito.push(tartaSeleccionada);
        alert("La tarta que se agregó al carrito es: " + tartaSeleccionada.nombre);
    } else {
        alert("La tarta no se encuentra.");
    }
}

// Eliminar un tarta del Carrito
function eliminarDelCarrito(idTarta) {
    const tartaEliminada = carrito.find((tarta) => tarta.id === idTarta);
    if (tartaEliminada) {
        carrito = carrito.filter((tarta) => tarta.id !== idTarta);
        alert("La tarta que se eliminó es: " + tartaEliminada.nombre);
    } else {
        alert("No se encontró la tarta mencionada.");
    }
}

// Total del carrito
function totalCarrito() {
    let total = 0;

    for (const tarta of carrito) {
        total += tarta.precio;
    }

    return total;
}

// El usuario selecciona las tartas para agregar al carrito
let agregarTarta = true;
while (agregarTarta) {
    let tartasDisponibles = "";
    for (const tarta of tartas) {
        tartasDisponibles += `${tarta.id} - ${tarta.nombre} ${tarta.precio}€\n`;
    }

    const idTarta = parseInt(prompt("Ingrese el número de la tarta que desee agregar al carrito (0 para ir al carrito)\n" + tartasDisponibles));

    if (idTarta === 0) {
        agregarTarta = false;
        alert("Cargar su carrito");
    } else {
        agregarAlCarrito(idTarta);
    }
}

// El usuario selecciona los tartas para eliminar del carrito
let eliminarTarta = true;
while (eliminarTarta && carrito.length > 0) {
    let tartasAniadidos = "";
    for (const tarta of carrito) {
        tartasAniadidos += `${tarta.id} - ${tarta.nombre} ${tarta.precio}€\n`;
    }

    const idTarta = parseInt(prompt("Ingrese el número de la tarta que desee eliminar del carrito (0 para confirmar carrito)\n" + tartasAniadidos));

    if (idTarta === 0) {
        eliminarTarta = false;
    } else {
        eliminarDelCarrito(idTarta);
    }
}

//FINAAL
const totaldelCarrito = totalCarrito();
alert("El total del carrito es de: " + totaldelCarrito+ " €");
