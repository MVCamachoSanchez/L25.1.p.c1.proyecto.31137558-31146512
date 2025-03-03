export default class Cl_mTienda{
    constructor(montoCaja=0, porIncremento=0){
        this.cntClientesUnArticulo = 0;
        this.mayorMonto = 0;
        this.porIncremento = porIncremento;
        this.montoCaja = montoCaja;
        this.acmMontoC = 0.0;
        this.auxCliente = "";
    }
    

    set porIncremento(porIncremento){
        this._porIncremento = +porIncremento;
    }
    get porIncremento(){
        return this._porIncremento;
    }

    set montoCaja(montoCaja){
        this._montoCaja = +montoCaja;
    }
    get montoCaja(){
        return this._montoCaja;
    }

    procesarVenta(v){
        //Contar las personas que llevaron un solo articulo
        if(v.cantArticulo === 1){
           this.cntClientesUnArticulo++;
        }

        //Determinar el cliente que mas pago
        if(v.monto() > this.mayorMonto){
            this.mayorMonto = v.monto();
            this.auxCliente = v.cliente;
        }

       
        this.acmMontoC += v.monto();
    }

    montoFinalCaja(){
        return this.montoCaja + this.acmMontoC + (this.acmMontoC * (this.porIncremento/100));
    }

    clienteMayorPago(){
        return this.auxCliente;
    }

    clientesMenosArticulo(){
        return this.cntClientesUnArticulo;
    }
    
}