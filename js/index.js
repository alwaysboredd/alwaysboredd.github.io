document.getElementById('about').addEventListener('click', renderAbout);

function renderAbout(e) {
    const divRow = document.createElement('div');
    divRow.className = "h-100 row align-items-center";

    const divCol = document.createElement('div');
    divCol.className = "col";
    
    const p = document.createElement('p');
    p.className = "text-light";
    p.append(document.createTextNode("pee poo"));

    divCol.append(p);
    divRow.append(divCol);
    document.body.appendChild(divRow);

    document.getElementById('titlebar').className = "row align-items-center";
}