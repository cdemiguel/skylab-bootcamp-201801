
// declara nombre apellidos y declara edad en una variable
var carlosMiguel = "Carlos de Miguel";
var edadMiguel = 29;
console.log(carlosMiguel);
console.log(edadMiguel);
// declara en una array nombre apellidos y edad
var conjuntoMiguel = ["carlos", "miguel", 29];
console.log(conjuntoMiguel);
//declara en un objeto la nombre apellidos y edad
var objetoMiguel = {nombre="carlos", apellidos="miguel", edad=29};
console.log(objetoMiguel);
// Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
console.log(conjuntoMiguel[0]);
console.log(conjuntoMiguel[1]);
console.log(conjuntoMiguel[2]);
// Crea una estructura condicional que imprima el número mayor entre dos números.
var a = 25;
var b = 12;
if (a>b) {
	console.log(a);
}else if (a==b){
	console.log(a);
}
// Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.
var arrayNumeros = [1,2,3,4,5];

for(var i=0; i<arrayNumeros.length; i++){
  console.log(arrayNumeros[i]);
  	if(arrayNumeros[i]===3){
      console.log("estas en medio");
    }
  
}
//  Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error
var nombreDemi ="Carlos"
var edadDemi = 29;
if(!nombreDemi || !edadDemi){
	console.log("error!");
}else{
	console.log("es tu nombre");
}

//Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.
var arrayDemi = ["Francia", "Carlos", "Japon", 9, 29, "Portugal"];

for(var i=0; i<arrayDemi.length; i++){

if(arrayDemi[i]===1 || arrayDemi[i]===4){
		console.log("he encontrado tu datos");
}
console.log(arrayDemi[1]);
console.log(arrayDemi[4]);
}