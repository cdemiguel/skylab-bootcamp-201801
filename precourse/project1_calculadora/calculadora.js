var result = [];
var input = document.getElementById("input")
var num1;

var number = document.getElementsByClassName("atr");
var operator = document.getElementsByClassName("operator");

function showInputNumber(nCalcNumber) {
	nCalcNumber = nCalcNumber.getAttribute("class")
	document.getElementById("input").innerHTML += nCalcNumber;
	var numberCalc = nCalcNumber;
	result.push(numberCalc);
}

function getResult(){
	result = result.join("")
	var mapObj = {
        "×":"*",
        "÷":"/"
	};
	result = result.replace(/×|\÷/gi, function(matched){
	    return mapObj[matched];
	});
	var finalResult = eval(result);
	var input = document.getElementById("input")
	input.innerHTML = finalResult;
	result = []
	result.push(finalResult);
}

function newCalc() {
	location.reload();
}


// se hace expresion regular donde se buscan los * y los / y los reemplazamos por el caracter que toca
// o al reves


/*
var answer = document.getElementById("answer");
    answer = answer.value;

*/


/*
function joinResult() {
	num1 = result.join("");
	num1 = parseInt(num1)
	console.log(num1)
}
*/
/*
function showOperator(opCalcOperator) {
	document.getElementById("input").innerHTML = opCalcOperator.innerHTML;
	var operatorCalc = opCalcOperator.innerHTML;
	console.log(operatorCalc);
}
*/




