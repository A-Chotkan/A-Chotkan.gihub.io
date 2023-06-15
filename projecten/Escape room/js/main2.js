
const word ="Sleutel";
const clickfoto = document.querySelector('.img2');
clickfoto.addEventListener('click', openDoor2);

function openDoor2() {
    const y = prompt("Wat heb je gevonden?");

    if(y == word) {
        const audio = new Audio('media/winner.mp3');
        audio.play();
        setTimeout(function () {
            window.location.href = "winner.html";
        }, 3000);
    } else {
        alert("Fout");
    }


}