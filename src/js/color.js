document.getElementById("inp-color").addEventListener("change", obojiMe);
function obojiMe() {
    var dohvatiInput = document.getElementById("inp-color");
    var boja = dohvatiInput.value;
	//document.body.style.backgroundColor = boja;
	document.getElementById("obojeno").style.backgroundColor=boja;
}