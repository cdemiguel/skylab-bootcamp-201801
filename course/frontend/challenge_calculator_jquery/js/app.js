$( document ).ready(function() {
    var buttonNumber = $("button.number");
    var buttonOperator= $("button.operation");
    var buttonClear= $("button.clear");
    var buttonResult = $("button#result");
    var input = $("input");
    var allChars = "";
    var restriction ="";
    var arrayChars = [];

    buttonNumber.on('click',function () {
        var num = $(this).text()
        allChars += num;
        $("input").val(allChars);
        arrayChars.shift()
        arrayChars.push(allChars);
        restriction = 0
    });
    
    buttonOperator.on('click',function () {
        if (restriction === 0){
            var operator = $(this).text()
            allChars += operator;
            $("input").val(allChars);
            arrayChars.push(operator);
            restriction = 1
        }
    });

    buttonClear.on('click',function () {
        allChars = "";
        arrayChars = [];
        $("input").val("");
    });

    buttonResult.on('click',function () {
        arrayChars= arrayChars[arrayChars.length-1]
        arrayChars = arrayChars.replace(/x/gi, "*");
        var total =  eval(arrayChars);
        arrayChars = [total]
        allChars = total
        console.log(arrayChars)
        $("input").val(total);
    });
    
});

