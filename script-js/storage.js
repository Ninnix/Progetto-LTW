function inizializzaStorageSegnalazione(){
    if (typeof(localStorage.segnalazione) == "undefined") {
        localStorage.segnalazione="[]";
    }
}

//TEST
function stampaStorageSemplice(){
    var r = JSON.parse(localStorage.segnalazione);
    var l = r.length;
    var s = new String("<h3>Stato di localStorage:</h3>");
    for (i=0;i<l;i++)
        s += JSON.stringify(r[i])+"<br/>";
    document.getElementById("vistaStorage").innerHTML=s;
    return true;
    }

function stampaStorageTabella(){
    var r = JSON.parse(localStorage.segnalazione);
    var l = r.length;
    var s = new String("<h3>Stato di localStorage:</h3>");
    s +="<table border=1><tr><th>nome</th><th>email</th><th>topic</th><th>descrizione</th><th>urlNews</th><th>urlImg</th></tr>";
    for (i=0;i<l;i++)
        s += "<tr><td>"+r[i].nome+"</td><td>"+r[i].email+"</td><td>"+r[i].topic+"</td><td>"+r[i].descrizione+"</td><td>"+r[i].urlNews+"</td><td>"+r[i].urlImg+"</td></tr>";
    s += "</table>";
    document.getElementById("vistaStorage").innerHTML = s;
    return true;
}

function resetStorageSegnalazione(){
    localStorage.segnalazione="[]";
}

function inserisciSegnalazione() {
    if (document.segnalaform.nome.value=="") {
        alert("Inserire nome o nickname");
        return false;
    }
    if (document.segnalaform.email.value=="") {
        alert("Inserire email");
        return false;
    }
    //topic
    if (document.segnalaform.descrizione.value=="") {
        alert("Inserire descrizione");
        return false;
    }
    var r = JSON.parse(localStorage.segnalazione);
    var nextpos = r.length;
    var o = { nome:document.segnalaform.nome.value,
              email:document.segnalaform.email.value,
              topic:document.segnalaform.topic.value,
              descrizione:document.segnalaform.descrizione.value,
              urlNews:document.segnalaform.url1.value,
              urlImg:document.segnalaform.url2.value };
    alert("Dati inseriti correttamente");
    r[nextpos] = o;
    localStorage.segnalazione = JSON.stringify(r);
    return true;
}

