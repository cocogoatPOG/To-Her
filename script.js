function hideAll() {
    document.querySelectorAll(".popup").forEach(p => p.classList.remove("show"));
}

/* START FLOW */
function startFlow() {
    hideAll();
    document.getElementById("photoScreen").classList.add("show");
}

/* PHOTO -> MESSAGE */
function nextFromPhoto() {
    hideAll();
    document.getElementById("messageScreen").classList.add("show");

    startMusic();
    startHearts();
}

/* MESSAGE -> VAL */
function toValentine() {
    hideAll();
    document.getElementById("valScreen").classList.add("show");
}

/* YES PATH */
function valYes() {
    hideAll();
    document.getElementById("flowerScreen").classList.add("show");
}

function toGifts() {
    hideAll();
    document.getElementById("giftScreen").classList.add("show");
}

/* NO PATH */
function valNo() {
    hideAll();
    document.getElementById("catScreen").classList.add("show");
}

function backToVal() {
    hideAll();
    document.getElementById("valScreen").classList.add("show");
}

/* GIFTS NAV */
function openPhotos() {
    hideAll();
    document.getElementById("photosScreen").classList.add("show");
}

function openSong() {
    hideAll();
    document.getElementById("songScreen").classList.add("show");
}

function openLetter() {
    hideAll();
    document.getElementById("letterScreen").classList.add("show");
}

function backToGifts() {
    hideAll();
    document.getElementById("giftScreen").classList.add("show");
}

/* RESET */
function resetAll() {
    hideAll();
}

/* MUSIC */
function startMusic() {
    let music = document.getElementById("bgMusic");
    if (music) music.play().catch(() => {});
}

/* HEART PARTICLES */
function startHearts() {
    if (window.heartsStarted) return;
    window.heartsStarted = true;

    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💚";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 500);
}
