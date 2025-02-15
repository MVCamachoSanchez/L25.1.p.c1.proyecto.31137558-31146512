export default class Cl_tienda{
    constructor(){
        this.cntClientesUnArticulo = 0;
        this.mayorMonto = 0;
        this.acmMontoCaja = 200;
        this.porIncremento = 0;
    }

    procesarVenta(v){
        //Contar la cantidad de clientes que llevaron un solo articulo
        if(v.cantArticulo <= 1){
            this.cntClientesUnArticulo++;
        }

        if(v.costo > this.mayorMonto){
            this.mayorMonto = v.costo;
        }

        //acumular el monto caja
        this.acmMontoCaja += v.costo;
    }

    clientesUnArticulo(){
        return this.cntClientesUnArticulo;
    }

    mayorMontoPagado(){
        return this.mayorMonto;
    }

    totalcaja(){
        return this.acmMontoCaja;
    }
}