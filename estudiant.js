//Pagina de porcentaje
require; 
let datoMujeres;
let datoHombres;
let TotalPorcentaje;

datoHombres=80;
datoMujeres=20;


function Porcentaje(){
    TotalPorcentaje=datoHombres+datoMujeres;
    let porcentHombres= (datoHombres / TotalPorcentaje)*100;
    let porcentMujeres= (datoMujeres / TotalPorcentaje)*100;
    console.log("Asistieron "+datoMujeres+ " mujeres al curso, que corresponde al " +porcentMujeres+ " % de las asistencias totales")
    console.log("Asistieron "+datoHombres+ " hombres al curso, que corresponde al " +porcentHombres+ " % de las asistencias totales")
    //let mensaje;
    //mensaje=("Asistieron "+datoMujeres+ " mujeres al curso, que corresponde al " +porcentMujeres+ " % de las asistencias totales")
    // PENE
}

Porcentaje();
