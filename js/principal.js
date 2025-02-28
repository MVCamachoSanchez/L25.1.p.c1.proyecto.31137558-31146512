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


import Cl_controlador from "./Cl_controlador.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";

export default class Cl_principal{
    constructor() {
        let vista = new Cl_vTienda();
        let modelo = new Cl_mTienda();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
      }
}