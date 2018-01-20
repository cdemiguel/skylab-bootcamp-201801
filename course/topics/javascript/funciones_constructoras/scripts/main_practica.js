var Person = function(firstname, lastname, age, gender, interests){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}
var alejandro = new Person("alejandro", "midas", 19, "male", ["estudiar", "deporte"])

Person.prototype.greeting = function(){
    console.log("hi im" + alejandro.firstname)
}
// alejandro.greeting()
Person.prototype.bio = function(){
    console.log("hi im " + alejandro.firstname + " and im" + alejandro.age)
}
// alejandro.bio()