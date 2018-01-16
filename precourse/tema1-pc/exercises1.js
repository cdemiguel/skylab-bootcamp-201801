//Strings////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//a) Puedes contar cuantas letras tiene tu nombre?
function numberLetters(name) {
	console.log("my name has "+name.length+" letters" );
}
numberLetters("Carlos");

//b) Añade tu apellido e indica en que posición se encuentra
function positionSurname(completename) {
	console.log(completename.indexOf("Miguel"));
}
positionSurname("Carlos Miguel");

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.
var nameComplete ="Carlos Miguel";
function showOnlyname(){
	console.log("My name is " + nameComplete.substr(0, 6));
}
showOnlyname();

//d) Ahora, solo tu apellido.
function showSurnameComplete (nameComplete2) {
	console.log("My lastname is " + nameComplete2.substr(7));
}
showSurnameComplete("Carlos Ferrero");

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
function equalVariables (name){
	var myNewString = "lobezno";
	var name = myNewString;
	console.log(name+", " + myNewString); 
}
equalVariables("IronMan");

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
function equalVariables (name){
	var myNewString = "lobezno";
	var name = "Mrs.";
	console.log(name+ " " + myNewString); 
}
equalVariables("IronMan");

//f)Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
function nameMayus(name) {
	console.log(name.toUpperCase());
}
nameMayus("carlos");

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
var variable1 = "Sacar un 10 ";
var variable2 = variable1 + "es bien"
console.log(variable2 + " es bien");

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
function showFistLastLetters(name) {
	console.log(name.charAt(0) + ", "+ name.charAt(7));
}
showFistLastLetters("Carlos Miguel");

//Arrays////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"
var myName = ["C","A","R","L","O","S","M","I","G"];
console.log(myName[0]+"/"+myName[1]+"/"+myName[2]+"/"+myName[3]+"/"+myName[4]+"/"+myName[5]+"/"+myName[6]+"/"+myName[7]+"/"+myName[8]);
console.log(myName.toString());
console.log(myName.join("/"));

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|" 
var myName = ["C","A","R","L","O","S","M","I","G"];
console.log(myName.slice(6).join("|"));

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for) 
var myName2 = ["C","A","R","L","O","S","M","I","G"];
myName2.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
});

var myName2="Carlos";
for (var i = 0; i < myName2.length; i++) {
    console.log(myName2[i] + ' - ' + i);
}

var myName2="Carlos";
for (var i = 0; i < myName2.length; i++) {
    console.log(myName2.charAt(i) + i)
}

//d)Como en el ejercicio anterior, pero seleccionando tu apellido
var myName3="Miguel";
for (var i = 0; i < myName3.length; i++) {
    console.log(myName3.charAt(i) + i)
}

var myName3="Miguel";
for (var i = 0; i < myName3.length; i++) {
    console.log(myName3[i] + ' - ' + i);
}

var nombreCarlos = ["Carlos", "Miguel"];
var apellido = nombreCarlos.pop()
// también puedo seleccionar el último método del array así:
var nombreCarlos = ["Carlos", "Miguel"];
console.log(nombreCarlos[nombreCarlos.length -1]);
//
for (var i = 0; i < apellido.length; i++) {
    console.log(apellido[i] + ' - ' + i);
}

// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings 
var nombreCarlos = ["Carlos", "Miguel"];
console.log(nombreCarlos[0].charAt(0) + nombreCarlos[1].charAt(0));

// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, 
//y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

function showMyname (name, lastname, years){
	console.log("My name is " + name + "and i'm " + years + "years old");
}
showMyname("Carlos", "Miguel", 29);

// o también podemos hacerlo así

var nombreCarlos = ["Carlos", "Miguel", 29];
console.log("i'm "+ nombreCarlos[0] +" i'm " + nombreCarlos[2])

// g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
var nombreCarlos = ["Carlos", "Miguel", 29];
function addElementtoarray () {
	nombreCarlos.push("Barcelona");
	console.log(nombreCarlos);
}
addElementtoarray();
//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
function deleteCity() {
	nombreCarlos.pop();
	console.log(nombreCarlos);
}
deleteCity();
//j) Ahora, elimina el nombre y asegura los cambios Resources: https://www.w3schools.com/jsref/jsref_shift.asp
function deleteName() {
	nombreCarlos.shift();
	console.log(nombreCarlos);
}
deleteName();
//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la 
//última posición, como podria hacer para introducirlo en la primera posición? Resources: https://www.w3schools.com/jsref/jsref_splice.asp
function insertName() {
	nombreCarlos.unshift("Carlos");
	console.log(nombreCarlos);
}
insertName();
//otra forma de hacerlo:
function insertName2() {
	nombreCarlos.splice(0,0,"Carlos");
	console.log(nombreCarlos);
}
insertName2();

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
var numbers = [1,2,3,4,5,6,7,8,9,10];
for (var i=0; i<numbers.length; i++){
	console.log(numbers[i]*2);
}
// o también podemos hacerlo
var numbers = [1,2,3,4,5,6,7,8,9,10];
var doubles = numbers.map(function(x) {
   return x * 2;
});
console.log(doubles);

//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
var numbers = [1,2,3,4,5,6,7,8,9,10];
var numberMultiplier= 10;
var doubles = numbers.map(function(x) {
   return x * numberMultiplier;
});
console.log(doubles);

//m) Podrías mostrarlos en el orden inverso? Resources: https://www.w3schools.com/jsref/jsref_sort.asp
var numbers = [1,2,3,4,5,6,7,8,9,10];
var numberMultiplier= 10;
var doubles = numbers.map(function(x) {
   return x * numberMultiplier;
});
console.log(doubles.sort(function(b, a){return a-b}));


//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?////////////////////////////////////////////////////////////////////////////////////

var nameCarlos="CarlosdeMiguel";
var lettersRepeated = (/([a-zA-Z]).*?\1/).test(nameCarlos)        
console.log("repeating string "+ lettersRepeated);

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras ////////////////////////////////////////////////////////////////////////////////////
var nonUnique = "Carlos de Miguel";
var unique = nonUnique.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');

var nombreCarlitos="CarlosdeMiguel";
var arrayCarlitos= nombreCarlitos.split("");


for (var i = 0; i < arrayCarlitos.length; i++) {
	if (arrayCarlitos[i]===arrayCarlitos){
		console.log(i);
	}
}


//Numbers////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//a) Que hora es? Declara la hora como número y devuelvela como String
var myString = 10.35;
var myNumberStringify = myString.toString();

console.log("Son las " + myNumberStringify) 

// b) Nono, que hora exactamente? Dime la hora sin minutos
var myString = 10.35;
var myNumberStringify = myString.toString();

function showHour() {
	console.log(myNumberStringify.substr(0, 2));
}
showHour();

// c) Ahora, declara tu hora y muéstrala redondeada.
var myString = Math.round(10.51);
console.log(myString);

// d) Hagamos una calculadora. Primero, la suma.
// We can do a calculator, so let's do it! first, do a sum with two numbers
var sum = 7+3;
console.log("The sum of 7+3 is "+sum); //The sum of 7+3 is 10
//d1) Añade la resta...
var resta=7-3;
console.log("The sum of 7+3 is "+sum+" and " +resta);
//d2) Y la multiplicación
var mult=7*3;
console.log(sum + resta + mult);
//d3) Por ultimo, la división
var sum = 7+3;
var div=7/3;
var mult=7*3;
var resta=7-3;
console.log(sum+" " + resta +" "+ mult +" "+ div);
//d3) Por ultimo, la división
var sum = 7+3;
var div=7/3;
var mult=7*3;
var resta=7-3;
var resultSum = sum.toString();
var resultDiv = div.toString();
var resultMult = mult.toString();
var resultRest= resta.toString();
console.log(resultSum+" "+resultDiv+ " "+resultMult+" "+resultRest)

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?
var multiFallida=10*"Hola"
console.log(multiFallida);
//Devuelve Nan Not-A-Number (No es Un Número)

//e) Podemos controlar este error con un condicional if?
var badOperation = 10*"hour";
if(isNaN(badOperation)) {
    console.log("You can't do this operation!") 
}


