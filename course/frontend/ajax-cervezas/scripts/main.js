$(".progress-bar-container").hide()

$('form').submit(function (e) {
    e.preventDefault();

    var query = $('input').val();
    

    $.ajax({
        url: "https://quiet-inlet-67115.herokuapp.com/api/search/all?q=" + query,
        success: function (result) {
            console.log(result);
            var list = '';
            //v.id  
            //v.name  "+"ee">"+"v.name+"</a></li>'; 
            //<a href=https://quiet-inlet-67115.herokuapp.com/api/search/all?q='+v.id+'>'+v.name+'</a>
            result.forEach(function(v) {
                list += '<li class="text-center list-group-item mt-1" href=https://quiet-inlet-67115.herokuapp.com/api/beer/'+v.id+'>'+v.name+'</li>'
               
            });

            $("ul.col-6").show();
            $(".row.justify-content-center.section-content-beer").hide();
            $("#box ul").html(list);

            $("li").click(function(){
                $(".progress-bar-container").show()

                // $(".progress-bar").animate({
                //     width: "+=50%"
                // }, 500);
                //init 0-50

                $.ajax({ 
                    url: $(this).attr("href"),
                    success: function (resultbeer) {
                        
                        // end 0-100
                        $(".progress-bar").animate({
                            width: "+=100%"
                        }, 2000) 
                
                        setTimeout(function(){
                        $(".progress-bar-container").hide();
                        $(".progress-bar").css("width", "0")
                        // console.log(resultbeer);
                        // console.log(resultbeer.name);
                        $(".row.justify-content-center.section-content-beer").show();
                        $("ul.col-6").hide();      
                        $( ".beer-title" ).html( "<p>"+resultbeer.name+"</p>" );
                        //$( ".beer-image" ).attr("src", resultbeer.labels.icon);

                        // console.log(resultbeer.labels)
                        // console.log(resultbeer.labels.icon)

                        $( ".beer-description" ).html( "<p>"+resultbeer.style.description+"</p>" );
                        },2700);
                     
                    }
                })
            });
        } 
    });
});


    
  