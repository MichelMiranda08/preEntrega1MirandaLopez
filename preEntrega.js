
index()

function index(){
    console.log("Prestamos facil y rapido")
    let monto = "";
    estado_socio = prompt("Es Socio: SI o NO");
    descuento = socio(estado_socio)

    while( monto != "fin"){
        monto = prompt("Ingresar monto a solicitar");
    
        if(monto != "fin"){
            let cuotas = prompt("Ingrese la cantidad de cuotas 3,6,12");
            let resultado_prestamo = calcular_prestamo(monto , cuotas);
            let resultado_descuento = (resultado_prestamo * descuento)
            console.log("Solicitaste: ", monto);
            console.log("Cuotas: ", cuotas);
            console.log("Descuento: ",  resultado_descuento);
            console.log("Devolucion ", resultado_prestamo - resultado_descuento);
            console.log("----------------------------------------------- ");
        }
    }
}

function socio(estado_socio){
    let descuento = 0
    if(estado_socio == "SI"){
        descuento = 0.20
    }else{
        descuento = 0
    }
    return descuento
}

function calcular_prestamo( monto , cuotas){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    if( monto > 0 && cuotas == 3){
        prestamo = monto + (monto * 0.15);
        return prestamo
        
    }
    else if( monto > 0 && cuotas == 6){
        prestamo = monto + (monto * 0.20);
        return prestamo
        
    }
    else if( monto > 0 && cuotas == 6){
        prestamo = monto + (monto * 0.20);
        return prestamo
        
    }
    else if( monto > 0 && cuotas == 12){
        prestamo = monto + (monto * 0.50);
        return prestamo
        
    }
    
}