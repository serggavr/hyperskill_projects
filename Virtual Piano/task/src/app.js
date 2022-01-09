const keyA = document.querySelector('.keyA');
const keyS = document.querySelector('.keyS');
const keyD = document.querySelector('.keyD');
const keyF = document.querySelector('.keyF');
const keyG = document.querySelector('.keyG');
const keyH = document.querySelector('.keyH');
const keyJ = document.querySelector('.keyJ');
const keyW = document.querySelector('.keyW');
const keyE = document.querySelector('.keyE');
const keyT = document.querySelector('.keyT');
const keyY = document.querySelector('.keyY');
const keyU = document.querySelector('.keyU');
keyA.addEventListener("click", clickKey);
keyS.addEventListener("click", clickKey);
keyD.addEventListener("click", clickKey);
keyF.addEventListener("click", clickKey);
keyG.addEventListener("click", clickKey);
keyH.addEventListener("click", clickKey);
keyJ.addEventListener("click", clickKey);
keyW.addEventListener("click", clickKey);
keyE.addEventListener("click", clickKey);
keyT.addEventListener("click", clickKey);
keyY.addEventListener("click", clickKey);
keyU.addEventListener("click", clickKey);
document.addEventListener('keypress', pressKeyEvent);

function clickKey() {
    let keys = {
        key: `${this.innerText}`
    }
    let emulatedKeyPress = new KeyboardEvent('keypress', keys)
    pressKeyEvent(emulatedKeyPress)
}

function pressKeyEvent(pressedKey) {
        let audio = document.createElement('audio');
        audio.style.display = "none";
        audio.src = `audio/${pressedKey.key.toUpperCase()}.mp3`;
        audio.autoplay = true;
        audio.onended = () => audio.remove();
        document.body.appendChild(audio);
}


