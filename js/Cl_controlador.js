export default class Cl_controlador{
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
      }
      procesarVenta() {
        this.modelo.procesarVenta(this.vista.procesarVenta());
        this.vista.reportarVenta(
          this.modelo.montoFinalCaja(),
          this.modelo.clienteMayorPago(),
          this.modelo.clientesMenosArticulo()
        );
      }
      iniciarTienda(montoCaja, porIncremento) {
        this.modelo.montoCaja = montoCaja;
        this.modelo.porIncremento = porIncremento;
      }
}