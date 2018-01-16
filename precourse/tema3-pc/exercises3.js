//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function showMyname(name) {
	console.log("este es mi nombre: " + name);
}

showMyname("Carlos");

// or

var minombre = myFunction("carlos");

function myFunction(name) {
	console.log(name);
}

// b) Intenta retornar los valores en lugar de usar console.log
// c) Ahora, añade tu edad y concaténala al return
// d) Iguala tu función a una variable y ejecútala



//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable,
//intenta imprimir sus dos resultados concatenados 
//Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.
//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas
//j) Al return de la función name(), concaténale otro mensaje
//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

function allFuction() {
	function myFunction(name, age) {
		return "este es mi nombre " + name + " y mi edad es " + age;
	}
	 function secondFunction(weight) {
		var newWeight = weight
		var randomNumber = (Math.random(0)*50).toFixed();
		var randomNumber = parseInt(randomNumber)
		var resultPlus = newWeight+randomNumber;
		//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 100 y otro si es de > 100
		if(resultPlus<100){
			return resultPlus + " es MENOR a 100";
		}else {
			return resultPlus + " es MAYOR a 100";
		}
	}
	var myName = myFunction("carlos" , 29);
	var myWeight = secondFunction(78);
	return myName + " y mi peso es " + myWeight;
}

console.log(allFuction());

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada //// FALTA ////

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre.
// Retorna a la funcion padre y concaténalo en el return padre.
//n) Refactorizemos nuestro código dejando todas las funciones 
//separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
function GenerateRandom(){
    var randomNumber = (Math.random(0)*50).toFixed();
	var randomNumber = parseInt(randomNumber)
    return randomNumber;
}

function myFunction(name, age) {
	return "este es mi nombre " + name + " y mi edad es " + age;
}

function secondFunction(weight) {
	var newWeight = weight
	var randomNumber =  GenerateRandom();
	var resultPlus = newWeight+randomNumber;
	//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 100 y otro si es de > 100
	if(resultPlus<100){
		return resultPlus + " es MENOR a 100";
	}else {
		return resultPlus + " es MAYOR a 100";
	}
}

function allFuction() {
	var myName = myFunction("carlos" , 29);
	var myWeight = " y mi peso es " + secondFunction(78);
	//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
	var results = [];
	results.push(myName, myWeight);
	console.log(results);
	return results;
}

//o) Crea una funcion que llame a nuestra funcion father(), 
//deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
function callFather() {
	var resultsAllFunction =  allFuction();
	resultsAllFunction.push("hello from the dark side...");
	console.log(resultsAllFunction);
	console.log(resultsAllFunction.0)
}

// primera llamada a call father
 callFather();
 //segunda llamada a call father da un peso distinto a la primera Ejercicio P) de los últimos
 callFather();
 // para comparar igualaria dos variables a la ejecucion de la funcion y jugaria con if,

//p) :underage: 👊🏼 Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. 
//El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.

//funcion que genera un numero random
function GenerateRandom(){
    var randomNumber = (Math.random(0)*50).toFixed();
	var randomNumber = parseInt(randomNumber)
    return randomNumber;
}
//funcion que pasamos nombre y edad desde la variable *nos interesa guardar la funcion en variable
function myFunction(name, age) {
	return "este es mi nombre " + name + " y mi edad es " + age;
}
// segunda funcion donde utilizamos el random number en el peso 
function secondFunction(weight) {
	var newWeight = weight
	var randomNumber =  GenerateRandom();
	var resultPlus = newWeight+randomNumber;
	//i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 100 y otro si es de > 100
	if(resultPlus<100){
		return resultPlus + " es MENOR a 100";
	}else {
		return resultPlus + " es MAYOR a 100";
	}
}
// creamos una función pseudo global que hace run de las anteriores y añade los resultados en una array
function allFuction() {
	var myName = myFunction("carlos" , 29);
	var myWeight = " y mi peso es " + secondFunction(78);
	//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
	var results = [];
	results.push(myName, myWeight);
	return results;
}
//o) Crea una funcion que llame a nuestra funcion father(), 
//deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
function callFather() {
	var resultsAllFunction =  allFuction();
	resultsAllFunction.push("hello from the dark side...");

	var arrayObject = {};
	for (var i = 0; i < resultsAllFunction.length; ++i){
		arrayObject[i] = resultsAllFunction[i];
	}
	//devuelvo un objeto
	return arrayObject;
}

//vez primera de llamada
var arrayObject = callFather();
//console.log(arrayObject);

console.log(arrayObject);

// para sacar los valores 1 a 1
console.log(arrayObject[0]);
console.log(arrayObject[1]);
console.log(arrayObject[2]);

//si tengo un objeto no debería poder sacar los valores con nombredeobjeto.0 nombredeobjeto.1 ..... ¿preguntar?
//objetos no tienen forEach !!!!!!!!!!!!!!!!!!!!!!!!!!!!! por lo tanto no puedo usar forEach (en ejercicios anteriores lo pasaba a array)
//solución:
Object.keys(arrayObject).forEach(function(key){
    console.log("este es el valor: "+ key + " " + arrayObject[key]);
});

