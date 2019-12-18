//Pagina de porcentaje
let datoMujeres;
let datoHombres;
let TotalPorcentaje;

datoHombres=80;
datoMujeres=20;


function Porcentaje(){
    TotalPorcentaje=datoHombres+datoMujeres;
    var porcentHombres= (datoHombres / TotalPorcentaje)*100;
    var porcentMujeres= (datoMujeres / TotalPorcentaje)*100;
    console.log("Asistieron "+datoMujeres+ " mujeres al curso, que corresponde al " +porcentMujeres+ " % de las asistencias totales")
    console.log("Asistieron "+datoHombres+ " hombres al curso, que corresponde al " +porcentHombres+ " % de las asistencias totales")
}

Porcentaje();
