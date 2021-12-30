const url = makeUrl('Stuhlgang');

function setContent(data) {
    let stuhlgangDiv = document.getElementById('stuhlgang')

    clearDivContent(stuhlgangDiv)

    let table = document.createElement('table');

    for (let sg of data) {
        let tr = document.createElement('tr')

        let timeStamp = document.createElement('td')
        timeStamp.innerText = sg.timeStamp
        let bristolSkala = document.createElement('td')
        bristolSkala.innerText = sg.bristolSkala
        let kommentar = document.createElement('td')
        kommentar.innerText = sg.kommentar

        tr.appendChild(timeStamp)
        tr.appendChild(bristolSkala)
        tr.appendChild(kommentar)

        table.appendChild(tr)
    }

    stuhlgangDiv.appendChild(table);
}

function reload() {
    fetch(url)
        .then(response => response.json())
        .then(json => setContent(json))
}



function formsubmit () {
    let formData = new FormData(shitform);
    console.log(formData)
    let obj = Object.fromEntries(formData)
    console.log(obj)
    let json = JSON.stringify(obj)
    console.log(json)

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

reload()