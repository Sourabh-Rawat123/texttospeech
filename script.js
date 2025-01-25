let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    
    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    speech.voice = voices[0];
    voiceSelect.value = 0; 
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

speech.rate = 0.8; 
speech.addEventListener('end', () => {
    speech.rate = 0.8; 
});

function setSpeechRate() {
    speech.rate = 0.8;
}

