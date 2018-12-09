var titolo = $("div.titolo h2");
var elementi = $(".colonna");

function filtra(marca) {
	console.log("Filtro su ",titolo," \ne colonne ",elementi );
	if(marca!="Tutti"){
		titolo[0].innerHTML = "Ulitme Notizie "+marca
							+" <input id=\"chiudi\" height=\"2%\" width=\"2%\"type=\"image\" src=\"img/x.png\" onclick=\"filtra(\'Tutti\')\">";
		for (var i = 0; i<elementi.length; i++){
		
			//console.log("element id: ",elementi[i].id," Marca: ",marca);
			if (elementi[i].id!=marca){
				elementi[i].style.display="none";
			}else{
				elementi[i].style.display="table-cell";
			}
		}
	}else{
		titolo[0].innerText = "Ulitme Notizie "
		for (var i = 0; i<elementi.length; i++){
			elementi[i].style.display="table-cell";
		}
	}
	
}
