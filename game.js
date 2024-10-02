function intfoc(){
    document.getElementById("input-field").setAttribute("style", "outline: 3px solid hsla(0, 0%, 30%, 1); !important;")
}
function intblr(){
    document.getElementById("input-field").setAttribute("style", "outline: 3px solid hsla(0, 0%, 30%, 0.5); !important;")
}

const stopwatch = document.getElementById("stopwatch-num")
let timer = null;
let startime = 0;
let elapsedtime = 0;
let deckname;
let wordcount;
let wordnum;
let cardname;
let lastcard;
let correctinsession = 0;
let wronginsession = 0;

function updatewatch(){
    const currentTime = Date.now();
    elapsedtime = currentTime - startime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedtime / 1000 % 60);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    stopwatch.textContent = `${hours}:${minutes}:${seconds}`
}

function initgame(){
    document.getElementById("overlay-container").style.opacity = "1"
    document.getElementById("overlay-container").style.pointerEvents = "all"
    console.log("test")

    hideback()
    hideanswer()
    hidehint()

    // stopwatch
    startime = 0;
    elapsedtime = 0;
    startime = Date.now() - elapsedtime
    timer = setInterval(updatewatch, 10);
    pickcard()
}

function pickcard(){
    hideback()
    hideanswer()
    hidehint()

    deckname = document.getElementById("id-deck-name").innerHTML
    wordcount = Object.keys(deckdata[deckname]).length
    wordnum = Math.floor(Math.random() * wordcount)
    console.log("card"+wordnum)
    cardname = "card"+wordnum
    if(cardname == lastcard){
        pickcard()
    }
    else if(wordcount == 1){

    }
    else{
        lastcard = cardname
    }
    document.getElementById("ovl-card-front").innerHTML = deckdata[deckname][cardname].front
    document.getElementById("ovl-card-back").innerHTML = deckdata[deckname][cardname].back
    document.getElementById("ovl-card-answer").innerHTML = deckdata[deckname][cardname].answer
    document.getElementById("ovl-card-hint").innerHTML = deckdata[deckname][cardname].hint

    document.getElementById("nextbutton").setAttribute("class", "button disabled")
}
function checkans(){
    console.log("changed")
    document.getElementById("main-input").value = wanakana.toKana(document.getElementById("main-input").value);
    if(document.getElementById("main-input").value == deckdata[deckname][cardname].answer){
        correctinsession = correctinsession + 1
        document.getElementById("correct-in-session").innerHTML = correctinsession
        document.getElementById("main-input").value = ""
        pickcard()
    }
}

function exitgame(){
    document.getElementById("overlay-container").style.opacity = "0"
    document.getElementById("overlay-container").style.pointerEvents = "none"
    console.log("test")

    // stopwatch
    clearInterval(timer)
    startime = 0;
    elapsedtime = 0;
}

function showback(){
    document.getElementById("ovl-card-back").style.opacity = "1"
    document.getElementById("ovl-card-back").style.pointerEvents = "all"
}
function hideback(){
    document.getElementById("ovl-card-back").style.opacity = "0"
    document.getElementById("ovl-card-back").style.pointerEvents = "none"
}
function showanswer(){
    document.getElementById("ovl-card-answer").style.opacity = "1"
    document.getElementById("ovl-card-answer").style.pointerEvents = "all"
}
function hideanswer(){
    document.getElementById("ovl-card-answer").style.opacity = "0"
    document.getElementById("ovl-card-answer").style.pointerEvents = "none"
}
function showhint(){
    document.getElementById("ovl-card-hint").style.opacity = "1"
    document.getElementById("ovl-card-hint").style.pointerEvents = "all"
}
function hidehint(){
    document.getElementById("ovl-card-hint").style.opacity = "0"
    document.getElementById("ovl-card-hint").style.pointerEvents = "none"
}