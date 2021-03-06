var lienzoSVG = document.getElementById("lienzoSVG");
var cx = 130;
var cy = 120;
var r = 100;

var oGrafico = [
{nombre:"vitamina A", porcentaje:"20",color:"#ffb88d"},
{nombre:"vitamina B", porcentaje:"12",color:"#ff8d8d"},
{nombre:"vitamina C", porcentaje:"6",color:"#35ce93"},
{nombre:"vitamina D", porcentaje:"17",color:"#35cdce"},
{nombre:"vitamina E", porcentaje:"18",color:"#c38dff"},
{nombre:"vitamina E", porcentaje:"27",color:"#fbd753"},    
];

function coords(a){
	var arad = (Math.PI / 180) * a;
	var coords = {
	"x" : cx+r * Math.cos(arad),
	"y" : cy+r * Math.sin(arad)
	};
	return coords;
}

function dGajo(ap,af){
var Xap = coords(ap).x;
var Yap = coords(ap).y;
var Xaf = coords(af).x;
var Yaf = coords(af).y;

var parametro_d  = 
"M" + cx + ", " + cy+
" L"+Xap+","+Yap+ 
" A"+r+","+r+" 0 0, 1 "+Xaf+","+Yaf+ 
" z";
return parametro_d;
}

function nuevoGajo(ap,af,color){
var nuevoGajo=document.createElementNS("http:\/\/www.w3.org/2000/svg","path");		
nuevoGajo.setAttributeNS(null,"d", dGajo(ap,af));
nuevoGajo.setAttributeNS(null,"fill", color); 
nuevoGajo.setAttributeNS(null,"stroke", "#fff"); 
nuevoGajo.setAttributeNS(null,"stroke-width", "1"); 
lienzoSVG.appendChild(nuevoGajo);
} 

var ap = Array(); // angulos de partida
var af = Array(); // angulos finales
	

for( var i=0; i < oGrafico.length; i++ ){
	var porcentaje = oGrafico[ i ].porcentaje;
	var color = oGrafico[ i ].color;
	// calcula el valor del ángulo en radianes
	af[i] = ((porcentaje*360)/100);
	
	if( i>0 ){
		af[ i ] += af[ i-1 ]
		ap[ i ] = af[ i-1 ];
	    } else { ap[ i ] = 0; }
	nuevoGajo(ap[ i ],af[ i ],color);
}