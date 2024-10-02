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

    // stopwatch
    startime = 0;
    elapsedtime = 0;
    startime = Date.now() - elapsedtime
    timer = setInterval(updatewatch, 10);


}

function pickcard(){
    let deckname = document.getElementById("id-deck-name").innerHTML
    let wordcount = Object.keys(deckdata[deckname]).length
    let wordnum = Math.floor(Math.random() * wordcount)
    console.log("card"+wordnum)
    let cardname = "card"+wordnum
    document.getElementById("ovl-card-front").innerHTML = deckdata[deckname][cardname].front
    document.getElementById("ovl-card-back").innerHTML = deckdata[deckname][cardname].back
    document.getElementById("ovl-card-answer").innerHTML = deckdata[deckname][cardname].answer
    document.getElementById("ovl-card-hint").innerHTML = deckdata[deckname][cardname].hint
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