function globalsave(){
    rawcardsjson = JSON.stringify(deckdata)
    optionsrawjson = JSON.stringify(optionsjson)
    statsrawjson = JSON.stringify(statsjson)

    let formattedrawcardsjson = rawcardsjson.replaceAll("},", "},"+"\n");

    let datajs = `
    // Card data
    var rawcardsjson = \``+formattedrawcardsjson+`\`
    var deckdata = JSON.parse(rawcardsjson);


    // Options
    var optionsrawjson = \``+optionsrawjson+`\`
    var optionsjson = JSON.parse(optionsrawjson);


    // Stats
    var statsrawjson = \``+statsrawjson+`\`
    var statsjson = JSON.parse(statsrawjson);
    `

    // Create a Blob from the string content
    let blob = new Blob([datajs], { type: 'application/javascript' });

    // Create a link element to trigger the download
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data.js';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}