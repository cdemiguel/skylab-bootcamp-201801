//isArray
var arrayOrNot = [3,5]
function isArray(){
    if(typeof arrayOrNot == "object"){
        return true
    }
    else{
        return false
    }
}
isArray(arrayOrNot)

//joinElements
beatles = ['John','George','Ringo','Paul'];
function toString(a){
    a = a.toString();
    console.log(a)
}
toString(beatles)

//array_Clone
var arrayClone01 =  [1, 2, 4, 0] ;
function arrayClone(a){
    var arrayClone02 = a.slice(0)
    return arrayClone02
}
console.log("este es el array clonado=>", arrayClone(arrayClone01))

//findDifferences
var arr01 = [1,2,3,4]
var arr02 = [1,2,3,4,5]
//TODO EJERCICIO ENCONTRAR LAS DIFERENCIAS

//Sum and Product
//TODO
var arr = [1,2,3,4]
function sumAndProduct(a){
    var initialNum = a[0]
    for(var i = 0; i < a.length; i++){
        var totalSum = initialNum + a[i] 
        initialNum = totalSum
    }
    console.log(totalSum-a[0])

    var multNumbers = a.reduce(function(a, b) {
        return a * b;
    });
    console.log(multNumbers)
}
sumAndProduct(arr)

//Add items
arrayPush=[]
function addItemsIntoArray(){
    arrayPush.push(arguments)
    console.log(arrayPush)
}
addItemsIntoArray(2,4,6)

//generateArrayLength
arrayGen = []
function generateArrayLength(a,b){
    arrayGen.push(a)
    for(var i = 1; i <= b-1; i++){
        a++
        arrayGen.push(a)
    }
    console.log(arrayGen)
}
generateArrayLength(1,4)

//last
function last(a,b){
    if(b){
	for(var i = 0; i < b; i++){
        console.log(a[i])
    }}else{
        console.log(a)   
    }
}
console.log(last([7, 9, 0, -2],3));

//sortItems
var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
function sortItems(){
    var arr2 = arr1.sort();
    return arr2
}
console.log(sortItems())

//getRandom
var arrRandomItem = [2,3,4,6,8,9,"pedro"]
function getRandom(){
    arrRandomsItemNumber = arrRandomItem.length
    var randomNumber = Math.floor(Math.random() * Math.floor(arrRandomsItemNumber));
    console.log(arrRandomItem[randomNumber])
}
getRandom()

//findDuplicates
var arrDuplicates = [3,3,7,8,9,6,8]
function findDuplicates(){
    for(var i = 0; i < arrDuplicates.length; i++){
        var number = arrDuplicates[i]
        for(var j = 0; j < arrDuplicates.length; j++){
            var number2 = arrDuplicates[j]
            if(number === number2){
                console.log(number + " value duplicate")
            }else{
                console.log(number + " value no duplicate")
            }

        }
    }
}
findDuplicates()
// TODO:

//Merge arrays
var array1 = [1, 2, 3]; 
var array2 = [2, 30, 1]; 
var arrayComplete = array1 +"," + array2
arrayComplete = arrayComplete.split()
var array = JSON.parse("[" + arrayComplete + "]");
var arrayNoDuplicate = array.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
console.log(arrayNoDuplicate)