
// Card data
var rawcardsjson = `
{
    "漢字単語" : {
        "card0" : {"front" : "簡単","answer" : "かんたん","back" : "simple, easy, uncomplicated","hint" : "no hint :/"},
        "card1" : {"front" : "向かう","answer" : "むかう","back" : "to face, to go towards, to head towards","hint" : "no hint :/"},
        "card2" : {"front" : "終わる","answer" : "おわる","back" : "to end, to come to an end, to finish, to close, to be over","hint" : "no hint :/"},
        "card3" : {"front" : "体","answer" : "からだ","back" : "body","hint" : "no hint :/"},
        "card4" : {"front" : "音","answer" : "おと","back" : "sound, noise","hint" : "no hint :/"}
    },
    "ひらがな単語" : {
        "card0" : {"front" : "ずっと","answer" : "continuously","back" : "-","hint" : "no hint :/"},
        "card1" : {"front" : "こちら","answer" : "this way","back" : "-","hint" : "no hint :/"},
        "card2" : {"front" : "くらい","answer" : "approximately","back" : "-","hint" : "no hint :/"},
        "card3" : {"front" : "これから","answer" : "from now on","back" : "-","hint" : "no hint :/"},
        "card4" : {"front" : "くれる","answer" : "to give","back" : "-","hint" : "no hint :/"}
    }
}
`
var deckdata = JSON.parse(rawcardsjson);


// Options
var optionsrawjson = `
{
    "入力かなに変わる" : "1",
    "カードの裏見せる" : "0",
    "時計見せる" : "1",
    "同じカードが続かないようにする" : "1"
}
`
var optionsjson = JSON.parse(optionsrawjson);


// Stats
var statsrawjson = `
{
    "今日" : 0,
    "正解" : 0,
    "不正解" : 0,
    "合計" : 0,
    "勉強日数" : 1,
    "精度" : 0,
    "日平均" : 0,
    "連続" : 1,
    "lastday" : "17/10/2024"
}
`
var statsjson = JSON.parse(statsrawjson);