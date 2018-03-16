//HIGH ORDER FUNCTIONS

//Map
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
function monthsFirstLetterUpper(months){
    var monthWithMayus = months.map(function(x) {
        var z=x.substring(1);
        return x.charAt(0).toUpperCase()+z
    })
    return monthWithMayus
}
console.log(monthsFirstLetterUpper(months))

//Filter, extrae los meses que empiezan por j 
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(query) {
  return months.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
console.log(filterItems('j'));

//Reduce 
//Hacer un ejercicio 
//Mi solucion:
var text = 'the quick brown fox jumps over the lazy dog'
text = text.split("")
function countVowels(){
    var vocals = 'aeiou'
    var count = text.reduce(function(acc, valorActual){    
    for(var i = 0; i < vocals.length; i++){
        if(valorActual===vocals[i]){
           return acc++;
        }
        return acc;
    }
  }, 0);
  return count;
}
console.log(countVowels())

//Every&some
// con que uno cumple de true 
//every si todas cumplen esa condicion false
//some solo cuando una lo cumpla ya da respuesta true

function checkMoreThanFiveLetters(months){
    var result=months.every(function(x){
        return x.length>=5;
    });
    return result;
}
checkMoreThanFiveLetters(['january','february','march','april','may','june','july','august', 'september','october','november','december'])
// En cuanto encuentre ya uno que no cumpla la condicion cambiara el flag a false, porque encuentra uno ya que no la cumple
//verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada.

// en cambio el some
//El método some() verifica si algún elemento de un array cumple con el test implementado por la función brindada.
//por eso me dará true porque solo ya hay uno que cumplke la condicion ya hay un mes que es mayor que 5 entonces ya es true
function checkMoreThanFiveLetters(months){
    var result=months.some(function(x){
        return x.length>=5;
    });
    return result;
}
checkMoreThanFiveLetters(['january','february','march','april','may','june','july','august', 'september','october','november','december'])


//Callback
// pasas una funcion a otra funcion como si fuese un parametro
// Se separan responsabilidades... una funcion devolvera el permiso de mayor y mejor y otro el mensaje


var permision = function allowOrNot(age){
	var flag = function showMessage(){
		if(age>18){
            flag = true
        }else{
            flag = false
        }
    }
    return flag;
}
function showMessage(permision){
    if(flag==true){
        console.log("puedes beber alcohol")
    }else{
        console.log("no puedes ENTRAR NI BEBER")
    }}
permision(8)




function allowOrNot(age) {
    var subject = "Esta permitda la entrada";
    var subject2 = "NO se permite la entada"
    var message = function () { 
        if(age>18){
            message = "Esta permitda la entrada"
        }else{
            message = subject2
        }
    };
    return message;
}
var finalMessage = allowOrNot(9)
console.log(finalMessage())
//////////////////////////
function allowOrNot(age) {
    var message = function (age) { 
        if(age>18){
            message = "Esta permitda la entrada";
        }else{
            message = "NO se permite la entada";
        }
    return message;
    };
    return message;
}
var finalMessage = allowOrNot(9)
console.log(finalMessage())
///////////////////////////
function allowOrNot(age) {
    var message = function () { 
        if(age>18){
            message = "Esta permitda la entrada";
        }else{
            message = "NO se permite la entada";
        }
    	return message;
    };
    return message;
}
var finalMessage = allowOrNot(15)
console.log(finalMessage())
////////////////////////

function defineMessage(){
    var age=19;
    var message = function () { 
        if(age>18){
        return "se permite la entrada"
        }else{
            return "no se permite la entrada"
        }
    };
    return message;
}
 
var showMessage = defineMessage();
console.log(showMessage())

