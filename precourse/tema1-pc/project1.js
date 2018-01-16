// Declaración de las variables
var numeroOne = 25.555555555;
var numeroTwo = 5;

function operateAll() {

	function sumarNumeros(numero1,numero2){
		var resultSum = numero1+numero2;
		return resultSum;
		console.log(resultSum);
	}
	function restarNumeros(numero1,numero2){
		var resultRest = numero1-numero2;
		return resultRest;
		console.log(resultRest);
	}
	function multiplicarNumeros(numero1,numero2){
		var resultMult = numero1*numero2;
		return resultMult;
		console.log(resultMult);
	}
	function dividirNumeros(numero1,numero2){
		var resultDiv = numero1/numero2;
		return resultDiv;
		console.log(resultDiv);
	}

	if(typeof numeroTwo === 'undefined') {
		function raizCuadrada(numero1, numero2){
			var resultRaiz=Math.sqrt(numero1);
			console.log(resultRaiz);
		}
		raizCuadrada(numeroOne);
	}else if (!isNaN(numeroTwo)) {
		var resultSum = sumarNumeros(numeroOne, numeroTwo).toFixed(2);
		var resultRest = restarNumeros(numeroOne, numeroTwo).toFixed(2);
		var resultMult = multiplicarNumeros(numeroOne, numeroTwo).toFixed(2);
		var resultDiv = dividirNumeros(numeroOne, numeroTwo).toFixed(2);
		var resultadoTotal = [resultSum,resultRest,resultMult,resultDiv]
		console.log(resultadoTotal);
	}
	else {
		console.log("Estas operaciones no han podido realizarse");
	}
}

operateAll();


