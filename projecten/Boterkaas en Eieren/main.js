// Hier krijg je alert van spelregels en vraag naar jullie namen.
alert("Dit is het spel Boter kaas en eirenen. Klik op OK voor de spelregels.");
alert("Je speelt tegen een tegenstander en dan de gene die het eerst 3 op een rij heeft, die heeft dan gewonnen.");
let player1;
player1 = prompt("Wat is de naam van speler 1?");
let player2;
player2 = prompt("Wat is de naam van speler 2?");
alert(player1 + " speelt tegen "+   player2); 
const restart = document.querySelector(".restart");
const boxes = document.querySelectorAll(".box");
let turn = "X"

// click function
function onclick() {
    console.log(event);
    if(event.target.textContent == ""){
    event.target.textContent = turn;

    if (turn == "X"){
        turn = "O"
    }else{
        turn = "X"
    } 
    checkWIn();
}
}

for (let i = 0; i < boxes.length; i++) {
    const box = boxes [i];
    console.log(box);
    box.addEventListener("click", onclick);
}

function checkWIn(){
    //check is wins

    const b2 = document.querySelector(".div2").textContent;
    const b3 = document.querySelector(".div3").textContent;
    const b4 = document.querySelector(".div4").textContent;
    const b5 = document.querySelector(".div5").textContent;
    const b6 = document.querySelector(".div6").textContent;
    const b7 = document.querySelector(".div7").textContent;
    const b8 = document.querySelector(".div8").textContent;
    const b9  = document.querySelector(".div9").textContent;
    const b10 = document.querySelector(".div10").textContent;
    const b11 = document.querySelector(".div11").textContent;
    const b12 = document.querySelector(".div12").textContent;
    
    if (b2 == "X" && b3 == "X" && b4 == "X") {
       showMessage("X heeft gewonnen!")
    } else if (b2 == "O" && b3 == "O" && b4 == "O"){
        showMessage("O heeft gewonnen!")

    } else if (b2 == "X" && b6 == "X" && b9 == "X"){
        showMessage("X heeft gewonnen!")
    } else if (b2 == "O" && b6 == "O" && b9 == "O"){
        showMessage("O heeft gewonnen!")
        
    }else if (b6 == "X" && b7 == "X" && b8 == "X"){
        showMessage("X heeft gewonnen!")
    }else if (b6 == "O" && b7 == "O" && b8 == "O"){
        showMessage("O heeft gewonnen!")

    } else if (b9 == "X" && b10 == "X" && b11 == "X"){
        showMessage("X heeft gewonnen!")
    }else if (b9 == "O" && b10 == "O" && b11 == "O"){
        showMessage("O heeft gewonnen!")

    }else if (b3 == "X" && b7 == "X" && b10 == "X"){
        showMessage("X heeft gewonnen!")
    }else if (b3 == "O" && b7 == "O" && b10 == "O"){
        showMessage("O heeft gewonnen!")

    }else if (b4 == "X" && b8 == "X" && b11 == "X"){
        showMessage("X heeft gewonnen!")
    }else if (b4 == "O" && b8 == "O" && b11 == "O"){
        showMessage("O heeft gewonnen!")
    
    }else if (b2 == "X" && b7 == "X" && b11 == "X"){
        showMessage("X heeft gewonnen!")
    }else if (b2 == "O" && b7 == "O" && b11 == "O"){
        showMessage("O heeft gewonnen!")
    
    }else if (b4 == "X" && b7 == "X" && b9 == "X"){
        showMessage("X heeft gewonnen")
    }else if (b4 == "O" && b7 == "O" && b9 == "O"){
        showMessage("O heeft gewonnen!")

    }else if (b2 && b3 && b4 && b6 && b7 & b8 && b9 && b10 && b11){
        showMessage("Het is gelijk spel")
    }
}

// Dit laat de bericht zien wie heeft gewonnen.
function showMessage(message){
        const pElement = document.querySelector("p.message");
        console.log(pElement)
        pElement.textContent = message;
        console.log(message);
    }

// Dit is voor de restart button.
restart.addEventListener("click", (e) =>{
boxes.forEach((vakjes) => {
    vakjes.textContent = ""
});
});