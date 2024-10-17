var addhtml = `
<div class="side-window">
    <div class="exit-button" onclick="exitadd()">
        <img src="assets/log-out.svg" draggable="false" height="30px" width="30px">
        <div style="width: 16px;"></div>
        <span style="font-size: 22px; font-weight: 500; color: #696969;">出る</span>
    </div>
    <div class="home-center-container" style="margin-left: 0;margin-top: 40px;">
        <div style="position: relative;">
            <input placeholder="山札" class="manage-input" tabindex="1" id="deck-add-selection" autocomplete="off" onfocusin="expandadddropdown()" onfocusout="let timeoutId = setTimeout(unexpandadddropdown, 150);" oninput="addinputchange()">
            <div class="add-dropdown" id="add-dropdown">
            </div>
        </div>
        <input placeholder="前" class="manage-input" tabindex="1" id="add-input-front" autocomplete="off">
        <input placeholder="答え" class="manage-input" tabindex="1" id="add-input-answer" autocomplete="off">
        <input placeholder="後ろ" class="manage-input" tabindex="1" id="add-input-back" autocomplete="off">
        <input placeholder="ヒント" class="manage-input" tabindex="1" id="add-input-hint" autocomplete="off">
        <div style="display: flex; flex-direction: row; width: 120px;">
            <div class="button" style="height: 50px; flex-grow: 0.5; margin-right: 7px;" onclick="saveadd()">保存する</div>
        </div>
    </div>
</div>
`

let temphtmlsave3 = "";

function gotoadd(){
    temphtmlsave3 = document.getElementById("main-container").innerHTML
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(-75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(75px)"
        document.getElementById("main-container").innerHTML = addhtml
        genadddecks()
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}

function expandadddropdown(){
    document.getElementById("add-dropdown").style.opacity = "1"
    document.getElementById("add-dropdown").style.pointerEvents = "all"
    
}
function unexpandadddropdown(){
    document.getElementById("add-dropdown").style.opacity = "0"
    document.getElementById("add-dropdown").style.pointerEvents = "none"
}

function genadddecks(){
    document.getElementById("add-dropdown").innerHTML = ""
    Object.keys(deckdata).forEach(key => {
        document.getElementById("add-dropdown").innerHTML += `
        <div class="add-selector-option" onclick="addinsertdeck('`+key+`')">
            <span style="font-size: 24px; font-weight: 600; color: #969696; padding-left: 23px; pointer-events: none;">`+key+`</span>
        </div>
        `
    });
}

function addinsertdeck(deckid){
    document.getElementById("deck-add-selection").value = deckid
}

function addinputchange(){
    if(document.getElementById("deck-add-selection").value == ""){
        expandadddropdown()
    }
    else{
        unexpandadddropdown()
    }
}

function saveadd(){
    let pickeddeck = document.getElementById("deck-add-selection").value
    if (deckdata.hasOwnProperty(pickeddeck)) {
        newcardnum = Object.keys(deckdata[pickeddeck]).length + 1
        deckdata[pickeddeck]['card'+newcardnum] = {}
        deckdata[pickeddeck]['card'+newcardnum]['front'] = document.getElementById("add-input-front").value
        deckdata[pickeddeck]['card'+newcardnum]['answer'] = document.getElementById("add-input-answer").value
        deckdata[pickeddeck]['card'+newcardnum]['back'] = document.getElementById("add-input-back").value
        deckdata[pickeddeck]['card'+newcardnum]['hint'] = document.getElementById("add-input-hint").value
    } else {
        let newdeckid = document.getElementById("deck-add-selection").value
        deckdata[newdeckid] = {}
        deckdata[newdeckid]['card1'] = {}
        deckdata[newdeckid]['card1']['front'] = document.getElementById("add-input-front").value
        deckdata[newdeckid]['card1']['answer'] = document.getElementById("add-input-answer").value
        deckdata[newdeckid]['card1']['back'] = document.getElementById("add-input-back").value
        deckdata[newdeckid]['card1']['hint'] = document.getElementById("add-input-hint").value
    }
    document.getElementById("add-input-front").value = ""
    document.getElementById("add-input-answer").value = ""
    document.getElementById("add-input-back").value = ""
    document.getElementById("add-input-hint").value = ""
}

function exitadd(){
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(-75px)"
        document.getElementById("main-container").innerHTML = temphtmlsave3
        initial()
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}