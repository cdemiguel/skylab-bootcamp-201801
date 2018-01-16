bingoPlay();


function bingoPlay() {
	var personPlayer = prompt("Indicanos tu nombre:", "");
	//person player será igual al nombre que se le añade en el promp, podemos verlo con console.log
	document.write("hello " +personPlayer+ " welcome to BINGO game"); 

	var bingoCard = [];

	//función primera linea
	var firstRow = Array.apply(null, Array(5)).map(function(item, index){
    	return Math.floor(Math.random() * 10);
	});
	var secondRow = Array.apply(null, Array(5)).map(function(item, index){
    	return Math.floor(Math.random() * 10);
	});
	var thirdRow = Array.apply(null, Array(5)).map(function(item, index){
    	return Math.floor(Math.random() * 10);
	});

	// declaro la variable exectued al principio
	var linea = false;
	var counterBall = 0;

	bingoCard.push(firstRow, secondRow, thirdRow);
	// Se visualiza el cartón con 15 numeros!
	console.log(bingoCard);
	//bingoCard Grafico
	function createNumbers(){
		document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); 
		for (i=0;i<bingoCard.length;i++){ 
		   	document.write("<tr>") 
		   	document.write("<td><b>fila " + i + "</b></td>") 
		   	for (j=0;j<bingoCard[i].length;j++){ 
		   		/*
		      	if (randomBallNum === bingoCard[i][j]){
		      		bingoCard[i][j] = "X"
		      	}
		      	*/
		      	document.write("<td>" + bingoCard[i][j] + "</td>") 
		   	} 
		   	document.write("</tr>") 
		} 
		document.write("</table>")
	}
	createNumbers();

	var sayContinue = confirm('quieres empezar con el bingo? si aceptas saldrá el primer número') // true / false
	
	if(sayContinue === true){
		shotBingo();
	}

	
	function shotBingo() {
		var randomBallNum = Math.floor(Math.random() * 10);
		console.log(randomBallNum);
		var restricFunction = 0;

		function createNumbersTwo(){
		document.write("<table width=200 border=1 cellpadding=1 cellspacing=1>"); 
		for (i=0;i<bingoCard.length;i++){ 
		   	document.write("<tr>") 
		   	document.write("<td><b>fila " + i + "</b></td>") 
		   	for (j=0;j<bingoCard[i].length;j++){ 
		   		
		      	if (randomBallNum === bingoCard[i][j]){
		      		bingoCard[i][j] = "X"
		      	}
		      	
		      	document.write("<td>" + bingoCard[i][j] + "</td>") 
		   	} 
		   	document.write("</tr>") 
		} 
		document.write("</table>")
		}
		createNumbersTwo();

		function sayLineBingo(vCounter){
			if(firstRow.join('') === "XXXXX" || secondRow.join('') === "XXXXX" || thirdRow.join('') === "XXXXX"){
				if (!linea) {
					linea = true;
					console.log("LINEAAAAAA!!!!!!!! y como solo hay una es la que verás");
				}
			}
			if(firstRow.join('') === "XXXXX" && secondRow.join('') === "XXXXX" && thirdRow.join('') === "XXXXX"){
				console.log("BINGASO TOP TOP TOP");
				console.log("se han sacado tantas bolas: " + counterBall)
				return endBingo();
			} else {
				continueBingo();
			}
		}
		var counterBallRegister = counterBall++;
		sayLineBingo(counterBallRegister);
	}

	function continueBingo() {
		var sayContinue = confirm('sacar otra bola') // true / false
			if(sayContinue === true){
				shotBingo();
		}
	}

	function endBingo() {
		console.log("FIIIIIIIIIIIIIIIIIIIIN DEL BIIIIIIIIINGO")
		var sayContinueTwo = confirm('quieres volver a jugar?') // true / false
		if(sayContinueTwo === true){
			bingoPlay();
		}else{
			console.log("aqui acaba el bingo por hoy")
		}
	}

}
