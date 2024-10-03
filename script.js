
var rawjson = `
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
        "card3" : {"front" : "ただ (not free)","answer" : "simply","back" : "-","hint" : "no hint :/"},
        "card4" : {"front" : "これから","answer" : "from now on","back" : "-","hint" : "no hint :/"},
        "card5" : {"front" : "くれる","answer" : "to give","back" : "-","hint" : "no hint :/"},
        "card6" : {"front" : "もう","answer" : "already","back" : "-","hint" : "no hint :/"},
        "card7" : {"front" : "いつ","answer" : "when","back" : "-","hint" : "no hint :/"},
        "card8" : {"front" : "また","answer" : "again","back" : "-","hint" : "no hint :/"},
        "card9" : {"front" : "つもり","answer" : "intention","back" : "-","hint" : "no hint :/"},
        "card10" : {"front" : "どうして","answer" : "why","back" : "-","hint" : "no hint :/"},
        "card11" : {"front" : "まだ","answer" : "yet","back" : "-","hint" : "no hint :/"},
        "card12" : {"front" : "いつも","answer" : "always","back" : "-","hint" : "no hint :/"},
        "card13" : {"front" : "ちゃんと","answer" : "properly","back" : "-","hint" : "no hint :/"},
        "card14" : {"front" : "ため","answer" : "sake","back" : "-","hint" : "no hint :/"},
        "card15" : {"front" : "おかしい","answer" : "strange","back" : "-","hint" : "no hint :/"},
        "card16" : {"front" : "どんな","answer" : "what kind of","back" : "-","hint" : "no hint :/"},
        "card17" : {"front" : "こう","answer" : "like this","back" : "-","hint" : "no hint :/"},
        "card18" : {"front" : "もし","answer" : "if","back" : "-","hint" : "no hint :/"},
        "card19" : {"front" : "さっき","answer" : "a moment ago","back" : "-","hint" : "no hint :/"},
        "card20" : {"front" : "うち","answer" : "one's household","back" : "-","hint" : "no hint :/"},
        "card21" : {"front" : "まるで","answer" : "just like","back" : "-","hint" : "no hint :/"}
    }
}
`

var deckdata = JSON.parse(rawjson);

/*fetch ("data.json")
    .then(response => response.json())
    .then(deckdt => deckdata = deckdt)
    .then(data => {
        window.onload = function() {
            let currentUrl = window.location.href;
            if (currentUrl.indexOf("?id=") !== -1) {
                let div = document.getElementById(currentUrl.split("?id=")[1]);
                let event = new Event("click");
                div.dispatchEvent(event);
            }
        };

    })*/