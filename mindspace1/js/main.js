// Profile
function saveProfile() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    window.location.href = "dashboard.html";
}

if (document.getElementById("welcome")) {
    document.getElementById("welcome").innerText =
        "Hello " + localStorage.getItem("name") + " 🌟";
}

// Advanced Breathing Challenge

let breathingInterval;
let challengeTime = 30; // 30 seconds challenge
let timeLeft = challengeTime;
let challengeRunning = false;

function startBreathing() {

    const circle = document.getElementById("circle");

    if (challengeRunning) return;

    challengeRunning = true;
    timeLeft = challengeTime;

    let expand = true;

    // Create or update instruction text
    let instruction = document.getElementById("breathText");

    if (!instruction) {
        instruction = document.createElement("h3");
        instruction.id = "breathText";
        circle.parentElement.appendChild(instruction);
    }

    instruction.innerText = "Inhale... 🌬";

    breathingInterval = setInterval(() => {

        // Animation
        circle.style.transform = expand ? "scale(1.6)" : "scale(1)";
        instruction.innerText = expand ? "Inhale... 🌬" : "Exhale... 😌";
        expand = !expand;

        timeLeft -= 4;

        if (timeLeft <= 0) {
            clearInterval(breathingInterval);
            challengeRunning = false;

            instruction.innerText = "🎉 Congratulations! You completed the 30-second calm challenge!";
        }

    }, 4000);
}
// MUSIC CONTROLS
function changeSong() {
    const music = document.getElementById("music");
    const selectedSong = document.getElementById("songSelect").value;
    music.src = selectedSong;
    music.play();
}

function setVolume(val) {
    document.getElementById("music").volume = val;
}

// ADVANCED TRUTH OR DARE

const truthData = {
    fun: [
        "What is your funniest memory?",
        "What is your hidden talent?",
        "If you were a superhero, what power would you choose?"
    ],
    self: [
        "What is one habit you want to improve?",
        "What goal are you working towards?",
        "What makes you feel confident?"
    ],
    deep: [
        "What fear controls you sometimes?",
        "What truth about yourself is hard to accept?",
        "What regret do you still carry?"
    ]
};

const dareData = {
    fun: [
        "Dance for 30 seconds 💃",
        "Sing your favorite song 🎤",
        "Make a funny face and hold for 20 seconds"
    ],
    self: [
        "Write one positive affirmation ✨",
        "Take 5 deep breaths 🌬",
        "List 3 things you're grateful for"
    ],
    deep: [
        "Forgive someone silently",
        "Meditate quietly for 2 minutes",
        "Text someone you appreciate ❤️"
    ]
};

function truth() {
    const category = document.getElementById("category").value;
    const data = truthData[category];
    document.getElementById("gameText").innerText =
        data[Math.floor(Math.random() * data.length)];
}

function dare() {
    const category = document.getElementById("category").value;
    const data = dareData[category];
    document.getElementById("gameText").innerText =
        data[Math.floor(Math.random() * data.length)];
}


// Talking Buddy
function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();

    recognition.onresult = function (event) {
        const speech = event.results[0][0].transcript;
        const synth = window.speechSynthesis;
        const utter = new SpeechSynthesisUtterance(speech);
        synth.speak(utter);
    };
}