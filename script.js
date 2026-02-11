const envelope = document.getElementById("envelope");
const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const popupClose = document.getElementById("popup-close");

let step = 0;

/* ===== OPEN POPUP ===== */
function showPopup(html){
    popupBody.innerHTML = html;
    popup.style.display = "block";
}

/* ===== CLOSE POPUP ===== */
function hidePopup(){
    popup.style.display = "none";
}

/* ===== ENVELOPE CLICK ===== */
envelope.onclick = () =>{
    step = 1;
    nextStep();
};

/* ===== CLOSE BUTTON → NEXT STEP ===== */
popupClose.onclick = () =>{
    nextStep();
};

/* ===== STORY FLOW ===== */
function nextStep(){

    /* 1️⃣ Girlfriend Picture + Message */
    if(step === 1){
        showPopup(`
            <h2 class="title">My Dearest Love</h2>
            <img src="images/girlfriend.jpg" width="200">
            <p>You mean everything to me ❤️</p>
        `);
    }

    /* 2️⃣ Valentine Question */
    if(step === 2){
        showPopup(`
            <h2 class="title">Will You Be My Valentine?</h2>
            <button onclick="valentineAnswer('yes')">YES</button>
            <button onclick="valentineAnswer('no')">NO</button>
        `);
        return;
    }

    /* 3️⃣ Bouquet */
    if(step === 3){
        showPopup(`
            <img src="images/bouquet.png" width="220">
            <p>I love you forever 💕</p>
            <button onclick="nextStep()">Continue</button>
        `);
        return;
    }

    /* 4️⃣ Gift Options */
    if(step === 4){
        showPopup(`
            <h2 class="title">Surprise Gifts For You</h2>
            <div class="gift-grid">
                <div class="gift" onclick="gift1()">❤️</div>
                <div class="gift" onclick="gift2()">❤️</div>
                <div class="gift" onclick="gift3()">❤️</div>
            </div>
        `);
        return;
    }

    step++;
}

/* ===== YES / NO ===== */
function valentineAnswer(choice){

    if(choice === "yes"){
        step = 3;
        nextStep();
    } else {
        showPopup(`
            <p>Please? 🥺</p>
            <img src="images/cat.gif" width="150">
            <br>
            <button onclick="valentineAnswer('yes')">Another Chance</button>
        `);
    }
}

/* ===== GIFTS ===== */

function gift1(){
    showPopup(`
        <h3>Favorite Pictures</h3>
        <img src="images/photo1.jpg" width="90">
        <img src="images/photo2.jpg" width="90">
        <img src="images/photo3.jpg" width="90">
        <br>
        <button onclick="step=4; nextStep()">Back</button>
    `);
}

function gift2(){
    showPopup(`
        <h3>Song That Reminds Me Of You</h3>
        <iframe width="300" height="200"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID">
        </iframe>
        <br>
        <button onclick="step=4; nextStep()">Back</button>
    `);
}

function gift3(){
    showPopup(`
        <h3>To My Valentine</h3>
        <p>PUT YOUR LONG LOVE MESSAGE HERE ❤️</p>
        <button onclick="step=4; nextStep()">Back</button>
    `);
}
