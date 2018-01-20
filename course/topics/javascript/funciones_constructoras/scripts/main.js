function Person(name, last, age, gender, interests) {
    this.firstname = name;
    this.lastname = last;
    this.age = age;
    this.gender=gender;
    this.interests=interests;

    //para poner logica en el constructor de objetos
    /*
        this.title = gender ==='m' ? 'Mrs' : 'Mrs';
    */
}
var Maria = new Person("Maria", "gonzalez", 18, "female" , ["games", "cinema"]);

Person.prototype.greeting = function(){
    return "hi i'm" + this.firstname
}

Person.prototype.farewell = function() {
    return this.firstname + "has left the buildin. Bye for now!"
}

Person.prototype.bio = function(){
    return this.firstname + this.lastname + " is " + this.age + " years old " + this.gender + " likes " + this.interests
} 

function Student(name, last, age, gender, interests){
    Person.call(this,name, last, age, gender, interests)
}
var Pepito = new Student("Pepito", "gonzalez", 15, "female" , ["games", "cinema"]);

Student.prototype.greeting = function(){
    return "Yo i'm" + this.firstname
}

function Teacher(name, last, age, gender, interests, subject){
    Person.call(this,name, last, age, gender, interests)
    this.subject=subject;
}

//Teacher.prototype = new Person();

var teresa = new Teacher("teresa","martinez","25","female","deporte","matematicas")

Teacher.prototype.greeting = function(){
    if(this.gender==="female"){
        var pronoum = "Mss"
    }else {
        var pronoum = "Mrs"
    }
    return "hi my name is" + pronoum + " " +  this.lastname + " and i teach" + this.subject
}
