
const result = 148;
const openBtn = document.querySelector('#open-door');
openBtn.addEventListener('click', openDoor);

function openDoor() {
    const x = prompt("Wat is de totale waarde?");
    if(x == result) {
            let audio = new Audio('media/audio.m4a');
            audio.play();
        setTimeout(function () {
            window.location.href = "puzzel2.html";
        }, 3000);
        
    } else {
        alert("Fout");
    }

}
