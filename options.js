
var optionshtml = `
<div class="side-window">
    <div class="exit-button" onclick="exitoptions()">
        <img src="assets/log-out.svg" draggable="false" height="30px" width="30px">
        <div style="width: 16px;"></div>
        <span style="font-size: 22px; font-weight: 500; color: #696969;">出る</span>
    </div>
    <div class="home-center-container" style="margin-left: 0;margin-top: 40px;">
        <div id="options-wrapper">
            
        </div>
        <div style="height: 14px;"></div>
        <div style="display: flex; flex-direction: row; width: 100%;">
            <div class="button" style="height: 50px; flex-grow: 0.5; margin-right: 7px;" onclick="saveoptions()">保存する</div>
            <div class="button" style="height: 50px; flex-grow: 0.5; margin-left: 7px;" onclick="resetoptions()">リセット</div>
        </div>
    </div>
</div>
`

let temphtmlsave = "";

function gotooptions(){
    temphtmlsave = document.getElementById("main-container").innerHTML
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(-75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(75px)"
        document.getElementById("main-container").innerHTML = optionshtml
        genoptions()
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}

function genoptions(){
    Object.keys(optionsjson).forEach(key => {
        if(optionsjson[key] == 1){
            document.getElementById("options-wrapper").innerHTML += `
            <div class="option-container">
                <input type="checkbox" class="option-checkbox" id="`+key+"-checkbox"+`" checked/>
                <span class="option-label">`+key+`</span>
            </div>
            `
        }
        else{
            document.getElementById("options-wrapper").innerHTML += `
            <div class="option-container">
                <input type="checkbox" class="option-checkbox" id="`+key+"-checkbox"+`"/>
                <span class="option-label">`+key+`</span>
            </div>
            `
        }
        
    });
}

function resetoptions(){
    document.getElementById("options-wrapper").innerHTML = ""
    genoptions()
}

function saveoptions(){
    Object.keys(optionsjson).forEach(key => {
        if(document.getElementById(key+"-checkbox").checked){
            optionsjson[key] = "1"
        }
        else{
            optionsjson[key] = "0"
        }
    });
}

function exitoptions(){
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(-75px)"
        document.getElementById("main-container").innerHTML = temphtmlsave
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}


/*Object.keys(deckdata).forEach(key => {
    if(counter == 0){
        document.getElementById("id-deck-name").innerHTML = key
    }
    else {
        document.getElementById("deck-options-container").innerHTML += `
        <div class="home-selector-container-option" id="opt-`+(counter+1)+`" onclick="setdecks(this.id)">
            <span style="font-size: 28px; font-weight: 600; color: #969696; padding-left: 23px; pointer-events: none;" id="opt-`+(counter+1)+`-name">`+key+`</span>
            <span style="font-size: 20px; font-weight: 600; color: #696969; padding-bottom: 1px; padding-left: 23px; pointer-events: none;" id="opt-`+(counter+1)+`-num">#0`+(counter+1)+`</span>
        </div>
        `
    }
    console.log(key);
    counter = counter + 1
});*/