///SKYLAB AIRLINES ///
var cnt = 0;
var acc= 0;

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

var lastFiveElements = flights.slice(-5);

function skylabFlights(){
// Preguntar por nombre de persona y dar bienvenida... input y luego console.log de este input guardando el nombre
var person = prompt("Indicanos tu nombre:", "");
if (person == null || person == "") {
    txt = "Se ha cerrado el Pop Up";
    console.log(txt);
} else {
    txt = "Hola " + person + "! Bienvenido a Skylab";
    console.log(txt);
}

flights.forEach(function(obj){
	if(obj.scale == false){
		var contest = "no";
	}else {
		var contest = "si";
	}

	// Visualización amigable de los vuelos
	console.log("el vuelo con origen: "+obj.to+ " y destino " +obj.from+ " tienen un coste de " +obj.cost+ " y "+ contest+ " tiene escala");
	acc += obj.cost;
    return acc; 
});

// Calcula el coste medio de todos los vuelos
var numberOfFlights= flights.length;
var mediaArtim = acc/numberOfFlights;
console.log("el coste medio de los vuelos es: " +mediaArtim);


// Cuenta la cantidad de vuelos con escala hay
flights.forEach(function(obj){
	if(obj.scale == true){
		cnt++;
	}
});
console.log(cnt + " son la cantidad de vuelos con escala");

//Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
console.log("estos son los ultimos vuelos del dia:");
lastFiveElements.forEach(function(obj){
	//se mejora la seleccion de los 5 ultimos items, se utiliza el método slice
	console.log(obj.to);
});

}

// se engloba todo dentro de una funcion y se ejecuta...
skylabFlights();


