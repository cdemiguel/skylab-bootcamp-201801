//// TODO
/// TEXT1.2 de MANU, ejemplo wrap ....
function cal(num){
    var num;
    var processCalc = processCalc(num)
/*
var Calculator = {
        sum: function(newNumber){
            this._newNumber=newNumber	
            var a = this._newNumber + this._number
            return this
        },
        mult: function(b){
            var sisisi= a - b;
            return this
        }
    }*/
}
var 

function calc(num, callback){
    return Calculator;
}
var Calculator = {
    sum: function(){
        console.log(num)
        return this
    } 
}

function a(){
    b.apply(this, arguments);
}
function b(){
    alert(arguments); //arguments[0] = 1, etc
}
a(1,2,3);​
console.log(calc(4).sum(3).mult(2))
console.log(cal(5).sum(10).rest(7))

console.log(Calculator.number(5).sum(10).rest(5))







console.log(calc(4).sum(3).mult(2))
console.log(cal(5).sum(10).rest(7))

console.log(Calculator.number(5).sum(10).rest(5))

var Challenge = {
    text: function(somethig) {
      this.word = somethig;
      return this;
    },
   
    wrap: function(item,item2) {
      (item2 === undefined) ? this.word = item + this.word + item : this.word = item + this.word + item2;
      return this;
    },
 
    toString: function(){
      return this.word;
    }
 };

 console.log(Challenge.text('something').wrap('$').wrap('[', ']').wrap('{', '}').wrap('<', '>').wrap('#').toString())



// y si añado en el prototipo la funcion suma resta ,....y la llamo?










console.log(calculator.theValue(4).sum(3).mult(2))




function makeGamePlayer(name, totalScore, gamesPlayed) {
  // Define desired object
  var obj = {
    name:  name,
    totalScore: totalScore,
    gamesPlayed: gamesPlayed
  };
  // Return it
  return obj;
}

var player = makeGamePlayer("John Smith", 15, 3);

//////////

function calc(num){
    console.log(num)

    Calculator.num = num

    return Calculator
}
/// devuelvo 4


function operationsNumbers(){

    /// coger calculator sum y añadirle el numero anterior
    Calculator.num = num

    // coger calculator resta y añadirle el numero anterior

}


var Calculator = {
    sum: function(othernum){
        console.log(othernum)
        return othernum 
    }
}
/// devuelvo 3


calc(4).sum(3)






//// CHALLENGE ALEX
function calc(num){
    operationsNumbers(num);
    return Calculator
}
function operationsNumbers(num){
    Calculator.num = num
}
var Calculator = {
    sum: function(othernum){
        this.num = othernum + this.num
        return this
    },
    rest: function(othernum){
        this.num = this.num - othernum
        return this
    },
    mult: function(othernum){
        this.num = this.num * othernum
        return this
    }
}
var result = calc(4).sum(3).rest(5).mult(2)
result.num = result.num.toString();
var result = JSON.stringify(result);


//JSON.stringify(obj);

/*
# Practice Recursion  /// QUE SE LLAME A SI MISMA LA FUNCION
## Goal
- Understand recursion
## Task
### counter-digit
Write a recursive function to count the times that a digit its repeat in a number.

```
input -> digitCount(2536228324, 2);
output-> 2 its 4 times
```
*/


/////////////
function digitCount (completenumber, number) {
    var counter = 0;
    var result = 0;
    completenumber = completenumber.toString();
    completenumber = completenumber.split('').map(function(item) {
        return parseInt(item, 10);
    });

    function recursiveFunction (completenumber, number){ 
        if(completenumber[counter] === number){
            result ++
            counter ++
        }else{
            counter ++
        }
        if (counter < completenumber.length){
            recursiveFunction(completenumber, number)
        }
    }
    recursiveFunction(completenumber, number)
    return result
}

console.log(digitCount(2536228324, 2))

////////////

//////////
/*
# Practice Recursion
## Goal
- Understand recursion
## Task
### reverse-string
Write a recursive function that reverse a string.
```
input -> reverseString('hello') output-> olleh

```
*/

//V2
function reverseString(word) {
    counter = 0;
    wordreverse = []
    var i = word.length
    function recursiveFunction(word){
        counter++
        wordreverse.push(word.charAt(i-1));
        i--
        if (counter < word.length){
            recursiveFunction(word)
        }
    }
    recursiveFunction(word)
    return wordreverse;
}
console.log(reverseString("hello"));