// Constantes
const MAX_PERSONAS_RESERVA = 5;
const DIAS_SEMANA = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

// Variables
let reservas = [];

// Función para realizar una reserva
function reservar() {
  let nombre = prompt("Ingrese su nombre:");
  let numPersonas;
  
  do {
    numPersonas = parseInt(prompt("¿Cuántas personas son para la reserva?"));
    if (numPersonas > MAX_PERSONAS_RESERVA) {
      alert("Lo sentimos, la reserva no puede ser para más de " + MAX_PERSONAS_RESERVA + " personas.");
    }
  } while (numPersonas > MAX_PERSONAS_RESERVA);

  let dia = prompt("Ingrese el día de la reserva:");
  let hora = parseInt(prompt("Ingrese la hora de la reserva:"));
  
  // Guardar reserva
  reservas.push({ nombre, numPersonas, dia, hora });
  
  alert(`¡Reserva realizada con éxito!\nNombre: ${nombre}\nPersonas: ${numPersonas}\nDía: ${dia}\nHora: ${hora}`);
}

// Función para ver el menú del día
function verMenu() {
  let diaMenu;
  
  do {
    diaMenu = prompt("Ingrese el día de la semana para ver el menú:");
    diaMenu = diaMenu.toLowerCase(); // Convertir a minúsculas para comparar
    
    if (!DIAS_SEMANA.includes(diaMenu)) {
      alert("Por favor, ingrese un día de la semana válido.");
    }
  } while (!DIAS_SEMANA.includes(diaMenu));
  
  // Mostrar menú correspondiente al día seleccionado
  let menu;
  let precioTotal = 0;
  
  switch (diaMenu) {
    case "lunes":
      menu = [
        { plato: "Sopa de verduras", precio: 3500 },
        { plato: "Pollo al horno con puré de papas", precio: 10000 },
        { plato: "Flan casero", precio: 1700 }
      ];
      break;
    case "martes":
      menu = [
        { plato: "Ensalada mixta", precio: 2700 },
        { plato: "Pastel de carne con ensalada", precio: 6200 },
        { plato: "Frutas frescas", precio: 600 }
      ];
      break;
    case "miércoles":
      menu = [
        { plato: "Empanadas de carne", precio: 800 },
        { plato: "Pescado a la parrilla con arroz", precio: 7480 },
        { plato: "Helado de vainilla", precio: 500 }
      ];
      break;
    case "jueves":
      menu = [
        { plato: "Bruschettas de tomate", precio: 1600 },
        { plato: "Lasaña de vegetales", precio: 8130 },
        { plato: "Tiramisú", precio: 2100 }
      ];
      break;
    case "viernes":
      menu = [
        { plato: "Croquetas de jamón", precio: 890 },
        { plato: "Paella mixta", precio: 9250 },
        { plato: "Crema catalana", precio: 1600 }
      ];
      break;
    case "sábado":
      menu = [
        { plato: "Carpaccio de res", precio: 950 },
        { plato: "Parrillada argentina", precio: 10500 },
        { plato: "Cheesecake de frutos rojos", precio: 1800 }
      ];
      break;
    case "domingo":
      menu = [
        { plato: "Ceviche de camarones", precio: 1900 },
        { plato: "Asado criollo con papas", precio: 9200 },
        { plato: "Mousse de chocolate", precio: 790 }
      ];
      break;
  }
  
  // Mostrar menú y calcular precio total
  let menuString = `Menú del ${diaMenu}:\n`;
  menu.forEach(item => {
    menuString += `- ${item.plato}: $${item.precio}\n`;
    precioTotal += item.precio;
  });
  
  menuString += `\nPrecio total: $${precioTotal}`;
  
  alert(menuString);
}

// Función para salir
function salir() {
  alert("¡Gracias por visitar NENINA! ¡Esperamos verte pronto!");
}

// Función principal para iniciar el programa
function iniciar() {
  alert("¡Bienvenido a NENINA!");
  
  let opcion;
  
  do {
    opcion = prompt("¿Qué desea hacer?\n1. Reservar\n2. Ver el menú del día\n3. Salir");
    
    switch (opcion) {
      case "1":
        reservar();
        break;
      case "2":
        verMenu();
        break;
      case "3":
        salir();
        break;
      default:
        alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
  } while (opcion !== "3");
}

// Iniciar el programa
iniciar();
