$(document).ready(function(){
    var game;
    var word;
    var attemps;
    // al pulsar play se muestra la segunda pantalla
  
    $("#play").click(function(e){
        e.preventDefault();

        $(".section-start").css("display","none");
        $(".section-data").css("display","flex");
    });     
  
    // al introducir la palabra y el número de intentos y pulsar GO comienza el juego

    $("#go").click(function(e){
        e.preventDefault();

        word = $("#word").val();
        attemps = $("#attemps").val();

        $(".section-data").css("display","none");
        $(".section-word").css("display","flex");

        $("#nattemps").text(attemps);
        game = new Hangman(word, attemps);

        //se pinta el número de letras inicial en la <ul>
        for (var i =0; i<word.length; i++){
            $('ul').append('<li>_</li>');
        }
    }); 

    $("#try").click(function(e){
        e.preventDefault();
        
        var tryThis = $("#tryText").val();

        if (tryThis.length>1 && word === tryThis.toLowerCase()){
            console.log('WINNNNNN');
            $(".section-word").css("display","none");
            $(".section-end").css("display","flex");
            $(".win").removeClass("hidden");
            $(".final_msg").html(word);
        }

        else if (tryThis.length>1 && word !== tryThis.toLowerCase()){
            $(".section-word").css("display","none");
            $(".section-end").css("display","flex");
            $(".lose").removeClass("hidden");
        }
        
        else {
        $("li").remove();
        console.log(tryThis);
        var res= game.try(tryThis);
        $("#nattemps").html(res.attemps);
        attemps = res.attemps;

        for(var i =0; i<res.cadena.length; i++){
          $('ul').append('<li>' + res.cadena[i] + '</li>');
        }
        
        if (word === res.cadena.join('').toLowerCase()){
            console.log('WINNNNNN');
            $(".section-word").css("display","none");
            $(".section-end").css("display","flex");
            $(".win").removeClass("hidden");
            $(".final_msg").html(word);
        }   

        if (attemps == 0){
            $(".section-word").css("display","none");
            $(".section-end").css("display","flex");
            $(".lose").removeClass("hidden");
        }

        $("#tryText").val('');
    }
    }); 


});