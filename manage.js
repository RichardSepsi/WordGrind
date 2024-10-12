
var managehtml = `
<div class="mng-side-window">
<div class="exit-button" onclick="exitmanage(), setTimeout(initial, 200)">
    <img src="assets/log-out.svg" draggable="false" height="30px" width="30px">
    <div style="width: 16px;"></div>
    <span style="font-size: 22px; font-weight: 500; color: #696969;">出る</span>
</div>
<div style="display: flex; flex-direction: row; gap: 20px;" id="mng-mobile-container">
    <div class="home-center-container" id="mng-deck-list" style="margin-left: 0;margin-top: 40px; padding-bottom: 0; width: 360px; height: fit-content;">
    </div>
    <div class="home-center-container" id="mng-card-list" style="margin-left: 0;margin-top: 40px; padding-bottom: 9px; width: 360px; height: fit-content; max-height: 606px; overflow-y: auto; overflow-x: hidden;">
        <div class="manage-card-container" id="簡単-card-mng">
            <div class="manage-card-label selected" id="簡単-card-button">
                <span style="font-size: 18px; font-weight: 500;">簡単</span>
                <span style="font-size: 18px; font-weight: 500; color: #969696;">かんたん</span>
            </div>
            <div class="manage-card-buttons" id="簡単-card-del">
                <img src="assets/trash.svg">
            </div>
        </div>
        <div class="manage-card-container" id="向かう-card-mng">
            <div class="manage-card-label" id="向かう-card-button">
                <span style="font-size: 18px; font-weight: 500;">向かう</span>
                <span style="font-size: 18px; font-weight: 500; color: #969696;">むかう</span>
            </div>
            <div class="manage-card-buttons" id="向かう-card-del">
                <img src="assets/trash.svg">
            </div>
        </div>
        <div class="manage-card-container" id="終わる-card-mng">
            <div class="manage-card-label" id="終わる-card-button">
                <span style="font-size: 18px; font-weight: 500;">終わる</span>
                <span style="font-size: 18px; font-weight: 500; color: #969696;">おわる</span>
            </div>
            <div class="manage-card-buttons" id="終わる-card-del">
                <img src="assets/trash.svg">
            </div>
        </div>
    </div>
    <div class="home-center-container" style="margin-left: 0;margin-top: 40px; padding-bottom: 0; width: 300px; height: fit-content;" id="mobile-mng-cardinfo">
        <input placeholder="前" class="manage-input" name="manage-input" tabindex="1" id="manage-input-front" autocomplete="off">
        <input placeholder="答え" class="manage-input" name="manage-input" tabindex="1" id="manage-input-answer" autocomplete="off">
        <input placeholder="後ろ" class="manage-input" name="manage-input" tabindex="1" id="manage-input-back" autocomplete="off">
        <input placeholder="ヒント" class="manage-input" name="manage-input" tabindex="1" id="manage-input-hint" autocomplete="off">
        <div style="display: flex; flex-direction: row; width: 100%; margin-bottom: 14px;">
            <div class="button" style="height: 50px; flex-grow: 0.5; margin-right: 7px;" onclick="savecard()">保存する</div>
            <div class="button" style="height: 50px; flex-grow: 0.5; margin-left: 7px;" onclick="resetcard()">リセット</div>
        </div>
    </div>
</div>
</div>
`

let temphtmlsave2 = "";
let currentdeck = "";
let currentcard = "";

function gotomanage(){
    temphtmlsave2 = document.getElementById("main-container").innerHTML
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(-75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(75px)"
        document.getElementById("main-container").innerHTML = managehtml
        genmngdecks()
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}

function genmngdecks(){
    document.getElementById("mng-deck-list").innerHTML = ""
    let counter = 0
    Object.keys(deckdata).forEach(key => {
        counter = counter + 1
        document.getElementById("mng-deck-list").innerHTML += `
        <div class="manage-selector-container" id="`+key+`-manage">
            <div style="position: absolute; top: 0; left: 0; display: flex; width: 100%; height: 100%;" onclick="mngselectdeck('`+key+`')"></div>
            <div style="display: flex; justify-content: center; align-items: center;">
                <span style="font-size: 28px; font-weight: 600; color: #969696; padding-left: 23px; pointer-events: none;" id="mng-id-deck-name">`+key+`</span>
                <span style="font-size: 20px; font-weight: 600; color: #696969; padding-bottom: 1px; padding-left: 23px; pointer-events: none;" id="mng-id-deck-num">#`+counter+`</span>
            </div>
            <div class="mng-del-button" style="height: 50px; width: 50px; flex-grow: 0.5; margin-right: 7px; position: absolute; left: -80px;" id="`+key+`-card-del" onclick="deldeck('`+key+`')">
                <img src="assets/trash2.svg">
            </div>
        </div>
        `
        if(counter == 1){
            document.getElementById(key+"-manage").setAttribute("class", "manage-selector-container selected")
            currentdeck = key
            gencards(key)
        }
    });
}
function gencards(iden){
    document.getElementById("mng-card-list").innerHTML = ""
    let counter = 0
    Object.keys(deckdata[iden]).forEach(subkey => {
        counter = counter + 1
        document.getElementById("mng-card-list").innerHTML += `
        <div class="manage-card-container" id="`+deckdata[iden][subkey].front+`-card-mng">
            <div class="manage-card-label" id="`+deckdata[iden][subkey].front+`-card-button" onclick="selectcardmng('`+subkey+`')">
                <span style="font-size: 18px; font-weight: 500;">`+deckdata[iden][subkey].front+`</span>
                <span style="font-size: 18px; font-weight: 500; color: #969696;">`+deckdata[iden][subkey].answer+`</span>
            </div>
            <div class="manage-card-buttons" id="`+deckdata[iden][subkey].front+`-card-del" onclick="delcard('`+subkey+`')">
                <img src="assets/trash.svg">
            </div>
        </div>
        `
        if(counter == 1){
            document.getElementById(deckdata[iden][subkey].front+"-card-button").setAttribute("class", "manage-card-label selected")
            currentcard = subkey
            displaycarddata(subkey)
        }
    });
}
function mngselectdeck(ident){    
    document.querySelectorAll(".manage-selector-container").forEach(subkey => {
        subkey.setAttribute("class", "manage-selector-container")
    });
    document.getElementById(ident+"-manage").setAttribute("class", "manage-selector-container selected")
    currentdeck = ident 
    gencards(ident)
}
function selectcardmng(ide){
    document.querySelectorAll(".manage-card-label").forEach(subcard => {
        subcard.setAttribute("class", "manage-card-label")
    });
    document.getElementById(deckdata[currentdeck][ide].front+"-card-button").setAttribute("class", "manage-card-label selected")
    currentcard = ide
    displaycarddata(ide)
}
function displaycarddata(identy){
    document.getElementById("manage-input-front").value = deckdata[currentdeck][identy].front
    document.getElementById("manage-input-answer").value = deckdata[currentdeck][identy].answer
    document.getElementById("manage-input-back").value = deckdata[currentdeck][identy].back
    document.getElementById("manage-input-hint").value = deckdata[currentdeck][identy].hint
}

function delcard(idn){
    delete deckdata[currentdeck][idn];
    gencards(currentdeck)
}
function deldeck(idnt){
    delete deckdata[idnt];
    genmngdecks()
}

function savecard(){
    deckdata[currentdeck][currentcard].front = document.getElementById("manage-input-front").value
    deckdata[currentdeck][currentcard].answer = document.getElementById("manage-input-answer").value
    deckdata[currentdeck][currentcard].back = document.getElementById("manage-input-back").value
    deckdata[currentdeck][currentcard].hint = document.getElementById("manage-input-hint").value
    gencards(currentdeck)
}
function resetcard(){
    document.getElementById("manage-input-front").value = deckdata[currentdeck][currentcard].front
    document.getElementById("manage-input-answer").value = deckdata[currentdeck][currentcard].answer
    document.getElementById("manage-input-back").value = deckdata[currentdeck][currentcard].back
    document.getElementById("manage-input-hint").value = deckdata[currentdeck][currentcard].hint
}

function exitmanage(){
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(-75px)"
        document.getElementById("main-container").innerHTML = temphtmlsave2
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}