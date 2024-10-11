
// Card data
var rawcardsjson = `
{
    "漢字単語" : {
        "card0" : {"front" : "簡単","answer" : "かんたん","back" : "simple, easy, uncomplicated","hint" : "no hint :/"},
        "card1" : {"front" : "向かう","answer" : "むかう","back" : "to face, to go towards, to head towards","hint" : "no hint :/"},
        "card2" : {"front" : "終わる","answer" : "おわる","back" : "to end, to come to an end, to finish, to close, to be over","hint" : "no hint :/"},
        "card3" : {"front" : "体","answer" : "からだ","back" : "body","hint" : "no hint :/"},
        "card4" : {"front" : "音","answer" : "おと","back" : "sound, noise","hint" : "no hint :/"},
        "card5" : {"front" : "過ぎる","answer" : "すぎる","back" : "to exceed, to surpass","hint" : "no hint :/"},
        "card6" : {"front" : "外","answer" : "そと","back" : "outside, exterior","hint" : "no hint :/"},
        "card7" : {"front" : "理由","answer" : "りゆう","back" : "reason","hint" : "no hint :/"},
        "card8" : {"front" : "何故","answer" : "なぜ","back" : "why","hint" : "no hint :/"},
        "card9" : {"front" : "今後","answer" : "こんご","back" : "from now","hint" : "no hint :/"},
        "card10" : {"front" : "普通","answer" : "ふつう","back" : "normal","hint" : "no hint :/"},
        "card11" : {"front" : "春","answer" : "はる","back" : "spring","hint" : "no hint :/"},
        "card12" : {"front" : "夏","answer" : "なつ","back" : "summer","hint" : "no hint :/"},
        "card13" : {"front" : "秋","answer" : "あき","back" : "autumn","hint" : "no hint :/"},
        "card14" : {"front" : "冬","answer" : "ふゆ","back" : "winter","hint" : "no hint :/"},
        "card15" : {"front" : "去年","answer" : "きょねん","back" : "last year","hint" : "no hint :/"},
        "card16" : {"front" : "来年","answer" : "らいねん","back" : "next year","hint" : "no hint :/"},
        "card17" : {"front" : "問題","answer" : "もんだい","back" : "problem","hint" : "no hint :/"},
        "card18" : {"front" : "絶対","answer" : "ぜったい","back" : "absolutely","hint" : "no hint :/"},
        "card19" : {"front" : "以上","answer" : "いじょう","back" : "beyond","hint" : "no hint :/"},
        "card20" : {"front" : "逃げる","answer" : "にげる","back" : "to run away, to flee","hint" : "no hint :/"},
        "card21" : {"front" : "殺す","answer" : "ころす","back" : "to kill","hint" : "no hint :/"},
        "card22" : {"front" : "受ける","answer" : "うける","back" : "to receive, to get","hint" : "no hint :/"},
        "card23" : {"front" : "存在","answer" : "そんざい","back" : "existence","hint" : "no hint :/"},
        "card24" : {"front" : "必要","answer" : "ひつよう","back" : "necessary","hint" : "no hint :/"},
        "card25" : {"front" : "歩く","answer" : "あるく","back" : "to walk","hint" : "no hint :/"},
        "card26" : {"front" : "掛ける","answer" : "かける","back" : "to hang (a coat, a picture)","hint" : "no hint :/"},
        "card27" : {"front" : "今年","answer" : "ことし","back" : "this year","hint" : "no hint :/"},
        "card28" : {"front" : "凄い","answer" : "すごい","back" : "amazing","hint" : "no hint :/"},
        "card29" : {"front" : "後","answer" : "あと","back" : "after, later","hint" : "no hint :/"},
        "card30" : {"front" : "者","answer" : "もの","back" : "person","hint" : "no hint :/"},
        "card31" : {"front" : "者","answer" : "もの","back" : "person","hint" : "no hint :/"},
        "card32" : {"front" : "作る","answer" : "つくる","back" : "to make","hint" : "no hint :/"},
        "card33" : {"front" : "相手","answer" : "あいて","back" : "partner","hint" : "no hint :/"},
        "card34" : {"front" : "笑う","answer" : "わらう","back" : "to laugh","hint" : "no hint :/"},
        "card35" : {"front" : "今朝","answer" : "けさ","back" : "this morning","hint" : "no hint :/"},
        "card36" : {"front" : "顔","answer" : "かお","back" : "face, visage","hint" : "no hint :/"},
        "card37" : {"front" : "進む","answer" : "すすむ","back" : "go forward","hint" : "no hint :/"},
        "card38" : {"front" : "約束","answer" : "やくそく","back" : "promise","hint" : "no hint :/"},
        "card39" : {"front" : "頑張る","answer" : "がんばる","back" : "persevere, do one's best","hint" : "no hint :/"},
        "card40" : {"front" : "嬉しい","answer" : "うれしい","back" : "happy, glad, pleased","hint" : "no hint :/"},
        "card41" : {"front" : "忘れる","answer" : "わすれる","back" : "to forget, to be forgetful","hint" : "no hint :/"},
        "card42" : {"front" : "続ける","answer" : "つづける","back" : "to continue, to keep up","hint" : "no hint :/"},
        "card43" : {"front" : "手伝う","answer" : "てつだう","back" : "to help, to assist, to aid","hint" : "no hint :/"},
        "card44" : {"front" : "様子","answer" : "ようす","back" : "yousu","hint" : "no hint :/"},
        "card45" : {"front" : "意味","answer" : "いみ","back" : "meaning","hint" : "no hint :/"},
        "card46" : {"front" : "場所","answer" : "ばしょ","back" : "place","hint" : "no hint :/"},
        "card47" : {"front" : "動く","answer" : "うごく","back" : "to move","hint" : "no hint :/"},
        "card48" : {"front" : "悪い","answer" : "わるい","back" : "bad","hint" : "no hint :/"},
        "card49" : {"front" : "教える","answer" : "おしえる","back" : "teach, instruct, tell","hint" : "no hint :/"},
        "card50" : {"front" : "嫌い","answer" : "きらい","back" : "disliked","hint" : "no hint :/"},
        "card51" : {"front" : "全然","answer" : "ぜんぜん","back" : "(not) at all","hint" : "no hint :/"},
        "card52" : {"front" : "胸","answer" : "むね","back" : "chest, breast","hint" : "no hint :/"},
        "card53" : {"front" : "右","answer" : "みぎ","back" : "right","hint" : "no hint :/"},
        "card54" : {"front" : "左","answer" : "ひだり","back" : "left","hint" : "no hint :/"},
        "card55" : {"front" : "間","answer" : "あいだ","back" : "gap, interval","hint" : "no hint :/"},
        "card56" : {"front" : "最初","answer" : "さいしょ","back" : "beginning","hint" : "no hint :/"},
        "card57" : {"front" : "最後","answer" : "さいご","back" : "end, last","hint" : "no hint :/"},
        "card59" : {"front" : "表情","answer" : "ひょうじょう","back" : "facial expression, look","hint" : "no hint :/"},
        "card60" : {"front" : "無理","answer" : "むり","back" : "unreasonable, unjustifiable","hint" : "no hint :/"},
        "card61" : {"front" : "欲しい","answer" : "ほしい","back" : "wanting (to have), desiring","hint" : "no hint :/"},
        "card62" : {"front" : "別に","answer" : "べつに","back" : "particularly","hint" : "no hint :/"},
        "card63" : {"front" : "開く","answer" : "ひらく","back" : "to open","hint" : "no hint :/"},
        "card64" : {"front" : "残る","answer" : "のこる","back" : "to remain","hint" : "no hint :/"},
        "card65" : {"front" : "答える","answer" : "こたえる","back" : "to answer, to reply","hint" : "no hint :/"},
        "card66" : {"front" : "怖い","answer" : "こわい","back" : "scary","hint" : "no hint :/"},
        "card67" : {"front" : "取る","answer" : "とる","back" : "to take","hint" : "no hint :/"},
        "card68" : {"front" : "助ける","answer" : "たすける","back" : "to save, to rescue, to spare","hint" : "no hint :/"},
        "card69" : {"front" : "状況","answer" : "じょうきょう","back" : "state of affairs, situation","hint" : "no hint :/"},
        "card70" : {"front" : "消える","answer" : "きえる","back" : "to disappear, to turn off","hint" : "no hint :/"},
        "card71" : {"front" : "長い","answer" : "ながい","back" : "long","hint" : "no hint :/"},
        "card72" : {"front" : "驚く","answer" : "おどろく","back" : "to be surprised, astonished","hint" : "no hint :/"},
        "card73" : {"front" : "腕","answer" : "うで","back" : "arm","hint" : "no hint :/"},
        "card74" : {"front" : "以外","answer" : "いがい","back" : "except for","hint" : "no hint :/"},
        "card75" : {"front" : "困る","answer" : "こまる","back" : "to be troubled","hint" : "no hint :/"},
        "card76" : {"front" : "離れる","answer" : "はなれる","back" : "to be separated, be apart","hint" : "no hint :/"},
        "card77" : {"front" : "書く","answer" : "かく","back" : "to write","hint" : "no hint :/"},
        "card78" : {"front" : "走る","answer" : "はしる","back" : "to run","hint" : "no hint :/"},
        "card79" : {"front" : "戦う/闘う","answer" : "たたかう","back" : "to wage war, to fight","hint" : "no hint :/"},
        "card80" : {"front" : "全部","answer" : "ぜんぶ","back" : "all, entire","hint" : "no hint :/"},
        "card81" : {"front" : "確認","answer" : "かくにん","back" : "confirmation","hint" : "no hint :/"},
        "card82" : {"front" : "瞬間","answer" : "しゅんかん","back" : "moment, second, instant","hint" : "no hint :/"},
        "card83" : {"front" : "説明","answer" : "せつめい","back" : "explanation","hint" : "no hint :/"},
        "card84" : {"front" : "決める","answer" : "きめる","back" : "to decide, to choose","hint" : "no hint :/"},
        "card85" : {"front" : "頂く","answer" : "いただく","back" : "to receive","hint" : "no hint :/"},
        "card86" : {"front" : "敵","answer" : "てき","back" : "opponent","hint" : "no hint :/"},
        "card87" : {"front" : "魔法","answer" : "まほう","back" : "magic","hint" : "no hint :/"},
        "card88" : {"front" : "起きる","answer" : "おきる","back" : "to get up, to occur","hint" : "no hint :/"},
        "card89" : {"front" : "落ちる","answer" : "おちる","back" : "to fall","hint" : "no hint :/"},
        "card90" : {"front" : "足","answer" : "あし","back" : "leg","hint" : "no hint :/"},
        "card91" : {"front" : "先に","answer" : "さきに","back" : "previously, before, earlier","hint" : "no hint :/"},
        "card92" : {"front" : "探す","answer" : "さがす","back" : "to search for, to look for","hint" : "no hint :/"},
        "card93" : {"front" : "子供","answer" : "こども","back" : "child, children","hint" : "no hint :/"},
        "card94" : {"front" : "怒る","answer" : "おこる","back" : "to get angry","hint" : "no hint :/"},
        "card95" : {"front" : "笑顔","answer" : "えがお","back" : "smiling face, smile","hint" : "no hint :/"},
        "card96" : {"front" : "変","answer" : "へん","back" : "strange, odd","hint" : "no hint :/"},
        "card97" : {"front" : "読む","answer" : "よむ","back" : "to read","hint" : "no hint :/"},
        "card98" : {"front" : "当然","answer" : "とうぜん","back" : "natural","hint" : "no hint :/"},
        "card99" : {"front" : "情報","answer" : "じょうほう","back" : "information, news","hint" : "no hint :/"}
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
        "card21" : {"front" : "まるで","answer" : "just like","back" : "-","hint" : "no hint :/"},
        "card22" : {"front" : "もっと","answer" : "more","back" : "-","hint" : "no hint :/"},
        "card23" : {"front" : "について","answer" : "regarding","back" : "-","hint" : "no hint :/"}
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