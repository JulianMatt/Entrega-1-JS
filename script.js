let nombreJugador;
let tieneLlave = false;
let intentos = 0;
let inventario = [];  // Array para guardar los objetos del jugador
let cordura = 5;  // Nivel de cordura inicial

function iniciarJuego() {
    nombreJugador = prompt("¡Hola! ¿Cómo te llamás?");
    alert("Bienvenido " + nombreJugador + ", espero disfrutes de esta experiencia.");
}

iniciarJuego();

function primerNivel() {
    alert("Abrís los ojos y sentís un frío raro en la nuca. Estás en una habitación oscura, sin saber cómo llegaste acá.");
}

primerNivel();

function habitacionPrincipal() {
    let eleccion;
    let llaveRecogida = false;  // Variable para verificar si la llave fue recogida

    while (true) {  // Bucle para permitir múltiples intentos
        if (cordura <= 0) {
            alert("¡Has perdido toda tu cordura! El juego ha terminado.");
            return;  // Termina el juego si la cordura es 0
        }

        eleccion = prompt("¿Qué debería hacer?\n\n 1) Mirar alrededor para ver qué podés encontrar.\n 2) Gritar pidiendo ayuda.\n 3) Intentar abrir la puerta");

        if (eleccion === "1") {
            if (!llaveRecogida) {
                alert("Explorás la habitación y encontrás una llave en el suelo. La agarras y la guardás en tu inventario.");
                inventario.push("llave");
                llaveRecogida = true;  // Marca que la llave fue recogida
            } else {
                alert("Parece no haber nada más, solo oscuridad.");
            }
        } else if (eleccion === "2") {
            alert("Gritás pidiendo ayuda, pero solo escuchás el eco de tu propia voz.\n\n La sensación de estar solo te pesa...");
            perderCordura();
        } else if (eleccion === "3") {
            if (inventario.includes("llave")) {
                alert("Usás la llave para abrir la puerta y avanzás a la siguiente habitación.");
                segundaHabitacion();
                break;  // Sale del bucle al avanzar
            } else {
                alert("Intentás abrir la puerta, pero está cerrada. Parece que necesitás una llave.");
            }
        } else {
            alert("¿Sos boludo? Tenés 3 opciones.");
            perderCordura();
        }
    }
}

function perderCordura() {
    cordura--;
    alert("Tu nivel de cordura ha bajado a " + cordura + ".");
    if (cordura <= 0) {
        alert("¡Has perdido toda tu cordura! El juego ha terminado.");
    }
}

function segundaHabitacion() {
    let eleccion;
    let eleccionPanel;
    let linternaEncontrada = false;  // Variable para verificar si la linterna fue recogida
    intentos = 0;

    while (intentos < 3) {
        if (cordura <= 0) {
            alert("¡Has perdido toda tu cordura! El juego ha terminado.");
            return;  // Termina el juego si la cordura es 0
        }

        eleccion = prompt("Pareciera que invitara a entrar.\n\n 1) No le das importancia, crees que podría ser una trampa.\n 2) Entrás con cautela.");

        if (eleccion === "1") {
            alert("Decidís ignorar la puerta, convencido de que podría ser una trampa. A medida que te alejas, una inquietante duda te invade:");
            alert("¿Realmente hay otra salida en este lugar horrible?");
            intentos++;
            perderCordura();
        } else if (eleccion === "2") {
            alert("Te acercás a la puerta y entrás con cautela...");
            alert("Dentro de la habitación encontrás una linterna. La agarras y la guardas en tu inventario.");
            inventario.push("linterna");
            linternaEncontrada = true;  // Marca que la linterna fue recogida
            break;  // Sale del bucle al avanzar
        } else {
            alert("¿Sos boludo?");
            intentos++;
            perderCordura();
        }
    }

    // Después de recoger la linterna, pasamos a la interacción con el panel
    if (linternaEncontrada) {
        while (true) {
            // Se presenta la opción de interactuar con el panel
            eleccionPanel = prompt("Alumbras con la linterna y ves un viejo panel oxidado, pero parece funcionar.\n\n 1) Interactúas con dicho panel \n 2) Decidís no interactuar");

            if (eleccionPanel === "1") {
                let accionPanel = prompt ("Pide un código de 3 dígitos\n¿Querés intentar?\n \n 1) Sí.")
                if (accionPanel === "1") {
function interactuarConPanel() {
    let codigoIngresado;
    
    while (true) {  // Bucle que continuará hasta que el código sea correcto
        codigoIngresado = prompt("Por encima del tablero hay una anotación: 'Cuando el reloj marque las tres y treinta y tres, el destino se abrirá de par en par.'\n\nIngresa el código:");

        if (codigoIngresado === "333") {
            alert("El código parece correcto, pero no hay nada que festejar. Se abre una pequeña compuerta, como si te estuvieran tomando el pelo...");
            alert("Adentro hay una nota arrugada, casi olvidada, y una caja. La nota dice: 'Felicidades, en la caja está la salida... o lo que queda de ella.'");
            alert("Al abrir la caja, encontrás un arma con solo una bala. Te mirás alrededor y te das cuenta de que no hay escapatoria, solo un silencio pesado y la certeza de que el final se acerca.");
            alert("Escuchás tu nombre resonar en el eco: " + nombreJugador + "... " + nombreJugador + "... " + nombreJugador + "...\n\nTu cordura se desmorona en un instante, y te preguntas si alguna vez fuiste realmente libre.\n\nEl juego llegó a su fin, pero... ¿realmente ganaste?");
            break;  // Sale del bucle si el código es correcto
        } else {
            perderCordura();  // Resta un punto de cordura si el código es incorrecto
            alert("Código incorrecto. Intenta nuevamente.");  // Mensaje opcional
        }
    }
}

// Llama a esta función donde sea necesario para interactuar con el panel
interactuarConPanel();
                }
                // Aquí podrías agregar más lógica relacionada con el panel
                break;  // Sale del bucle una vez que interactúa
            } else if (eleccionPanel === "2") {
                alert("Decidís no interactuar con el panel.");
                alert("Aunque, no hay mucho más por hacer, ¿o sí?");
                perderCordura();  // Se pierde cordura por no interactuar

                // Después de perder cordura, el bucle continuará permitiendo al jugador volver a elegir
            } else {
                alert("El código parece no ser correcto...");
            }
        }
    }
}

habitacionPrincipal();
