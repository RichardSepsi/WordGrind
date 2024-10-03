
var rawjson = `
{
    "漢字単語" : {
        "card0" : {
            "front" : "簡単",
            "answer" : "かんたん",
            "back" : "simple, easy, uncomplicated",
            "hint" : "no hint :/"
        },
        "card1" : {
            "front" : "向かう",
            "answer" : "むかう",
            "back" : "to face, to go towards, to head towards",
            "hint" : "no hint :/"
        },
        "card2" : {
            "front" : "終わる",
            "answer" : "おわる",
            "back" : "to end, to come to an end, to finish, to close, to be over",
            "hint" : "no hint :/"
        },
        "card3" : {
            "front" : "体",
            "answer" : "からだ",
            "back" : "body",
            "hint" : "no hint :/"
        },
        "card4" : {
            "front" : "音",
            "answer" : "おと",
            "back" : "sound, noise",
            "hint" : "no hint :/"
        }
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