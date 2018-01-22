//HIGH ORDER FUNCTIONS

//Map
var months = ['january','february','march','april','may','june','july','august', 'september','october','november','december']
function monthsFirstLetterUpper(months){
    var doubles = months.map(function(x) {
        var z=x.substring(1);
        return x.charAt(0).toUpperCase()+z
    })
    return doubles
}
console.log(monthsFirstLetterUpper(months))
