const word ="Hier";
const openBtn2 = document.querySelector('#open-door2');
openBtn2.addEventListener('click', openDoor2);

function openDoor2() {
    const y = prompt("Welk woord heb je hier gevonden?");

    if(y == word) {
        let audio = new Audio('media/audio1.mp3');
        audio.play();
        setTimeout(function () {
            window.location.href = "puzzel3.html";
        }, 5000);
    } else {
        alert("Fout");
    }


}