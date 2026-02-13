let envelope = document.getElementById("envelope");

envelope.onclick = () => {
    show("photoPopup");
}

function closePhoto(){
    hide("photoPopup");
    show("messagePopup");
}

function openValentine(){
    hide("messagePopup");
    show("valPopup");
}

function valNo(){
    hide("valPopup");
    show("chancePopup");
}

function backToVal(){
    hide("chancePopup");
    show("valPopup");
}

function valYes(){
    hide("valPopup");
    show("bouquetPopup");
}

function openGifts(){
    hide("bouquetPopup");
    show("giftPopup");
}

function openPolaroid(){
    hide("giftPopup");
    show("polaroidPopup");
}

function openSong(){
    hide("giftPopup");
    show("songPopup");
}

function openLetter(){
    hide("giftPopup");
    show("letterPopup");
}

function backToGift(){
    hideAll();
    show("giftPopup");
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
    let popups = document.querySelectorAll(".popup");
    popups.forEach(p => p.classList.add("hidden"));
}
