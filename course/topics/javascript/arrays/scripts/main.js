//isArray
var arrayOrNot = [3,5]
function isArray(){
    if(Array.isArray(arrayOrNot) == true){
        return true
    }
    else{
        return false
    }
}
isArray()

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
var arr1 = [1,2,3,4,5,6]
var arr2 = [1,4,6]
var arr3 = []
var arrDef = []
function showDifferentNumbers(){
    arr3 = arr1.concat(arr2);
    arr3 = arr3.sort()
    console.log(arr3)
    for(var i = 0; i < arr3.length; i++){
        if(arr3[i] == arr3[i+1]){
            arrDef.push(arr3[i]);
        }
    }
    console.log(arrDef)
}
showDifferentNumbers()

// UTILIZAR FOR E INDEX OF
//ordenar igualar


//TODO EJERCICIO ENCONTRAR LAS DIFERENCIAS

//Sum and Product
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
	for(var i = b; i > 0; i--){
        console.log(a[i])
    }
    }else{
        console.log(a[a.length-1])   
    }
}
console.log(last([7, 9, 0, -2],2));

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

//separateEven
