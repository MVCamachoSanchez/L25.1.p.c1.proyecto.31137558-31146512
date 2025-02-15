export default class Cl_iVenta{

    get nombre(){
        return +prompt("Ingrese el nombre");
    }

    get factura(){
        return +prompt("Ingrese el numero de la factura");
    }

    get costo(){
        return +prompt("Ingrese el Costo del articulo");
    }

    get cantArticulo(){
        return +prompt("Ingrese la cantidad de articulo adquiridos")
    }
}