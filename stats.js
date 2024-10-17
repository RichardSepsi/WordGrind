var statshtml = `
<div class="side-window">
    <div class="exit-button" onclick="exitstats()">
        <img src="assets/log-out.svg" draggable="false" height="30px" width="30px">
        <div style="width: 16px;"></div>
        <span style="font-size: 22px; font-weight: 500; color: #696969;">出る</span>
    </div>
    <div class="stats-center-container" style="margin-left: 0;margin-top: 40px;">
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">今日:</span> <span style="font-family: Inter;" id="stats-today">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">正解:</span> <span style="font-family: Inter;" id="stats-correct">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">不正解:</span> <span style="font-family: Inter;" id="stats-incorrect">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">合計:</span> <span style="font-family: Inter;" id="stats-total">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">勉強日数:</span> <span style="font-family: Inter;" id="stats-studydays">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">精度:</span> <span style="font-family: Inter;" id="stats-accuracy">0%</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">日平均:</span> <span style="font-family: Inter;" id="stats-dailyaverage">0</span></span>
        <div style="height: 16px;"></div>
        <span style="font-weight: 500; font-size: 26px;"><span style="color: hsl(0, 0%, 30%);">連続:</span> <span style="font-family: Inter;" id="stats-streak">0</span></span>
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

var globaltoday = statsjson.今日
var globalcorrect = statsjson.正解
var globalincorrect = statsjson.不正解
var globaltotal = statsjson.合計
var globalstudaydays = statsjson.勉強日数
var globalaccuracy = statsjson.精度
var globaldailyaverage = statsjson.日平均
var globalstreak = statsjson.連続

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear()
var todate = dd + '/' + mm + '/' + yyyy;

var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
var yestdd = String(yesterday.getDate()).padStart(2, '0');
var yestmm = String(yesterday.getMonth() + 1).padStart(2, '0');
var yestyyyy = yesterday.getFullYear()
var yesterdate = yestdd + '/' + yestmm + '/' + yestyyyy;

if(statsjson.lastday == yesterdate){
    globalstreak = globalstreak + 1
    globalstudaydays = globalstudaydays +1
} else if(statsjson.lastday == todate){
    globalstreak = globalstreak
    globalstudaydays = globalstudaydays
} else {
    globalstreak = 1
}
statsjson.lastday = todate

function gotostats(){
    temphtmlsave4 = document.getElementById("main-container").innerHTML
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(-75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(75px)"
        document.getElementById("main-container").innerHTML = statshtml
        updatestats()
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}

console.log(yesterdate);
console.log(todate)

function updatestats(){
    document.getElementById("stats-today").innerHTML = globaltoday
    document.getElementById("stats-correct").innerHTML = globalcorrect
    document.getElementById("stats-incorrect").innerHTML = globalincorrect
    document.getElementById("stats-total").innerHTML = globaltotal
    document.getElementById("stats-studydays").innerHTML = globalstudaydays
    globalaccuracy = Math.round(globalcorrect / globaltotal * 100)
    document.getElementById("stats-accuracy").innerHTML = globalaccuracy+"%"
    globaldailyaverage = globaltotal / globalstudaydays
    document.getElementById("stats-dailyaverage").innerHTML = globaldailyaverage
    document.getElementById("stats-streak").innerHTML = globalstreak

    statsjson.今日 = globaltoday
    statsjson.正解 = globalcorrect
    statsjson.不正解 = globalincorrect
    statsjson.合計 = globaltotal
    statsjson.勉強日数 = globalstudaydays
    statsjson.精度 = globalaccuracy
    statsjson.日平均 = globaldailyaverage
    statsjson.連続 = globalstreak
}

function resetstats(){
    globaltoday = 0
    globalcorrect = 0
    globalincorrect = 0
    globaltotal = 0
    globalstudaydays = 1
    globalaccuracy = 0
    globaldailyaverage = 0
    globalstreak = 1
    statsjson.lastday = todate
    updatestats()
}

function exitstats(){
    document.getElementById("main-container").style.transition = "150ms ease-in"
    document.getElementById("main-container").style.transform = "translateX(75px)"
    document.getElementById("main-container").style.opacity = "0"
    setTimeout(()=> {
        document.getElementById("main-container").style.transition = "0ms"
        document.getElementById("main-container").style.transform = "translateX(-75px)"
        document.getElementById("main-container").innerHTML = temphtmlsave4
        updatestats()
        setTimeout(()=> {
            document.getElementById("main-container").style.transition = "150ms ease-out"
            document.getElementById("main-container").style.transform = "translateX(0px)"
            document.getElementById("main-container").style.opacity = "1"
        },10);
    },200);
}

updatestats()