//erzeuge die URL zu diesem Endpunkt
function makeUrl(endpoint) {
    return window.location.origin + '/' + endpoint
}


//leert den Inhalt dieses Elements
function clearDivContent(div) {
    //https://stackoverflow.com/a/3450726/2936355
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}


function createTdWithText(text) {
    let elem = document.createElement('td')
    elem.innerText = text
    return elem
}
