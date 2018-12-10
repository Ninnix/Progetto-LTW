var titolo = $("div.titolo h2");
var elementi = $(".colonna");
var pulsanteTutte = $("#filtroTutte");

function filtra(marca) {
	
	if(marca!="Tutte"){
		titolo[0].innerHTML = "Ulitme Notizie "+marca
							+" <input id=\"chiudi\" height=\"20px\" width=\"20px\"type=\"image\" src=\"img/x.png\" onclick=\"filtra(\'Tutti\');changeCSS(\'style.css\',0)\">";
		pulsanteTutte[0].style.display="block";
		for (var i = 0; i<elementi.length; i++){
		
			//console.log("element id: ",elementi[i].id," Marca: ",marca);
			if (elementi[i].id!=marca){
				elementi[i].style.display="none";
			}else{
				elementi[i].style.display="table-cell";
			}
		}
	}else{
		pulsanteTutte[0].style.display="none";
		titolo[0].innerText = "Ulitme Notizie "
		for (var i = 0; i<elementi.length; i++){
			elementi[i].style.display="table-cell";
		}
	}
	
}
