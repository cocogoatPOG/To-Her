document.getElementById("envelope").onclick = () => show("photoScreen");

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
    document.querySelectorAll(".popup").forEach(p=>p.classList.add("hidden"));
}
