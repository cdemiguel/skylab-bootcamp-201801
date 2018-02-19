/*
Hangman.constructor is function Hangman(word, attemps) {
  this.name = name;
}
*/


class Hangman {
    constructor(word, attemps=10) {
        this.word = word
        this.attemps = attemps
        this.messages = { 
            niceTry: "// Very Well you acerted",
            correctWord: "Sorry, you have not guessed... the correct word is ",
            wellDone: "You have guessed the word, well done!",
            gameOver: "GAME OVER."
        }
        this.cadena = [];
        for (let i = 0; i < this.word.length; i++) {
            this.cadena.push("_");
        }
    }

    try(charOrWord){ // var f = () => {'use strict'; return this};
    
    let play = true;
    let ok = false;
        let message = "";
        if (play) {
            if (charOrWord.length <= 1) {
                // QUERY all this logic could be processed in one function?
                for (let i = 0; i < word.length; i++) {
                    if (charOrWord.toLowerCase() === this.word.charAt(i).toLowerCase()) {
                        ok = true;
                        // cadena.splice(i, 1, _word.toUpperCase());
                        cadena[i] = charOrWord.toUpperCase();
                    }
                }
                if (ok) {
                    cadena.indexOf("_") === -1
                        ? ((message = cadena.join(" ") + `${messages.niceTry}`),
                            (play = false))
                        : ((ok = false), (message = attemps + " " + cadena.join(" ")));
                } else {
                    --attemps;
                    attemps === 0
                        ? ((message =
                            `${messages.correctWord}` +
                            word.toUpperCase() +
                            "."),
                            (play = false))
                        : (message = attemps + " " + cadena.join(" "));
                }
            } else {
                // QUERY all this logic could be processed in one function?
                play = false;
                return charOrWord === word
                    ? `${messages.wellDone}`
                    : `${messages.correctWord}` +
                    word.toUpperCase() +
                    ".";
            }
        } else {
            message = `${messages.gameOver}`;
        }
        return {
            cadena, attemps, message 
            // en ECMASCRIPT5 
            // cadena:cadena,
            // attemps:attemps,
            // message:mesage
        };
    };
} 


game = new Hangman('hello', 10);

game.try("h")
