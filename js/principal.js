/** Se desea llevar un control de las ventas que realiza una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el monto inicial en caja y el porcentaje de incremento para el costo de cada venta.
Estructuras de datos recomendadas
Cl_tienda: montoCaja, porcIncremento
 Cl_venta: cliente, factura, costo, cnArticulos
Primeros requerimientos
 Monto final en caja
 Cliente que pagó el monto mayor
 Cantidad de clientes que sólo llevaron 1 artículo

Datos de inicialización para Cl_tienda
montoCaja: 200,
porcIncremento: 25.00
Ventas de prueba
cliente: 'Luis', factura: 1111, costo: 100, cnArticulos: 3
cliente: 'Carla', factura: 2222, costo: 50, cnArticulos: 1
cliente: Mery', factura: 3333, costo: 200, cnArticulos: 10*/

import Cl_venta from "./Cl_venta.js";
import Cl_tienda from "./Cl_tienda.js";

let cliente1 = new Cl_venta("Luis", 111, 100, 3);
let cliente2 = new Cl_venta("Carla", 222, 50, 1);
let cliente3 = new Cl_venta("Mery", 333, 200, 10);

let tienda = new Cl_tienda();

tienda.procesarVenta(cliente1);
tienda.procesarVenta(cliente2);
tienda.procesarVenta(cliente3);

let salida = document.getElementById("salida");
 salida.innerHTML = `
 <br> Cliente que pago el mayor monto: ${tienda.mayorMontoPagado()}
 <br> Cantidad de clientes que llevaron un solo articulo: ${tienda.clientesUnArticulo()}
 <br> Monto final de la caja: ${tienda.totalcaja()}
 `;