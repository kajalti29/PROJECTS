let utter = new SpeechSynthesisUtterance();
let voiceSelect = document.getElementById("voiceSelect");

// voices load karne ka function
function loadVoices() {
    let voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; // clear old options

    voices.forEach((v, i) => {
        let opt = new Option(v.name, i);
        voiceSelect.add(opt);
    });
}

// browser kuch devices me late voices load karta hai
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

// jab user voice choose kare
voiceSelect.addEventListener("change", () => {
    let voices = speechSynthesis.getVoices();
    utter.voice = voices[voiceSelect.value];
});

// speak button
document.getElementById("speakBtn").addEventListener("click", () => {
    utter.text = document.getElementById("text").value;
    speechSynthesis.speak(utter);
});
