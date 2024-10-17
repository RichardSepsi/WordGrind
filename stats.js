var statshtml = `
<div class="side-window">
    <div class="exit-button" onclick="exitstats()">
        <img src="assets/log-out.svg" draggable="false" height="30px" width="30px">
        <div style="width: 16px;"></div>
        <span style="font-size: 22px; font-weight: 500; color: #696969;">出る</span>
    </div>
    <div class="stats-center-container" style="margin-left: 0;margin-top: 40px;">
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">今日:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">正解:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">不正解:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">合計:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">勉強日数:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">精度:</span> <span style="font-family: Inter;">0%</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">日平均:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">連続:</span> <span style="font-family: Inter;">0</span></span>
        <div style="height: 26px;"></div>
        <div style="height: 16px;"></div>
        <div style="height: 14px;"></div>
        <div style="display: flex; flex-direction: row; width: 100%;">
            <div class="button" style="height: 50px; flex-grow: 0.5; margin-left: 7px;" onclick="resetstats()">リセット</div>
        </div>
    </div>
</div>
`

let temphtmlsave4 = "";

function gotostats(){
    temphtmlsave4 = document.getElementById("main-container").innerHTML
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(-75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(75px)"
        document.getElementById("main-container").innerHTML = statshtml

        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}

function exitstats(){
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(-75px)"
        document.getElementById("main-container").innerHTML = temphtmlsave4
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}