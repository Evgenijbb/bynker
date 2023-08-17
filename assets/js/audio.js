let audioBtn=document.querySelector(".audio-button");
let inputAud=document.querySelector(".audio-volume");
let audioPLay=document.querySelector("audio");
let isPlay="играет"

audioBtn.addEventListener("click",()=>{
    console.log(isPlay);
    if (isPlay=="не играет") {
        isPlay="играет"
        audioPLay.play()
        console.log("музыка заиграла");
        console.log(audioBtn.src);
        audioBtn.src="./assets/images/on.png"
    }
    else{
        audioPLay.pause()
        console.log("музыку остановили");
        isPlay="не играет"
        console.log(audioBtn.src);
        audioBtn.src="./assets/images/off.png"
    }
})
audioPLay.volume=1
inputAud.addEventListener("change",()=>{
    audioPLay.volume=inputAud.value/100
    console.log(inputAud.value,audioPLay.volume);
})