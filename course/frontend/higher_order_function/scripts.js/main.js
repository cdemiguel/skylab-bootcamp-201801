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

//Hacer el ejercicio de reduce con regular expresion

//Every&some
// con que uno cumple de true 
//every si todas cumplen esa condicion false
//some solo cuando una lo cumpla ya da respuesta true

//Callback
// pasas una funcion a otra funcion como si fuese un parametro
// Se separan responsabilidades... una funcion devolvera el permiso de mayor y mejor y otro el mensaje
