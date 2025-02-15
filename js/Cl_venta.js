export default class Cl_venta{
    constructor(nombre, factura, costo, cantAticulo){
        this.nombre = nombre;
        this.factura = factura;
        this.costo = costo;
        this.cantArticulo = cantAticulo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
    
    set factura(factura){
        this._factura = +factura;
    }
    get factura(){
        return this._factura;
    }

    set costo(costo){
        this._costo = +costo;
    }
    get costo(){
        return this._costo;
    }

    set cantArticulo(cantArticulo){
        this._cantArticulo = +cantArticulo;
    }
    get cantArticulo(){
        return this._cantArticulo;
    }
}