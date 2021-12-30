
//die URL zur API ändert sich nicht, wird also einmalig festgelegt
const url = makeUrl('Stuhlgang');

//erwartet die JSON-Daten von GET /Stuhlgang
function setContent(data) {
    let stuhlgangDiv = document.getElementById('stuhlgang')

    //leere das div erstmal
    clearDivContent(stuhlgangDiv)

    //lege neue Tabelle an (diese Tabelle existiert bisher nur im Speicher, nicht sichtbar auf der Webseite)
    let table = document.createElement('table');

    //data ist ein JSON-Array, mit for-of kann man über jedes Element iterieren
    for (let sg of data) {
        //neue Zeile
        let tr = document.createElement('tr')

        //Zellen-Elemente mit Inhalt
        let timeStamp = createTdWithText(sg.timeStamp)
        let bristolSkala = createTdWithText(sg.bristolSkala)
        let kommentar = createTdWithText(sg.kommentar)

        //an die Zeile anhängen
        tr.appendChild(timeStamp)
        tr.appendChild(bristolSkala)
        tr.appendChild(kommentar)

        //Zeile an die Tabelle anhängen
        table.appendChild(tr)
    }

    //Tabelle an das div anhängen (jetzt erst wird es sichtbar)
    stuhlgangDiv.appendChild(table);
}

//lade die Daten und baue die Tabelle neu
function reload() {
    //einfach nur fetch(url) macht einen GET-Request, ruft also die Methode im StuhlgangController mit [HttpGet] auf
    //fetch liefert nicht direkt die Daten sondern erstmal ein Response-Objekt
    //https://developer.mozilla.org/en-US/docs/Web/API/Response
    //in dem stehen ein paar technische Details, aber eben auch die eigentlichen Daten
    //die Verkettung mit .then() ist derzeit Standard in JavaScript, damit wird das im Hintergrund ausgeführt und die Webseit friert nicht ein
    fetch(url)
        .then(response => response.json())  
        .then(json => setContent(json))
}



function formsubmit() {
    //FormData ist von JavaScript und liest solche <form>-Tags aus
    let formData = new FormData(shitform);
    //Ein Objekt aus dem FormData bauen
    let obj = Object.fromEntries(formData)
    //daraus einen JSON-String
    let json = JSON.stringify(obj)

    //jetzt müssen wir beim fetch ein paar extra Argumente mitgeben
    //  method: 'POST' bedeutet eben ein POST-Request, dadurch wird die Methode mit [HttpPost] aufgerufen
    //  body: json sind die Nutzdaten welche wir mitschicken, das wird im StuhlgangController mit [FromBody] ausgelesen
    //  headers: ist notwendig, damit die API versteht was wir ihr eigentlich schicken
    //then prüft hier ob die response auch ok ist und ruft dann einfach ein reload() auf
    fetch(url, {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json',
            'accept': '*/*'
        },
        
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                reload();
            }
        })
        .catch(error => console.error(error))
}


//dieses nackte reload() wird einfach einmalig ausgeführt wenn in stuhlgang.html die stuhlgang.js eingebunden wird
//dadurch wird die Tabelle gleich gefüllt
reload()