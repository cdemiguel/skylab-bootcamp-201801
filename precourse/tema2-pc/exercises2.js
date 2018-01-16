//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
for (prop in avenger) {
  console.log(prop);
}
//b) Ahora, crea una función que liste solo los valores de las propiedades.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
function showNames() {
	for(prop in avenger){
		console.log(avenger[prop]);		
	}
}
showNames();
//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.name="Hulk";
console.log(avenger.name)
//d) Ahora, elimina la propiedad ID y asegura los cambios.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
delete avenger.id;
console.log(avenger.id)
//e) Añade una nueva propiedad, por ejemplo city y dale un valor.
//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = "miami";
console.log(avenger.city);
//f) Lista el numero de propiedades que contiene el objeto. // se puede hacer de mas formas comentar***************************
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = "miami";
var n=0;
for (prop in avenger) {
    numberProp = n+1;
    n = numberProp;
}
console.log(numberProp);
//g) Cambia la propiedad name por fullName. // se puede hacer de mas formas comentar***************************
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = "miami";
str= JSON.stringify(avenger);
str = str.replace("name","fullName");
var newAvenger = JSON.parse(str);
console.log(newAvenger.fullName);
//h) Lista todas las propiedades del objeto a través de un console.log()
//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = "miami";
avenger.country = "US";
avenger.age = 32;
console.log(avenger.name,avenger.class,avenger.id,avenger.city,avenger.country,avenger.age);
//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos 
//parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)
function avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark)
//j) Crea otro objeto y imprime sus propiedades por pantalla.
var otherAvenger = new avenger ("Hulk", "XXI", "England", "Cientist", "MIT", 10);
console.log(otherAvenger);
//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
function avenger(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    //k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
    this.description = function() {
        console.log(this.fullName + ", " + this.classRoom + ", " + this.city + ", " + this.job + ", " + this.studies + ", " + this.markAv)
    }
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark)
//j) Crea otro objeto y imprime sus propiedades por pantalla.
console.log(otherAvenger);
//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:
otherAvenger.description();
//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
person1 = new person("maria","felipe",12,"azul")
person2 = new person("pedro","gonzalez",14,"azul")
person3 = new person("jose","gomez",12,"azul")
person4 = new person("anna","garcia",14,"azul")
function showNames() {
console.log(person1.firstName+ " ,"+person2.firstName)
}
showNames();
// m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, 
//crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
function person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}
person1 = new person("maria","felipe",12,"azul");
person2 = new person("pedro","gonzalez",14,"azul");
person3 = new person("jose","gomez",12,"rojo");
person4 = new person("anna","garcia",14,"azul");
person5 = new person("carlos","de miguel",29,"rojo");
    function showNames() {
        console.log(person1.firstName+ " ,"+person2.firstName)
    }
//showNames();
var lotPeople =[];
lotPeople.push(person1, person2, person3, person4);
console.log(lotPeople);
lotPeople.forEach(function(obj){
    if(obj.eyeColor=="azul"){
        console.log(obj.firstName);
    }
});
//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
function person(id, firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
    this.lastName = name;
    };
}
person1 = new person(1, "maria","felipe",12,"azul");
person2 = new person(2, "pedro","gonzalez",14,"azul");
person3 = new person(3, "jose","gomez",12,"rojo");
person4 = new person(4, "anna","garcia",18,"azul");
person5 = new person(5, "carlos","de miguel",29,"rojo");
person6 = new person(6, "fernando","gabriel",27,"violeta");

var lotPeople =[];
lotPeople.push(person1, person2, person3, person4, person5, person6);
var acc= 0;
var numberItems= lotPeople.length;
lotPeople.forEach(function(obj){
    acc += obj.age;
    return acc; 
    
});
var mediaArtim = acc/numberItems;
console.log(mediaArtim);

//ñ) Ahora, crea una funcion que recoja los avengers en parejas 
//(será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
function person(id, firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
    this.lastName = name;
    };
}
person1 = new person(1, "maria","felipe",12,"azul");
person2 = new person(2, "pedro","gonzalez",14,"azul");
person3 = new person(3, "jose","gomez",12,"rojo");
person4 = new person(4, "anna","garcia",18,"azul");
person5 = new person(5, "carlos","de miguel",29,"rojo");
person6 = new person(6, "fernando","gabriel",27,"violeta");

var lotPeople =[];
lotPeople.push(person1, person2, person3, person4, person5, person6);

function personPair() {
    for (var i = 0; i < lotPeople.length; i = i+2) { 
        console.log(lotPeople[i].firstName + " - " + lotPeople[i+1].firstName);

        if(lotPeople[i].age>lotPeople[i+1].age){
            console.log("este es el numero mayor entre ambos - " + lotPeople[i].age);
        } else {
            console.log("este es el numero mayor entre ambos - " + lotPeople[i+1].age);
        }
    }
}

personPair();

//ñ1) Intenta crear las parejas de forma aleatoria.

function person(id, firstName, lastName, age, eyeColor) {
    this.firstName = firstName;  
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
    this.lastName = name;
    };
    /// pusheo solamente los valores que quiero
    person.push({id, firstName, lastName});
    console.log(person)
}
person1 = new person(1, "maria","felipe",12,"azul");
person2 = new person(2, "pedro","gonzalez",14,"azul");
person3 = new person(3, "jose","gomez",12,"rojo");
person4 = new person(4, "anna","garcia",18,"azul");
person5 = new person(5, "carlos","de miguel",29,"rojo");
person6 = new person(6, "fernando","gabriel",27,"violeta");

var lotPeople =[];
lotPeople.push(person1, person2, person3, person4, person5, person6);

function personPair() {

    for (var i = 0; i < lotPeople.length; i = i+2) { 
        var randomNumber = Math.floor((Math.random() * 6) + 0);
        var randomNumber2 = Math.floor((Math.random() * 6) + 0);
        console.log(lotPeople[randomNumber].firstName + " - " + lotPeople[randomNumber2].firstName);

        // las comparaciones con un if / else 
    }
}

personPair();

// ñ1
function avenger (id,fullName,city, job, studies, markAv) {
    this.id = id;
    this.fullName = fullName;
    this.city = city;
    this.job = job;
    this.studies = studies;
    this.markAv = markAv;
    this.description = function() {
        console.log(this.fullName + ", " + this.city + ", " + this.job +", "+ this.studies);
    }
    avengers.push({id,fullName,markAv});
}

var avengers = []
var ironMan = new avenger (1,"Tony Stark", "NY", "Millionaire","engineer",9);
var thor = new avenger (2,"Thor Odinson", "Asgard", "god of thunder", "no studies", 7);
var hulk = new avenger (3,"Bruce Banner", "NY", "scientist", "science", 7);
var captainAmerica = new avenger (4,"Steve Rogers", "NY", "soldier", "no studies", 9);
var blackWidow = new avenger (5,"Natasha Romanova", "Stalingrad", "spy", "Martial Arts",8);
var hawkEye = new avenger (6,"Clint Barton","Iowa", "archer", "Martial Arts", 7);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

avengers = shuffle(avengers)
console.log(avengers)

for(var i = 0; i < avengers.length; i=i+2){
    console.log( avengers[i].fullName + ' VS ' + avengers[i+1].fullName)
    if(avengers[i].markAv > avengers[i+1].markAv){
        console.log('the winner is ' + avengers[i].fullName)
    }else{
        console.log('the winner is ' + avengers[i+1].fullName)
    }
}


// for para todo
// for in para objetos
// foreach para array de objetos

//pushear en array random numero temporal

// funcion anonima = callback (funciones que no tienen nombre que van a traves de metodos) 