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