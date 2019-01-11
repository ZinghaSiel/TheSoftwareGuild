function luckySevens() {
	return Math.floor(Math.random() * 6) + 1;
}

function start(){
	var startingBet = Number(document.forms["luckySevens"]["bet"].value);
	var cash = startingBet;
	var firstDice;
	var secondDice;
	var Sum;
	var maxWins = 0;
	var rolls = 0;
	var maxRolls = 0;

	if(cash<=0){
		alert("You must enter a valid amount in order to play");
	}
	else{
		while(cash > 0){
			firstDice = luckySevens();
			secondDice = luckySevens();
			Sum = firstDice + secondDice;
			rolls++;
			if(Sum != 7){
				cash--;
				console.log("lost");
			}
			else{
				cash += 4;
				if(cash > maxWins){
					maxWins += (cash-maxWins);
					maxRolls = rolls;
				}
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again!";
	document.getElementById("start").innerText = startingBet;
	document.getElementById("numberRolls").innerText = rolls;
	document.getElementById("max").innerText = maxWins;
	document.getElementById("maxRolls").innerText = maxRolls;
	return false;
}