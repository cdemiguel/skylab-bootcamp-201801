/*
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 1, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 2, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 3, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 4, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 5, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 6, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 7, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 8, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 9, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 10, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 11, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 12, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 13, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 14, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 15, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 16, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 17, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 18, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 19, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 20, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 21, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 22, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 23, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 24, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 25, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 26, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") }
]
*/


var questions =   [
            {letter:'a',status: 0, questions:['CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien','Palabra que significa lo contrario de una dada','A fruit that can be red, green or yellow'], answer:['abducir','antónimo','apple']},
            {letter:'b',status: 1, questions:['CON LA B. Juego que ha sacado de quicio a todos los Skylabers en las sesiones de precurso','Palabra que tiene dos sílabas','Bonita in english is'], answer:['bingo','bisílaba','beautiful']},
            {letter:'c',status: 2, questions:['CON LA C. Niño, crío, bebé','Más es un adverbio de','You can drink it or eat it'], answer:['churumbel','cantidad','chocolate']},
            {letter:'d',status: 3, questions:['CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida','Los artículos, demostrativos, posesivos, etc. Son','the best friend of the human'], answer:['diarrea','determinantes','dog']},
            {letter:'e',status: 4, questions:['CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación','Palabra cuya sílaba tónica es la antepenúltima','It has very big ears'], answer:['ectoplasma','esdrújula','elephant']},
            {letter:'f',status: 5, questions:['CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad','Tipo de enunciado que no tiene verbo','In general you eat this all day'], answer:['facil','frase','food']},
            {letter:'g',status: 6, questions:['CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas','Lo que nos indica si es masculino o femenino es el','part of the body: its long and helps you to walk'], answer:['galaxia','género','leg']},
            {letter:'h',status: 7, questions:['CON LA H. Suicidio ritual japonés por desentrañamiento','Dos vocales juntas que forman dos sílabas distintas','Personal pronoun: él'], answer:['harakiri','hiato','he']},
            {letter:'i',status: 8, questions:['CON LA I. Templo cristiano','Forma no personal del verbo','Personal pronoun'], answer:['iglesia','Infinitivo','I']},
            {letter:'j',status: 9, questions:['CON LA J. Variedad salvaje del cerdo que sale en la película El Rey León, de nombre Pumba','Apellido del autor de Platero y yo','Very fast animal.'], answer:['jabali','jiménez','jaguar']},
            {letter:'k',status: 10, questions:['CON LA K. Persona que se juega la vida realizando una acción temeraria','Apellido de una niña que ha pasado a la historia','It is a food: it´s sweet and you eat it in your birthday.'], answer:['kamikaze','frank','cake']},
            {letter:'l',status: 11, questions:['CON LA L. Hombre lobo','Artículo masculino plural.','It´s a yellow and acid fruit'], answer:['licantropo','Los','Lemon']},
            {letter:'m',status: 12, questions:['CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas','Palabra que contiene una sola sílaba','Small animal that cats love'], answer:['misantropo','monosílaba','mouse']},
            {letter:'n',status: 13, questions:['CON LA N. Demostración de poca inteligencia','Determinante que indica cantidad u orden','It has the letter N: part of the body that you use it to write, say hello and goodbye'], answer:['necedad','numeral','hand']},
            {letter:'ñ',status: 14, questions:['CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.','Sinónimo de extrañar, echar de menos','Sinónimo de infancia. Niñez.'], answer:['señal','añorar','niñez']},
            {letter:'o',status: 15, questions:['CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien','Enunciado con sentido completo y que tiene al menos un verbo','It´s a colour and a fruit Orange.'], answer:['orco','oración','orange']},
            {letter:'p',status: 16, questions:['CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"','Palabras con más de un significado','You use it to write'], answer:['protoss','polisémicas','pen']},
            {letter:'q',status: 17, questions:['CON LA Q. Producto obtenido por la maduración de la cuajada de la leche','Dícese de la persona débil, enfermiza','The wife of the king'], answer:['queso','enclenque','queen']},
            {letter:'r',status: 18, questions:['CON LA R. Roedor','Los juglares recorrían las plazas de los pueblos recitándolos','It´s has the letter R: you have this in your head'], answer:['raton','romances','hair']},
            {letter:'s',status: 19, questions:['CON LA S. Comunidad salvadora de todo desarrollador informático','Que tiene el mismo significado','Personal pronoun:ella'], answer:['stackoverflow','sinónimo','she']},
            {letter:'t',status: 20, questions:['CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984','Obra de teatro que tiene un desenlace desgraciado','Personal pronoun: ellos o ellas'], answer:['terminator','tragedia','they']},
            {letter:'u',status: 21, questions:['CON LA U. Escritor y filósofo español de la generación del 98 autor del libro Niebla en 1914','Adjetivo que sigue inmediatamente en orden al o a lo décimo','It has the letter U: it´s the sixth month of the year'], answer:['unamuno','undécimo','june']},
            {letter:'v',status: 22, questions:['CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia','Palabras que indican acción o estado','It has the letter V: one, two, three, four'], answer:['vikingos','verbo','five']},
            {letter:'w',status: 23, questions:['CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso','Personal pronouns','Qué in english'], answer:['sandwich','we','what']},
            {letter:'x',status: 24, questions:['CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética','Contiene la X.- Prefijo que significa fuera de','It has the letter x: musical instrument where you blow'], answer:['botox','extra','sax']},
            {letter:'y',status: 25, questions:['CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos','Vocablo que imita o recrea un sonido','Pesonal pronoun :vosotros'], answer:['peyote','onomatopeya','you']},
            {letter:'z',status: 26, questions:['CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional','Conjunto de fonemas mínimo e irreductible que comparten las palabras de una misma familia','Place where you visit animals'], answer:['zen','raíz','zoo']},
            ]

            // console.log(questions[0].questions[0]) sacar preguntas

            // console.log(questions[0].letter) sacar letras

var users = []
var lotnameCorrect =[];
var html = "";
var correct = 0;
var error = 0;
/*var roundGame = [];*/
var indice = 0;
var bulletIndex = 0;
var ranking = 0;
var randomNum2 = [];

var correctTotals = []
var userCorrectTotals = []
var alertNameContainer =document.getElementById("alert-name-container");

// query selector recoge del dom el primer elemento con la clase el id etc... especificado
/* Eventos de insertar usuario mas estados del input */

function insertUser(){
    var user = document.getElementById("user");
    var button = document.getElementById("word-name-button");
    button.style.display = "none"
    user.setAttribute("value", "disabled");
    user.disabled = true;
    users.push(user.value)
    alertNameContainer.style.display = "none"
    clearrandomNum2();
    /* Mostramos las letras */
    showLetters();
    /* Mostramos la primera pregunta */
    /* Se activa el contador de tiempo */
    countdown();

    return user;
}
/* Nos muestra las letras del abecedario */
/* solo ejecutar cuando ranking  es igual a 0*/
function showLetters(){
    if(ranking !=1) {
        questions.forEach(function(obj, indice){
            html += "<span class='uk-margin-small-left uk-margin-small-right lettersBullet bullet'>"+questions[indice].letter+"</span>";
        });
        document.getElementById("alphabet-container").innerHTML = html;
        var bullets = document.getElementsByClassName("lettersBullet");
        for(var i = 0; i < bullets.length; ++i){
            //bullets[i].onmouseover = function() {
                bullets[i].setAttribute("id", bulletIndex);
                bulletIndex++
            //}
        }
    }
    showQuestions();
}

/* Nos muestra las preguntas del juego */
function showQuestions() {
    
    var randomNum = Math.floor((Math.random() * 3) + 1);
        randomNum = randomNum -1
        randomNum2.push(randomNum)
    var answerContainer = document.getElementById("answer-container");

    console.log("lalala")
    console.log(questions)

    document.getElementById("question-container").innerHTML = "<span class=''>"+questions[0].questions[randomNum]+"</span>";
    answerContainer.style.display = "block"
    var questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "block"

}

/* El botón levanta la función */
function insertAnswer(randomNum) {
    var answer = document.getElementById("answer");
    answer = answer.value;
    checkAnswer(answer);
    indice++ 
    if(correct + error === 27){
        showRanking(correctTotals, users);
    } else {
        document.getElementById("question-container").innerHTML = "<span class=''>"+questions[0].questions[randomNum2]+"</span>";
    }
    return answer;
}

/* Funcion que comprueba la respuesta en diferentes casos */
function checkAnswer(answer) {
    if(correct + error != 27){
    var actualBullet = document.getElementById(questions[0].status);
    if(answer === questions[0].answer[randomNum2]) {
        correct = 1 + correct++;
        actualBullet.setAttribute("class", "correct uk-margin-small-left uk-margin-small-right  bullet");
        questions.shift(questions[0])
        console.log("Acierto")
    }else {
        if(answer === "pasapalabra"){
            console.log("se ha dicho pasapalabra")
            /*roundGame.push(questions[indice])*/
            /*faltaria un .push en questions antes del shift, lo pongo detras lo elimino del frente*/
            questions.push(questions[0])
            questions.shift(questions[0])
        }
        else {
            error = 1 + error++;
            actualBullet.setAttribute("class", "error uk-margin-small-left uk-margin-small-right bullet");
            questions.shift(questions[0])
            console.log("Error - Palabra en rojo")
        }
    }}else {
        showRanking(correctTotals, users);
    }
    /* siempre que indice sea menor que 27 haremos el flujo normal, cuando sea mayor empezaremos a trackear las preguntas en las que hemos hecho pasapalabra*/
}


function showRanking(correctTotals, users) {
    //if(correct + error === 27){
    correctTotals.push(correct)
    // se recogen los datos de nombre y puntuacion
    for(var i = 0; i < users.length; i++) {
        function personPunctuation(nombre, puntuacion) {
          this.nombre = nombre;
          this.puntuacion = puntuacion;
        }
        nameCorrect0 = new personPunctuation(users[i], correctTotals[i]); 
        lotnameCorrect.push(nameCorrect0);         
    }
    // Se ordena la puntuación
    lotnameCorrect.sort(function(a, b) {
        return parseFloat(b.puntuacion) - parseFloat(a.puntuacion);
    });

    console.log("esto es lotnamecorres")
    console.log(lotnameCorrect)

    document.getElementById("ranking-container").innerHTML = "";

    lotnameCorrect.forEach(function(elemento, indice, array){
       /* document.getElementById("ranking-container").innerHTML = liRankingContainer; */
        document.getElementById("ranking-container").innerHTML += "<span class='user-name'>"+lotnameCorrect[indice].nombre+ " " +"</span>"+"<span class=''>"+"puntuacion: "+"</span>"+"<span class='user-points'>"+lotnameCorrect[indice].puntuacion+"</span><br>";
    });

    lotnameCorrect = [];

    clearTimeout(timeoutMyOswego);
    temp.innerHTML = 120;
    var questionContainer = document.getElementById("question-container");
    questionContainer.style.display = "none"
    
    questions.push(
            {letter:'a',status: 0, questions:['CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien','Palabra que significa lo contrario de una dada','A fruit that can be red, green or yellow'], answer:['abducir','Antónimo','Apple']},
            {letter:'b',status: 1, questions:['CON LA B. Juego que ha sacado de quicio a todos los Skylabers en las sesiones de precurso','Palabra que tiene dos sílabas','Bonita in english is'], answer:['bingo','Bisílaba','Beautiful']},
            {letter:'c',status: 2, questions:['CON LA C. Niño, crío, bebé','Más es un adverbio de','You can drink it or eat it'], answer:['churumbel','Cantidad','Chocolate']},
            {letter:'d',status: 3, questions:['CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida','Los artículos, demostrativos, posesivos, etc. Son','the best friend of the human'], answer:['diarrea','Determinantes','Dog']},
            {letter:'e',status: 4, questions:['CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación','Palabra cuya sílaba tónica es la antepenúltima','It has very big ears'], answer:['ectoplasma','Esdrújula','Elephant']},
            {letter:'f',status: 5, questions:['CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad','Tipo de enunciado que no tiene verbo','In general you eat this all day'], answer:['facil','Frase','Food']},
            {letter:'g',status: 6, questions:['CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas','Lo que nos indica si es masculino o femenino es el','part of the body: its long and helps you to walk'], answer:['galaxia','Género','Leg']},
            {letter:'h',status: 7, questions:['CON LA H. Suicidio ritual japonés por desentrañamiento','Dos vocales juntas que forman dos sílabas distintas','Personal pronoun: él'], answer:['harakiri','Hiato','He']},
            {letter:'i',status: 8, questions:['CON LA I. Templo cristiano','Forma no personal del verbo','Personal pronoun'], answer:['iglesia','Infinitivo','I']},
            {letter:'j',status: 9, questions:['CON LA J. Variedad salvaje del cerdo que sale en la película El Rey León, de nombre Pumba','Apellido del autor de Platero y yo','Very fast animal.'], answer:['jabali','Jiménez','Jaguar']},
            {letter:'k',status: 10, questions:['CON LA K. Persona que se juega la vida realizando una acción temeraria','Apellido de una niña que ha pasado a la historia','It is a food: it´s sweet and you eat it in your birthday.'], answer:['kamikaze','Frank','Cake']},
            {letter:'l',status: 11, questions:['CON LA L. Hombre lobo','Artículo masculino plural.','It´s a yellow and acid fruit'], answer:['licantropo','Los','Lemon']},
            {letter:'m',status: 12, questions:['CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas','Palabra que contiene una sola sílaba','Small animal that cats love'], answer:['misantropo','Monosílaba','Mouse']},
            {letter:'n',status: 13, questions:['CON LA N. Demostración de poca inteligencia','Determinante que indica cantidad u orden','It has the letter N: part of the body that you use it to write, say hello and goodbye'], answer:['necedad','Numeral','Hand']},
            {letter:'ñ',status: 14, questions:['CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.','Sinónimo de extrañar, echar de menos','Sinónimo de infancia. Niñez.'], answer:['señal','Añorar','Niñez']},
            {letter:'o',status: 15, questions:['CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien','Enunciado con sentido completo y que tiene al menos un verbo','It´s a colour and a fruit Orange.'], answer:['orco','Oración','Orange']},
            {letter:'p',status: 16, questions:['CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"','Palabras con más de un significado','You use it to write'], answer:['protoss','Polisémicas','Pen']},
            {letter:'q',status: 17, questions:['CON LA Q. Producto obtenido por la maduración de la cuajada de la leche','Dícese de la persona débil, enfermiza','The wife of the king'], answer:['queso','Enclenque','Queen']},
            {letter:'r',status: 18, questions:['CON LA R. Roedor','Los juglares recorrían las plazas de los pueblos recitándolos','It´s has the letter R: you have this in your head'], answer:['raton','Romances','Hair']},
            {letter:'s',status: 19, questions:['CON LA S. Comunidad salvadora de todo desarrollador informático','Que tiene el mismo significado','Personal pronoun:ella'], answer:['stackoverflow','Sinónimo','She']},
            {letter:'t',status: 20, questions:['CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984','Obra de teatro que tiene un desenlace desgraciado','Personal pronoun: ellos o ellas'], answer:['terminator','Tragedia','They']},
            {letter:'u',status: 21, questions:['CON LA U. Escritor y filósofo español de la generación del 98 autor del libro Niebla en 1914','Adjetivo que sigue inmediatamente en orden al o a lo décimo','It has the letter U: it´s the sixth month of the year'], answer:['unamuno','Undécimo','June']},
            {letter:'v',status: 22, questions:['CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia','Palabras que indican acción o estado','It has the letter V: one, two, three, four'], answer:['vikingos','Verbo','Five']},
            {letter:'w',status: 23, questions:['CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso','Personal pronouns','Qué in english'], answer:['sandwich','We','What']},
            {letter:'x',status: 24, questions:['CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética','Contiene la X.- Prefijo que significa fuera de','It has the letter x: musical instrument where you blow'], answer:['botox','Extra','Sax']},
            {letter:'y',status: 25, questions:['CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos','Vocablo que imita o recrea un sonido','Pesonal pronoun :vosotros'], answer:['peyote','Onomatopeya','You']},
            {letter:'z',status: 26, questions:['CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional','Conjunto de fonemas mínimo e irreductible que comparten las palabras de una misma familia','Place where you visit animals'], answer:['zen','Raíz','Zoo']},
            )
   
    correct = 0;
    error = 0;
    var actualBullet = document.getElementsByClassName("bullet");
    console.log(actualBullet)
    for(var i = 0; i < actualBullet.length; ++i){
        actualBullet[i].setAttribute("class", "uk-margin-small-left uk-margin-small-right lettersBullet bullet");
    }
    var button = document.getElementById("word-name-button");
    button.style.display = "inline"
    var user = document.getElementById("user");
    user.setAttribute("value", "enabled");
    user.disabled = false;
    var answerContainer = document.getElementById("answer-container");
    answerContainer.style.display = "none"
    alertNameContainer.style.display = "block"
    ranking = 1;
}

// Función que aplica al botón juego nuevo
function newGame(){
    location.reload();
}

var seconds;
var temp;

function countdown() {
    seconds = document.getElementById('time').innerHTML;
    seconds = parseInt(seconds, 10);
    if (seconds == 1) {
      temp = document.getElementById('time');
      stopCountdown()
      // se deberia desactivar todo 
      return;
    }
    seconds--;
    temp = document.getElementById('time');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
} 
function stopCountdown() {
    resetWords();
    showRanking(correctTotals, users);
    // Hacer que las que no se han contestado las de por malas, añadir al ranking // limpiar mesa para que se pueda resetear con boton
    // ir al ranking
}
function resetWords(){
    questions = [];
}
function clearrandomNum2() {
    randomNum2 = []
}

