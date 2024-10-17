function initial() {
    if(Object.keys(deckdata).length < 2){
        document.getElementById("expand-button").style.opacity = "25%"
        document.getElementById("selector-wrapper").style.pointerEvents = "none"
    }
    if(Object.keys(deckdata).length > 4){
        document.getElementById("deck-options-container").style.width = "410px"
        document.getElementById("deck-options-container").style.right = "calc((100% - (399px / 1)) + (-4px))"
    }
    
    let counter = 0

    document.getElementById("deck-options-container").innerHTML = ""
    
    Object.keys(deckdata).forEach(key => {
        if(counter == 0){
            document.getElementById("id-deck-name").innerHTML = key
        }
        else {
            document.getElementById("deck-options-container").innerHTML += `
            <div class="home-selector-container-option" id="opt-`+(counter+1)+`" onclick="setdecks(this.id)">
                <span style="font-size: 28px; font-weight: 600; color: #969696; padding-left: 23px; pointer-events: none;" id="opt-`+(counter+1)+`-name">`+key+`</span>
                <span style="font-size: 20px; font-weight: 600; color: #696969; padding-bottom: 1px; padding-left: 23px; pointer-events: none;" id="opt-`+(counter+1)+`-num">#`+(counter+1)+`</span>
            </div>
            `
        }
        counter = counter + 1
    });
}

initial()

function expanddecks(){
    document.getElementById("deck-options-container").style.opacity = "1"
    document.getElementById("deck-options-container").style.pointerEvents = "all"
    document.getElementById("arrow-down-img").style.rotate = "180deg"
    document.getElementById("arrow-down-img").style.marginTop = "0px"
    document.getElementById("arrow-down-img").style.marginBottom = "2px"
    document.getElementById("home-selector-container").setAttribute("onClick", "closedecks()")
    document.addEventListener('click', closeclickout);
}

// Close the dropdown when clicking outside
function closeclickout(){
    if (isClickOutsideDropdown(event)) {
        closedecks()
    }
}
// Function to check if the clicked target is outside the dropdown
function isClickOutsideDropdown(event) {
    return !document.getElementById("selector-wrapper").contains(event.target);
}

function setdecks(id1){
    let olddeck = document.getElementById("id-deck-name").innerHTML
    let olddecknum = document.getElementById("id-deck-num").innerHTML
    document.getElementById("id-deck-name").innerHTML =  document.getElementById(id1+"-name").innerHTML
    document.getElementById("id-deck-num").innerHTML =  document.getElementById(id1+"-num").innerHTML
    document.getElementById(id1+"-name").innerHTML = olddeck
    document.getElementById(id1+"-num").innerHTML = olddecknum
    closedecks()
}

function closedecks(){
    document.getElementById("deck-options-container").style.opacity = "0"
    document.getElementById("deck-options-container").style.pointerEvents = "none"
    document.getElementById("arrow-down-img").style.rotate = "0deg"
    document.getElementById("arrow-down-img").style.marginTop = "2px"
    document.getElementById("arrow-down-img").style.marginBottom = "0px"
    document.getElementById("home-selector-container").setAttribute("onClick", "expanddecks()")
    document.removeEventListener('click', closeclickout);
}