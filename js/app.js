const dice = document.getElementById('dice-btn');

function dicegame() {

    // DICE 1
    var randomDice = Math.floor((Math.random() * 6) + 1);
    var diceLocation = "img/" + "dice_" + randomDice + ".png";
    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", diceLocation);

    // DICE 2
    var randomDice2 = Math.floor((Math.random() * 6) + 1);
    var diceLocation2 = "img/" + "dice_" + randomDice2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

     // DICE 3
     var randomDice3 = Math.floor((Math.random() * 6) + 1);
     var diceLocation3 = "img/" + "dice_" + randomDice3 + ".png";
     var img3 = document.querySelectorAll("img")[2];
     img3.setAttribute("src", diceLocation3);


     if (randomDice > randomDice2 && randomDice > randomDice3) {

        document.querySelector("h2").innerHTML = "The Winner is Member-1!";
    }
    else if (randomDice2 > randomDice && randomDice2 > randomDice3) {

        document.querySelector("h2").innerHTML = "The Winner is Member-2!";
    }
    else if (randomDice3 > randomDice && randomDice3 > randomDice2) {

        document.querySelector("h2").innerHTML = "The Winner is Member-3!";
    }
    else if (randomDice === randomDice2 && randomDice === randomDice3) {
        
        document.querySelector("h2").innerHTML = "It's a draw!";
    }
    else {
        document.querySelector("h2").innerHTML = "Something went wrong...";
    }
    
    // button text change
    dice.innerHTML = "Play Again"

}


