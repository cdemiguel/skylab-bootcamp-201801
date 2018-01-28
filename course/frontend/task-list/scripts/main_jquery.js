$( document ).ready(function() {
    $('#formjquery .submit').click(function(e){
        e.preventDefault();
        var newListitem = $(".alohoma").val();
        $('.nice').append("<li>" + newListitem+ "</li>");
    });

    $('ul').on('click', 'li', function(){
        $(this).remove();
    });


});
