export default class Cl_mVenta{
    constructor({cliente, factura, costo, cantArticulo}){
    this.cliente = cliente;
    this.factura = factura;
    this.costo = costo;
    this.cantArticulo = cantArticulo;
    }

    set cliente(cliente){
        this._cliente = cliente;
    }
    get cliente(){
        return this._cliente;
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

    monto(){
        return this.costo * this.cantArticulo
    }
}