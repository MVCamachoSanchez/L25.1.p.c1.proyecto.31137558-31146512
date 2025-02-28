import Cl_mVenta from "./Cl_mVenta.js";
import Cl_vVenta from "./Cl_vVenta.js";

export default class Cl_vTienda{
    constructor() {
        this.controlador = null;
        this.inIniciarCaja = document.getElementById("mainForm_iniciarCaja");
        this.inIniciarPorIncremento = document.getElementById("mainForm_iniciarporIncremento");
        this.btIniciar = document.getElementById("mainForm_btIniciar");
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("salida");
        this.vVenta = new Cl_vVenta();
        this.vVenta.btProcesar.onclick = () => this.controlador.procesarVenta();
        this.vVenta.btProcesar.hidden = true;
        this.btIniciar.onclick = () => {
          this.controlador.iniciarTienda(
            this.inIniciarCaja.value, 
            this.inIniciarPorIncremento.value 
          );
          this.inIniciarCaja.disabled = true;
          this.inIniciarPorIncremento.disabled = true;
          this.btIniciar.hidden = true;
          this.vVenta.btProcesar.hidden = false;
        };
      }
      procesarVenta() {
        this.mVenta = new Cl_mVenta({
          cliente: this.vVenta.cliente,
          factura: this.vVenta.factura,
          costo: this.vVenta.costo,
          cantArticulo: this.vVenta.cantArticulo,
        });
        return this.mVenta;
      }
      reportarVenta(
        montoFinalCaja,
        clienteMayorPago,
        clientesMenosArticulo
      ) {
        this.tabla.innerHTML += `<tr>
          <td>${this.mVenta.cliente}</td>
          <td>${this.mVenta.factura}</td>
          <td>${this.mVenta.costo}</td>
          <td>${this.mVenta.cantArticulo}</td>
        </tr>`;
        this.salida.innerHTML = `
        <br> Monto final en caja: ${montoFinalCaja}$
        <br> Cliente que pago mas: ${clienteMayorPago}
        <br> Cantidad de clientes que llevaron un solo articulo: ${clientesMenosArticulo}
    `;
      }
}