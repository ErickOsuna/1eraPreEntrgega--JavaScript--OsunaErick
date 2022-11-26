const MARCA = "CASA DE CAMBIO SIGLO XXI"
const BIENVENIDA = ("Bienvenido a la " + MARCA);

console.log(MARCA);
alert(MARCA);

let nombre = prompt("Ingrese su nombre").toUpperCase();
let apellido = prompt("Ingrese su apellido").toUpperCase();
let correo = prompt("Ingrese su dirección de Correo Electrónico").toUpperCase();

let dolarCompra = 170;
let euroCompra = 180;
let realCompra = 40;

let dolarVenta = 180;
let euroVenta = 190;
let realVenta = 50;

const IMPUESTO_PAIS = 0.30;
const IMPUESTO_GANANCIA = 0.45;

let inicio = 0;

function elegirOperacion() {

    let operacion = parseInt(prompt("¿Qué deseas hacer? (Ingresa el número de la opción que deseas realizar):" + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Vender" + "\n" + "4.- Salir" + "\n"));

    switch (operacion) {
        case 1:

            console.log("Quieres Consultar el Precio de una divisa!");
            alert("Quieres Consultar el Precio de una divisa!");
            consultaGeneral();
            volver();

            break;
        case 2:

            consultaCompra();
            compra();
            volver();

            break;
        case 3:

            consultaVenta();
            venta();
            volver();

            break;
        case 4:

            volver();

            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            elegirOperacion();
            break;
    }
}

function consultaGeneral() {
    console.log("El precio de las Divisas para la Compra es: " + "\n" + ("Dólar = " + dolarCompra.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroCompra.toString() + " AR $ por euro.") + "\n" + ("Real = " + realCompra.toString() + " AR $ por real.") + "\n\n" + "El precio de las Divisas para la Venta es: " + "\n" + ("Dólar = " + dolarVenta.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroVenta.toString() + " AR $ por euro.") + "\n" + ("Real = " + realVenta.toString() + " AR $ por real.") + "\n");
    alert("El precio de las Divisas para la Compra es: " + "\n" + ("Dólar = " + dolarCompra.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroCompra.toString() + " AR $ por euro.") + "\n" + ("Real = " + realCompra.toString() + " AR $ por real.") + "\n\n" + "El precio de las Divisas para la Venta es: " + "\n" + ("Dólar = " + dolarVenta.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroVenta.toString() + " AR $ por euro.") + "\n" + ("Real = " + realVenta.toString() + " AR $ por real.") + "\n");
}

function consultaCompra() {
    console.log("El precio de las Divisas para la Compra es: " + "\n" + ("Dólar = " + dolarCompra.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroCompra.toString() + " AR $ por euro.") + "\n" + ("Real = " + realCompra.toString() + " AR $ por real.") + "\n");
    alert("El precio de las Divisas para la Compra es: " + "\n" + ("Dólar = " + dolarCompra.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroCompra.toString() + " AR $ por euro.") + "\n" + ("Real = " + realCompra.toString() + " AR $ por real.") + "\n");
}

function consultaVenta() {
    console.log("El precio de las Divisas para la Venta es: " + "\n" + ("Dólar = " + dolarVenta.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroVenta.toString() + " AR $ por euro.") + "\n" + ("Real = " + realVenta.toString() + " AR $ por real.") + "\n");
    alert("El precio de las Divisas para la Venta es: " + "\n" + ("Dólar = " + dolarVenta.toString() + " AR $ por dólar.") + "\n" + ("Euro = " + euroVenta.toString() + " AR $ por euro.") + "\n" + ("Real = " + realVenta.toString() + " AR $ por real.") + "\n");
}

function compra() {

    let cantidadDivisaCompra = 0;

    let seleccionDivisaCompra = parseInt(prompt("¿Qué tipo de Divisa deseas comprar? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- Dólar" + "\n" + "2.- Euro" + "\n" + "3.- Real" + "\n" + "4.- Volver al Inicio" + "\n"));

    switch (seleccionDivisaCompra) {
        case 1:

            cantidadDivisaCompra = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas comprar (Puedes usar decimales):"));
            console.log("Quieres Comprar " + cantidadDivisaCompra + " " + "Dólares");
            alert("Quieres Comprar " + cantidadDivisaCompra + " " + "Dólares");

            let subTotalDolarCompra = cantidadDivisaCompra * dolarCompra;
            console.log("El detalle de la operación es: \n" + "AR $ " + subTotalDolarCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
            alert("El detalle de la operación es: \n" + "AR $ " + subTotalDolarCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");

            let subTotalPaisDolarCompra = subTotalDolarCompra * IMPUESTO_PAIS;
            let subTotalGananciaDolarCompra = subTotalDolarCompra * IMPUESTO_GANANCIA;
            let totalDolarCompra = subTotalDolarCompra + subTotalPaisDolarCompra + subTotalGananciaDolarCompra;

            console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalDolarCompra.toString());
            alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalDolarCompra.toString());

            console.log("Gracias por preferir a " + MARCA);
            alert("Gracias por preferir a " + MARCA);


            break;
        case 2:
            cantidadDivisaCompra = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));
            console.log("Quieres Comprar " + cantidadDivisaCompra + " " + "Euros");
            alert("Quieres Comprar " + cantidadDivisaCompra + " " + "Euros");

            let subTotalEuroCompra = cantidadDivisaCompra * euroCompra;
            console.log("El detalle de la operación es: \n" + subTotalEuroCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
            alert("El detalle de la operación es: \n" + subTotalEuroCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");

            let subTotalPaisEuroCompra = subTotalEuroCompra * IMPUESTO_PAIS;
            let subTotalGananciaEuroCompra = subTotalEuroCompra * IMPUESTO_GANANCIA;
            let totalEuroCompra = subTotalEuroCompra + subTotalPaisEuroCompra + subTotalGananciaEuroCompra;

            console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalEuroCompra.toString());
            alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalEuroCompra.toString());

            console.log("Gracias por preferir a " + MARCA);
            alert("Gracias por preferir a " + MARCA);

            break;
        case 3:
            cantidadDivisaCompra = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));
            console.log("Quieres Comprar " + cantidadDivisaCompra + " " + "Reales");
            alert("Quieres Comprar " + cantidadDivisaCompra + " " + "Reales");

            let subTotalRealCompra = cantidadDivisaCompra * realCompra;
            console.log("El detalle de la operación es: \n" + subTotalRealCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");
            alert("El detalle de la operación es: \n" + subTotalRealCompra.toString() + " + 30% de Impuesto País + 45% de Impuesto la Ganancia");

            let subTotalPaisRealCompra = subTotalRealCompra * IMPUESTO_PAIS;
            let subTotalGananciaRealCompra = subTotalRealCompra * IMPUESTO_GANANCIA;
            let totalRealCompra = subTotalRealCompra + subTotalPaisRealCompra + subTotalGananciaRealCompra;

            console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalRealCompra.toString());
            alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEl total de la operación es de AR $" + totalRealCompra.toString());

            console.log("Gracias por preferir a " + MARCA);
            alert("Gracias por preferir a " + MARCA);

            break;
        case 4:

            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            compra();
            break;
    }
}

function venta() {

    let cantidadDivisaVenta = 0;

    let seleccionDivisaVenta = parseInt(prompt("¿Qué tipo de Divisa deseas vender? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- Dólar" + "\n" + "2.- Euro" + "\n" + "3.- Real" + "\n" + "4.- Volver al Inicio" + "\n"));

    switch (seleccionDivisaVenta) {
        case 1:
            cantidadDivisaVenta = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));
            console.log("Quieres Vender " + cantidadDivisaVenta + " " + "Dólares");
            alert("Quieres Vender " + cantidadDivisaVenta + " " + "Dólares");

            let subTotalDolarVenta = cantidadDivisaVenta * dolarVenta;
            console.log("El detalle de la operación es: \n" + "AR $ " + subTotalDolarVenta.toString());
            alert("El detalle de la operación es: \n" + "AR $ " + subTotalDolarVenta.toString());


            console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalDolarVenta.toString());
            alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalDolarVenta.toString());

            console.log("Gracias por preferir a " + MARCA);
            alert("Gracias por preferir a " + MARCA);


            break;
        case 2:
            cantidadDivisaVenta = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));
            console.log("Quieres Vender " + cantidadDivisaVenta + " " + "Euros");
            alert("Quieres Vender " + cantidadDivisaVenta + " " + "Euros");

            let subTotalEuroVenta = cantidadDivisaVenta * euroVenta;
            console.log("El detalle de la operación es: \n" + "AR $ " + subTotalEuroVenta.toString());
            alert("El detalle de la operación es: \n" + "AR $ " + subTotalEuroVenta.toString());


            console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalEuroVenta.toString());
            alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalEuroVenta.toString());

            console.log("Gracias por preferir a " + MARCA);
            alert("Gracias por preferir a " + MARCA);


            break;
        case 3:
            cantidadDivisaVenta = parseFloat(prompt("Ingrese la cantidad expresada en números de la Divisa que deseas vender (Puedes usar decimales):"));
            console.log("Quieres Vender " + cantidadDivisaVenta + " " + "Reales");
            alert("Quieres Vender " + cantidadDivisaVenta + " " + "Reales");

            let subTotalRealVenta = cantidadDivisaVenta * realVenta;
            console.log("El detalle de la operación es: \n" + "AR $ " + subTotalRealVenta.toString());
            alert("El detalle de la operación es: \n" + "AR $ " + subTotalRealVenta.toString());


            console.log("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalRealVenta.toString());
            alert("Datos de la Operación: \n" + nombre + " " + apellido + ", " + correo + ": \nEn total recibirás AR $" + subTotalRealVenta.toString());

            console.log("Gracias por preferir a " + MARCA);
            alert("Gracias por preferir a " + MARCA);


            break;
        case 4:

            break;

        default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            compra();
            break;
    }
}

function volver() {
    inicio = parseInt(prompt("Qué deseas hacer ahora? (Ingresa el número de la opción correspondiente): " + "\n\n" + (("1.- Volver al Inicio").toString()) + "\n" + (("2.- Salir\n".toString()))));
}

function salida() {
    console.log("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + ". Será para una próxima ocasión. Hasta Luego!");
}

if ((nombre !== "") && (apellido !== "") && (correo !== "")) {
    console.log(BIENVENIDA + ", " + nombre + " " + apellido);
    alert(BIENVENIDA + ", " + nombre + " " + apellido);

    console.log("En nuestra " + MARCA + ", " + "podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Vender");
    alert("En nuestra " + MARCA + ", " + "podrás realizar diferentes operaciones: " + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Vender");

    elegirOperacion();

    while (inicio !== 2) {
        elegirOperacion();
    }

    salida();
}
else {
    salida();
}