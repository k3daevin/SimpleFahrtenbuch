
function makeUrl(endpoint) {
    return window.location.origin + '/' + endpoint
}


//https://stackoverflow.com/a/3450726/2936355
function clearDivContent(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}