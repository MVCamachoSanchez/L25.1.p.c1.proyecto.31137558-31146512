export default class Cl_vVenta{
    constructor() {
        this.inCliente = document.getElementById("ventaForm_inCliente");
        this.inFactura = document.getElementById("ventaForm_inFactura");
        this.inCosto = document.getElementById("ventaForm_inCosto");
        this.inCantArticulos = document.getElementById("ventaForm_inCantArticulos");
        this.btProcesar = document.getElementById("ventaForm_btProcesar");
      }

      get cliente() {
        return this.inCliente.value;
      }

      get factura() {
        return +this.inFactura.value;
      }

      get costo() {
        return +this.inCosto.value;
      }

      get cantArticulo() {
        return +this.inCantArticulos.value;
      }

}