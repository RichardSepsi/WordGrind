
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
let hiraganaonly = false;
let katakanaonly = false;

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

    document.getElementById("main-input").value = ""

    // stopwatch
    startime = 0;
    elapsedtime = 0;
    startime = Date.now() - elapsedtime
    timer = setInterval(updatewatch, 10);
    document.addEventListener('keypress', enterpress);

    if(optionsjson["カードの裏見せる"] == "1"){
        document.getElementById("show-back-btn").setAttribute("class", "button disabled")
        showback()
    }
    else{
        document.getElementById("show-back-btn").setAttribute("class", "button")
    }

    if(optionsjson["時計見せる"] == "0"){
        document.getElementById("stopwatch-num").style.opacity = "0"
        document.getElementById("stopwatch-num").style.pointerEvents = "none"
    }
    else{
        document.getElementById("stopwatch-num").style.opacity = "1"
        document.getElementById("stopwatch-num").style.pointerEvents = "all"
    }

    correctinsession = 0;
    wronginsession = 0;
    document.getElementById("correct-in-session").innerHTML = correctinsession
    document.getElementById("wrong-in-session").innerHTML = wronginsession

    pickcard()
}

function enterpress(e){
    if (e.key === 'Enter') {
        showanswer()
        showback()
    }
}
function enterpress2(e){
    if (e.key === 'Enter') {
        nextbutton()
    }
}

function nextbutton(){
    document.getElementById("nextbutton").setAttribute("class", "button disabled")
    document.getElementById("input-field").style.backgroundColor = "hsla(0, 0%, 16%, 1)"
    document.getElementById("input-field").style.outline = "3px solid hsla(0, 0%, 30%, 0.5)"
    document.getElementById("input-field").style.pointerEvents = "all"
    document.getElementById("main-input").setAttribute("placeholder", "ここにタイプする")
    document.removeEventListener('keypress', enterpress2);
    document.addEventListener('keypress', enterpress);
    pickcard()
}

function pickcard(){
    if(optionsjson["カードの裏見せる"] == "0"){
        hideback()
    }
    hideanswer()
    hidehint()

    deckname = document.getElementById("id-deck-name").innerHTML
    wordcount = Object.keys(deckdata[deckname]).length
    wordnum = Math.floor(Math.random() * wordcount)
    console.log("card"+wordnum)
    cardname = "card"+wordnum

    if(optionsjson["同じカードが続かないようにする"] == "1"){
        if(cardname == lastcard){
            pickcard()
        }
        else if(wordcount == 1){
    
        }
        else{
            lastcard = cardname
        }
    }
    else{}
    
    let tempstringcheck = deckdata[deckname][cardname].answer

    if(optionsjson["入力かなに変わる"] == "1"){
        if(wanakana.isHiragana(tempstringcheck) == true){
            hiraganaonly = true;
        }
        else if(wanakana.isKatakana(tempstringcheck) == true){
            katakanaonly = true;
        }
        else{
            hiraganaonly = false;
            katakanaonly = false;
        }
    }
    else{
        hiraganaonly = false;
        katakanaonly = false;
    }

    document.getElementById("ovl-card-front").innerHTML = deckdata[deckname][cardname].front
    document.getElementById("ovl-card-back").innerHTML = deckdata[deckname][cardname].back
    document.getElementById("ovl-card-answer").innerHTML = deckdata[deckname][cardname].answer
    document.getElementById("ovl-card-hint").innerHTML = deckdata[deckname][cardname].hint
    document.getElementById("main-input").focus()
}
function checkans(){
    console.log("changed")
    if(hiraganaonly == true){
        document.getElementById("main-input").value = wanakana.toHiragana(document.getElementById("main-input").value);
    }
    else if(katakanaonly == true){
        document.getElementById("main-input").value = wanakana.toKatakana(document.getElementById("main-input").value);
    }
    else{
        
    }
    
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
    document.getElementById("nextbutton").setAttribute("class", "button")
    document.getElementById("input-field").style.backgroundColor = "hsla(0, 0%, 16%, 0.75)"
    document.getElementById("input-field").style.outline = "3px solid hsla(0, 56%, 48%, 1)"
    document.getElementById("input-field").style.pointerEvents = "none"
    document.getElementById("main-input").blur()
    document.getElementById("main-input").setAttribute("placeholder", "不正解")
    document.getElementById("main-input").value = ""
    wronginsession = wronginsession + 1
    document.getElementById("wrong-in-session").innerHTML = wronginsession
    document.removeEventListener('keypress', enterpress);
    document.addEventListener('keypress', enterpress2);
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