$('form').submit(function (e) {
    e.preventDefault();

    var query = $('input').val();

    $.ajax({
        url: "http://api.icndb.com/jokes/" + query,
        success: function (result) {
            console.log(result);

            var list = '';
            result=result.value
            result.forEach(function(v) {
                list += v.joke + ' '; 
            });

            $("#box").html(list);
        }
    });
});

/*
vale ahora poniendo chuck muestro todas las frases de chuckl norris del array 0 - 99
no necesito mas frases de momento.
proximos steps añadir algo de diseño en la web
y hacer que cada vez se haga click en el botón solo muestre uno y vaya haciendo appends
hacer un boton de clear 
y hacer un boton de copy text
*/