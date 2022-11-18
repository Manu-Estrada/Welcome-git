/* Conectar el archivo javascript al html de destino
* a partir de el precio de un producto y el iva correpondiente, imprimir el precio en nuestra ventana
* definir el contenedor o espacio que va a ocupar el texto
* acceder al contenedor desde javascript 
* asignar los valores de precio y porcentaje de iva
* calcular el importe del iva a partir del precio y de la tasa del iva
* calcular el precio total, sumando el importe del iva al precio del producto
* componer el precio a mostrar 
* insertar el contenedor 
* imprimirlo en pantalla */


const basePrice = 125;
const vatPorcentage = 21;


function vatCalculator(price, vat){
    const vatImport = price  * vat / 100;
    return vatImport;
}

function calculatePrice() {
    const totalPrice = basePrice + vatCalculator(basePrice, vatPorcentage);
    return totalPrice;
}

 function showPrice() {
    const finalPrice = calculatePrice();
    const messageTxt = document.getElementById("contenedor");
    messageTxt.innerHTML = `productPrice: ${basePrice}, vatPorcentage: ${vatPorcentage}%, <strong> totalPrice: ${finalPrice}</strong>`
    calculatePrice();
}
showPrice();


/*
const precioBase = 100;
const porcentajeIva = 21;

function calcularIva(precio, iva) {
    const importeIva = precio * iva / 100;
    return importeIva;
}

function calcularPrecio() {
    const precioTotal = precioBase + calcularIva(precioBase, porcentajeIva);
    return precioTotal;
}

function mostrarPrecio(){
    const precioFinal = calcularPrecio();
    const mensajeTxt= document.getElementById("contenedor");
    mensajeTxt.innerHTML = `Precio del producto: ${precioBase}, porcentaje de IVA: ${porcentajeIva}%, <strong>precio total: ${precioFinal}</strong>`
    
    calculaPrecio();
}

mostrarPrecio();*/