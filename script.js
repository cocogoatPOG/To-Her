document.getElementById("envelope").onclick = () => {

// Play background music
const music = document.getElementById("bgMusic");
if(music){
music.play();
}

// Envelope click animation
const env = document.getElementById("envelope");
env.style.transform = "scale(0.85) rotate(-6deg)";

// Show first popup
show("photoScreen");
};

function nextFromPhoto(){
hide("photoScreen");
show("messageScreen");
}

function toValentine(){
hide("messageScreen");
show("valScreen");
}

function valNo(){
hide("valScreen");
show("catScreen");
}

function backToVal(){
hide("catScreen");
show("valScreen");
}

function valYes(){
hide("valScreen");
show("flowerScreen");
}

function toGifts(){
hide("flowerScreen");
show("giftScreen");
}

function openPhotos(){
hide("giftScreen");
show("photosScreen");
}

function openSong(){
hide("giftScreen");
show("songScreen");
}

function openLetter(){
hide("giftScreen");
show("letterScreen");
}

function backToGifts(){
hideAll();
show("giftScreen");
}

function resetAll(){
hideAll();
}

function show(id){
document.getElementById(id).classList.remove("hidden");
}

function hide(id){
document.getElementById(id).classList.add("hidden");
}

function hideAll(){
document.querySelectorAll(".popup")
.forEach(p => p.classList.add("hidden"));
}

/* FLOATING HEARTS SPAWNER */
setInterval(()=>{
const heart = document.createElement("span");
heart.innerHTML = "💚";
heart.style.left = Math.random()*100 + "vw";
heart.style.animationDuration = (Math.random()*3+3) + "s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=> heart.remove(),6000);
},500);
